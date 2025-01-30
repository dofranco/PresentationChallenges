public with sharing class AccountHelper {
    public AccountHelper() {

    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(){
        try {
            return [SELECT Id, Name, AnnualRevenue FROM Account];
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }

    @AuraEnabled
    public static void deleteAccount(String accId) {
        try {
            Account accToDelete = [SELECT Id FROM Account WHERE Id = :accId LIMIT 1];
            delete accToDelete;
        } catch (Exception e) {
            throw new AuraHandledException('Error deleting account: ' + e.getMessage());
        }
    }
}