import { LightningElement, wire, api, track } from 'lwc';
import getProductScorecards from '@salesforce/apex/fetchRecords.func';

const columns = [
    { label: 'Product Category', fieldName: 'Product_Category__c', type: 'text' },
    { label: 'Product Score', fieldName: 'Product_Score__c', type: 'number' },
    { label: 'Competitor Score', fieldName: 'Product_Competitor_Score__c', type: 'number' },
    { label: 'Future Score', fieldName: 'Product_Future_Score__c', type: 'number' },
    { label: 'Competitor Future Score', fieldName: 'Product_Competitor_Future_Score__c', type: 'number' }
];

export default class Product_Score extends LightningElement {
    @api recordId; // Account Record ID
    @track productScorecards = [];
    columns = columns;

    // Wire Apex method to fetch related records
    @wire(getProductScorecards, { accountId: '$recordId' })
    wiredRecords({ error, data }) {
        if (data) {
            this.productScorecards = data;
        } else if (error) {
            console.error('Error fetching product scorecards:', error);
        }
    }

    // Calculate totals dynamically
    get totalProductScore() {
        return this.productScorecards.reduce((sum, record) => sum + (record.Product_Score__c || 0), 0);
    }

    get totalCompetitorScore() {
        return this.productScorecards.reduce((sum, record) => sum + (record.Product_Competitor_Score__c || 0), 0);
    }

    get totalFutureScore() {
        return this.productScorecards.reduce((sum, record) => sum + (record.Product_Future_Score__c || 0), 0);
    }

    get totalCompetitorFutureScore() {
        return this.productScorecards.reduce((sum, record) => sum + (record.Product_Competitor_Future_Score__c || 0), 0);
    }
}
