public with sharing class internManager {
    @AuraEnabled(cacheable=true)
    public static List<Intern__c> getInterns() {
        return [SELECT Id, Name, Department__c, Project__c FROM Intern__c LIMIT 10];
    }
}