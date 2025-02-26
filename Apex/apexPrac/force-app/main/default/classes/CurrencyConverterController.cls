public with sharing class CurrencyConverterController {
    private static final String API_KEY = 'Y-iFxpQB8vCsv_l4T3i1';
    private static final String ENDPOINT = 'https://marketdata.tradermade.com/api/v1/convert';
    
    @AuraEnabled
    public static Decimal getCurrencyConversion(String fromCurrency, String toCurrency, Decimal amount) {
        try {
            // Input validation
            if (String.isBlank(fromCurrency) || String.isBlank(toCurrency) || amount == null) {
                throw new AuraHandledException('All parameters are required');
            }
            
            String url = ENDPOINT + 
                '?api_key=' + EncodingUtil.urlEncode(API_KEY, 'UTF-8') + 
                '&from=' + EncodingUtil.urlEncode(fromCurrency, 'UTF-8') +
                '&to=' + EncodingUtil.urlEncode(toCurrency, 'UTF-8') +
                '&amount=' + amount;
            
            Http http = new Http();
            HttpRequest request = new HttpRequest();
            request.setEndpoint(url);
            request.setMethod('GET');
            request.setTimeout(20000); // Set timeout to 20 seconds
            
            HttpResponse response = http.send(request);
            
            if (response.getStatusCode() == 200) {
                Map<String, Object> result = (Map<String, Object>)JSON.deserializeUntyped(response.getBody());
                if (result.containsKey('total')) {
                    return (Decimal)result.get('total');
                } else {
                    throw new AuraHandledException('Invalid response format from API');
                }
            } else {
                String errorMsg = 'API Error: Status Code ' + response.getStatusCode() + ' - ' + response.getStatus();
                System.debug(errorMsg);
                throw new AuraHandledException(errorMsg);
            }
        } catch (Exception e) {
            System.debug('Error in getCurrencyConversion: ' + e.getMessage());
            throw new AuraHandledException('Currency conversion failed: ' + e.getMessage());
        }
    }
}