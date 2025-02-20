public class AccountUpdateBatch implements Database.Batchable<SObject>{
 
    Integer limit;
 
    public accountUpdateBatch(Integer limit){
        this.limit = limit;
    }
 
    public Database.QueryLocator start(Database.BatchableContext BC){
        return Database.getQueryLocator('SELECT Id, Name, Status FROM Account where Status = null limit' + this.limit);
    }
 
    public void execute(Database.BatchableContext BC, List<Account> accountList){
        List<Account> accountListToUpdate = new List<Account>();
        for(Account acc : accountList){
            if(acc.Probability > 50){
                acc.Status = 'Prospect';
                accountListToUpdate.add(acc);
            }
        }
 
        if(accountListtoUpdate.size() > 0){
            Update AccountListToUpdate;
        }
       
    }
 
    public void finish(Database.BatchableContext BC){
        Integer y = 20;
        System.debug(y);
    }
}
 
 
public class ABC{
    public static void callBatchClass(){
        AccountUpdateBatch accUpdate = new AccountUpdateBatch(100);
        Database.executeBatch(accUpdate, 10);
 
        Integer i = 10;
        System.debug(i);
    }
}