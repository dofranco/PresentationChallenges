public with sharing class CaseHelper {
    public CaseHelper() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getHighPriorityCases(){
        try {
            return [SELECT AccountId, ContactId, Subject FROM Case WHERE Priority = 'High'];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void createCase(String caseOrigin, String caseStatus) {
        // Create a new Case record
        Case newCase = new Case(Status = caseStatus, Origin = caseOrigin, Priority = 'High');
        
        // Insert the Case record
        insert newCase;
    }

    @AuraEnabled
    public static void closeCase(String caseId){
        try {
            Case c = [SELECT Id, Status FROM Case WHERE Id = :caseId];
            c.status = 'Closed';

            update c;
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

}