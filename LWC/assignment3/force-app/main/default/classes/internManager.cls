public with sharing class internManager {


    @AuraEnabled(cacheable=true)
    public static List<Intern__c> getInterns(String name) {
        name = '%' + name + '%';
        return [SELECT Name, Department__c, Project__c FROM Intern__c WHERE Name LIKE :name];
    }

    @AuraEnabled(cacheable=true)
    public static String addIntern(List<Intern__c> intern) {

        List<String> internNames = new List<String>();
        for (Intern__c i : intern) {
            internNames.add(i.Name);
        }

            List<Intern__c> interns = [SELECT Name, Department__c, Project__c FROM Intern__c WHERE Name IN :internNames];
        if (interns.size() > 0) {
            return 'Intern with the same name already exists';
        }

        try {
            insert intern;
            return 'Intern added successfully';
        } catch (Exception e) {
            return e.getMessage();
        }
    }
}