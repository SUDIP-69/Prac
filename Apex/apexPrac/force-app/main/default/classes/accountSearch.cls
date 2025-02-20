public with sharing class accountSearch {

    @AuraEnabled(cacheable=true)
    public static List<Account> accountSearch(String accountId) {
        accountId = '%' + accountId + '%';
        List<Account> accList = [SELECT Id, Name FROM Account WHERE Name LIKE :accountId];
        if(accList.isEmpty())
            throw new AuraHandledException('No Account Found');
        return acclist;
    }

    @AuraEnabled(cacheable=true)
    public static List<Contact> getContact(Id recordId)
    {
        List<Contact> conList = [SELECT Id, FirstName, Lastname, Email FROM Contact WHERE AccountId = :recordId];
    if(conList.isEmpty())
        throw new AuraHandledException('No Contact Found');
    return conList;
    }
}