public with sharing class internManager  {
        @AuraEnabled(cacheable=true)
        public static List<Intern__c> getInterns() {
            return [SELECT Id, Name, Department__c, Project__c FROM Intern__c];
        }
     
        @AuraEnabled
        public static Boolean checkUniqueName(String name) {
            Integer count = [SELECT COUNT() FROM Intern__c WHERE Name = :name];
            return count == 0;
        }
     
        @AuraEnabled
        public static void createIntern(String name, String department, String project) {
            Intern__c intern = new Intern__c();
            intern.Name = name;
            intern.Department__c = department;
            intern.Project__c = project;
            insert intern;
        }
    }