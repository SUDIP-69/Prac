import { LightningElement, wire } from 'lwc';
import getProductList from '@salesforce/apex/productClass.getProduct';

const col=[
    {label:'Name', fieldName:'Name', type:'text'},
    {label:'Industry', fieldName:'Industry', type:'text'},
];
export default class Q3 extends LightningElement {
    data=[];
    columns=col;
    
    @wire(getProductList)
    wiredProduct({error,data}){
        if(data){
            this.data = data;
        }
        else if(error)
            console.error(error);
            
    }
}