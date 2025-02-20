public class OpportunityOrderReconciliationBatch implements Database.Batchable<SObject>
{
    public Set<Id> updatedOrders = new Set<Id>(); // Track updated orders
    public Set<Id> createdOrders = new Set<Id>(); // Track new orders

    // Query: Fetch Closed Won Opportunities without an Active Order
    public Database.QueryLocator start(Database.BatchableContext BC)
    {
        return Database.getQueryLocator([
            SELECT Id, Name, AccountId 
            FROM Opportunity 
            WHERE StageName = 'Closed Won' 
            AND Id NOT IN (SELECT OpportunityId FROM Order WHERE Status = 'Active')
        ]);
    }

    // Process: Handle batch records
    public void execute(Database.BatchableContext BC, List<Opportunity> oppList)
    {
        List<Order> ordersToInsert = new List<Order>();
        List<Order> ordersToUpdate = new List<Order>();

        // Fetch existing Orders for these Opportunities
        Map<Id, Order> existingOrders = new Map<Id, Order>();
        for (Order ord : [SELECT Id, OpportunityId, Status FROM Order WHERE OpportunityId IN :oppList]) {
            existingOrders.put(ord.OpportunityId, ord);
        }

        // Iterate through Opportunities
        for (Opportunity opp : oppList) {
            if (existingOrders.containsKey(opp.Id)) {
                // Update existing Order to "Active"
                Order existingOrder = existingOrders.get(opp.Id);
                if (existingOrder.Status != 'Active') {
                    existingOrder.Status = 'Active';
                    ordersToUpdate.add(existingOrder);
                    updatedOrders.add(existingOrder.Id);
                }
            } else {
                // Create a new Order
                Order newOrder = new Order(
                    OpportunityId = opp.Id,
                    AccountId = opp.AccountId,
                    Status = 'Active'
                );
                ordersToInsert.add(newOrder);
            }
        }

        // Perform DML operations
        if (!ordersToInsert.isEmpty()) {
            insert ordersToInsert;
            for (Order ord : ordersToInsert) {
                createdOrders.add(ord.Id);
            }
        }
        if (!ordersToUpdate.isEmpty()) {
            update ordersToUpdate;
        }
    }

    // Finish: Send notification and summary report
    public void finish(Database.BatchableContext BC)
    {
        // Notify Account Managers
        List<Messaging.SingleEmailMessage> emails = new List<Messaging.SingleEmailMessage>();
        for (User manager : [SELECT Id, Email FROM User WHERE Profile.Name = 'Account Manager']) {
            Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
            email.setToAddresses(new List<String>{manager.Email});
            email.setSubject('Opportunity-Order Reconciliation Update');
            email.setPlainTextBody(
                'Summary of the reconciliation process:\n' +
                'New Orders Created: ' + createdOrders.size() + '\n' +
                'Existing Orders Updated: ' + updatedOrders.size()
            );
            emails.add(email);
        }
        if (!emails.isEmpty()) {
            Messaging.sendEmail(emails);
        }

        // Log Summary (Optional: Could be stored in a Custom Object)
        System.debug('Reconciliation Summary: ' +
            'New Orders Created = ' + createdOrders.size() + ', ' +
            'Existing Orders Updated = ' + updatedOrders.size());
    }
}

public class calling 
{
    public static void callBatch()
    {
        OpportunityOrderReconciliationBatch batch = new OpportunityOrderReconciliationBatch();
        Database.executeBatch(batch, 20);
    }    
}
