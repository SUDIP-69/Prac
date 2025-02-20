public with sharing class forEachDemo{
    @AuraEnabled(cacheable=true)
    public static List<Account> getforEachDemo(){
        try {
            return [SELECT name,rating,fax,phone from account limit 7];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}