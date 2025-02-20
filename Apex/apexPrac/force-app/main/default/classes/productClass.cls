public with sharing class productClass {

    @AuraEnabled(cacheable=true)
    public static List<Account> getProduct() {
        return [SELECT Name, Industry FROM Account LIMIT 10];
    }
}