public class abc implements Database.Batchable<SObject>
{
    Integer limit;
    abc(Integer limit)
    {
        this.limt = limt;
    }

    public Database.QueryLocator start(Database.BatchableContext val1)
    {
        return Database.getQueryLocator('#query');
    }
    

    public void execute(Database.BatchableContext val1, List<SObject> val2)
    {
        //logic outlay
        //DML operations;
    }

    public void finish(Database.BatchableContext val1)
    {
        System.debug('Batch executed successfully');
    }

}

public class calling 
{
    public static void callBatch()
    {
        Integer i = 100;
        Integer btchSize = 10;
        abc ob = new abc(i);
        Database.executeBatch(ob,btchSize);
    }    
}