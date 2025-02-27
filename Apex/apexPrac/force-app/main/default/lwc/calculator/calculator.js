import { LightningElement, api } from 'lwc';
import getCurrencyConversion from '@salesforce/apex/CurrencyConverterController.getCurrencyConversion';

export default class calculator extends LightningElement {
    isLoaded = false;
    @api amount = 1;
    basecode = "USD";
    targetcode = "INR";
    amount;
    conversionresult;
    @api headerText;
    @api rateResult;
    @api bgColor;
    @api decimalDigit;
    @api backBgColor;
    @api buttonColor;

    get textColour() {
        return `color:${this.rateResult}`
    }
    get backGraoundColour() {
        return `background-color:${this.bgColor}`
    }
    get behindBgColour() {
        return `background:${this.backBgColor}`
    }
    get convertButtonColour() {
        return `background:${this.buttonColor}`
    }

    handleBaseChange(event) {
        this.basecode = event.target.value;
        console.log("base_code: " + this.basecode);
    }
    handleTargetChange(event) {
        this.targetcode = event.target.value;
        console.log("target_code: " + this.targetcode);
    }
    handleAmountChange(event) {
        this.amount = event.target.value;
        console.log("Amount: " + this.amount);
        
    }

    changeCurrency() {
        if (!this.amount || !this.basecode || !this.targetcode) {
            console.error('All fields are required');
            return;
        }
        
        this.isLoaded = true;
        
        getCurrencyConversion({ 
            fromCurrency: this.basecode, 
            toCurrency: this.targetcode, 
            amount: parseFloat(this.amount)
        })
        .then(result => {
            if (result != null) {
                this.conversionresult = result.toFixed(this.decimalDigit || 2);
            } else {
                console.error('Conversion returned null');
            }
        })
        .catch(error => {
            console.error('Error:', error);
            if (error.body && error.body.message) {
                console.error('Detailed error:', error.body.message);
            }
        })
        .finally(() => {
            this.isLoaded = false;
        });
    }
    get options() {
        return [
            { "label": "AED", "value": "AED" },
            { "label": "AFN", "value": "AFN" },
            { "label": "ALL", "value": "ALL" },
            { "label": "AMD", "value": "AMD" },
            { "label": "ANG", "value": "ANG" },
            { "label": "AOA", "value": "AOA" },
            { "label": "ARS", "value": "ARS" },
            { "label": "AUD", "value": "AUD" },
            { "label": "AWG", "value": "AWG" },
            { "label": "AZN", "value": "AZN" },
            { "label": "BAM", "value": "BAM" },
            { "label": "BBD", "value": "BBD" },
            { "label": "BDT", "value": "BDT" },
            { "label": "BGN", "value": "BGN" },
            { "label": "BHD", "value": "BHD" },
            { "label": "BIF", "value": "BIF" },
            { "label": "BMD", "value": "BMD" },
            { "label": "BND", "value": "BND" },
            { "label": "BOB", "value": "BOB" },
            { "label": "BRL", "value": "BRL" },
            { "label": "BSD", "value": "BSD" },
            { "label": "BTC", "value": "BTC" },
            { "label": "BTN", "value": "BTN" },
            { "label": "BWP", "value": "BWP" },
            { "label": "BYN", "value": "BYN" },
            { "label": "BZD", "value": "BZD" },
            { "label": "CAD", "value": "CAD" },
            { "label": "CDF", "value": "CDF" },
            { "label": "CHF", "value": "CHF" },
            { "label": "CLF", "value": "CLF" },
            { "label": "CLP", "value": "CLP" },
            { "label": "CNH", "value": "CNH" },
            { "label": "CNY", "value": "CNY" },
            { "label": "COP", "value": "COP" },
            { "label": "CRC", "value": "CRC" },
            { "label": "CUC", "value": "CUC" },
            { "label": "CUP", "value": "CUP" },
            { "label": "CVE", "value": "CVE" },
            { "label": "CZK", "value": "CZK" },
            { "label": "DJF", "value": "DJF" },
            { "label": "DKK", "value": "DKK" },
            { "label": "DOP", "value": "DOP" },
            { "label": "DZD", "value": "DZD" },
            { "label": "EGP", "value": "EGP" },
            { "label": "ERN", "value": "ERN" },
            { "label": "ETB", "value": "ETB" },
            { "label": "EUR", "value": "EUR" },
            { "label": "FJD", "value": "FJD" },
            { "label": "FKP", "value": "FKP" },
            { "label": "GBP", "value": "GBP" },
            { "label": "GEL", "value": "GEL" },
            { "label": "GGP", "value": "GGP" },
            { "label": "GHS", "value": "GHS" },
            { "label": "GIP", "value": "GIP" },
            { "label": "GMD", "value": "GMD" },
            { "label": "GNF", "value": "GNF" },
            { "label": "GTQ", "value": "GTQ" },
            { "label": "GYD", "value": "GYD" },
            { "label": "HKD", "value": "HKD" },
            { "label": "HNL", "value": "HNL" },
            { "label": "HRK", "value": "HRK" },
            { "label": "HTG", "value": "HTG" },
            { "label": "HUF", "value": "HUF" },
            { "label": "IDR", "value": "IDR" },
            { "label": "ILS", "value": "ILS" },
            { "label": "IMP", "value": "IMP" },
            { "label": "INR", "value": "INR" },
            { "label": "IQD", "value": "IQD" },
            { "label": "IRR", "value": "IRR" },
            { "label": "ISK", "value": "ISK" },
            { "label": "JEP", "value": "JEP" },
            { "label": "JMD", "value": "JMD" },
            { "label": "JOD", "value": "JOD" },
            { "label": "JPY", "value": "JPY" },
            { "label": "KES", "value": "KES" },
            { "label": "KGS", "value": "KGS" },
            { "label": "KHR", "value": "KHR" },
            { "label": "KMF", "value": "KMF" },
            { "label": "KPW", "value": "KPW" },
            { "label": "KRW", "value": "KRW" },
            { "label": "KWD", "value": "KWD" },
            { "label": "KYD", "value": "KYD" },
            { "label": "KZT", "value": "KZT" },
            { "label": "LAK", "value": "LAK" },
            { "label": "LBP", "value": "LBP" },
            { "label": "LKR", "value": "LKR" },
            { "label": "LRD", "value": "LRD" },
            { "label": "LSL", "value": "LSL" },
            { "label": "LYD", "value": "LYD" },
            { "label": "MAD", "value": "MAD" },
            { "label": "MDL", "value": "MDL" },
            { "label": "MGA", "value": "MGA" },
            { "label": "MKD", "value": "MKD" },
            { "label": "MMK", "value": "MMK" },
            { "label": "MNT", "value": "MNT" },
            { "label": "MOP", "value": "MOP" },
            { "label": "MRO", "value": "MRO" },
            { "label": "MRU", "value": "MRU" },
            { "label": "MUR", "value": "MUR" },
            { "label": "MVR", "value": "MVR" },
            { "label": "MWK", "value": "MWK" },
            { "label": "MXN", "value": "MXN" },
            { "label": "MYR", "value": "MYR" },
            { "label": "MZN", "value": "MZN" },
            { "label": "NAD", "value": "NAD" },
            { "label": "NGN", "value": "NGN" },
            { "label": "NIO", "value": "NIO" },
            { "label": "NOK", "value": "NOK" },
            { "label": "NPR", "value": "NPR" },
            { "label": "NZD", "value": "NZD" },
            { "label": "OMR", "value": "OMR" },
            { "label": "PAB", "value": "PAB" },
            { "label": "PEN", "value": "PEN" },
            { "label": "PGK", "value": "PGK" },
            { "label": "PHP", "value": "PHP" },
            { "label": "PKR", "value": "PKR" },
            { "label": "PLN", "value": "PLN" },
            { "label": "PYG", "value": "PYG" },
            { "label": "QAR", "value": "QAR" },
            { "label": "RON", "value": "RON" },
            { "label": "RSD", "value": "RSD" },
            { "label": "RUB", "value": "RUB" },
            { "label": "RWF", "value": "RWF" },
            { "label": "SAR", "value": "SAR" },
            { "label": "SBD", "value": "SBD" },
            { "label": "SCR", "value": "SCR" },
            { "label": "SDG", "value": "SDG" },
            { "label": "SEK", "value": "SEK" },
            { "label": "SGD", "value": "SGD" },
            { "label": "SHP", "value": "SHP" },
            { "label": "SLL", "value": "SLL" },
            { "label": "SOS", "value": "SOS" },
            { "label": "SRD", "value": "SRD" },
            { "label": "SSP", "value": "SSP" },
            { "label": "STD", "value": "STD" },
            { "label": "STN", "value": "STN" },
            { "label": "SVC", "value": "SVC" },
            { "label": "SYP", "value": "SYP" },
            { "label": "SZL", "value": "SZL" },
            { "label": "THB", "value": "THB" },
            { "label": "TJS", "value": "TJS" },
            { "label": "TMT", "value": "TMT" },
            { "label": "TND", "value": "TND" },
            { "label": "TOP", "value": "TOP" },
            { "label": "TRY", "value": "TRY" },
            { "label": "TTD", "value": "TTD" },
            { "label": "TWD", "value": "TWD" },
            { "label": "TZS", "value": "TZS" },
            { "label": "UAH", "value": "UAH" },
            { "label": "UGX", "value": "UGX" },
            { "label": "USD", "value": "USD" },
            { "label": "UYU", "value": "UYU" },
            { "label": "UZS", "value": "UZS" },
            { "label": "VEF", "value": "VEF" },
            { "label": "VES", "value": "VES" },
            { "label": "VND", "value": "VND" },
            { "label": "VUV", "value": "VUV" },
            { "label": "WST", "value": "WST" },
            { "label": "XAF", "value": "XAF" },
            { "label": "XAG", "value": "XAG" },
            { "label": "XAU", "value": "XAU" },
            { "label": "XCD", "value": "XCD" },
            { "label": "XDR", "value": "XDR" },
            { "label": "XOF", "value": "XOF" },
            { "label": "XPD", "value": "XPD" },
            { "label": "XPF", "value": "XPF" },
            { "label": "XPT", "value": "XPT" },
            { "label": "YER", "value": "YER" },
            { "label": "ZAR", "value": "ZAR" },
            { "label": "ZMW", "value": "ZMW" },
            { "label": "ZWL", "value": "ZWL" }
        ]
    }
}