import { LightningElement,api,track,wire } from 'lwc';
import getInterns from '@salesforce/apex/internManager.getInterns';
columns=[
    {label:'Intern Name',fieldName:'Name'},
    {label:'Intern Department',fieldName:'Department'},
    {label:'Intern Project',fieldName:'Project'}
];

export default class InternManager extends LightningElement {
    data=[];
    columns=columns;

}