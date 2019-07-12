import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  employees= [                  
    {empId:1001,empName:"Rahul",empSal:9000,empDep:"Java"},
    {empId:1002,empName:"Sachin",empSal:19000,empDep:"OraApps"},
    {empId:1003,empName:"Vikash",empSal:29000,empDep:"BI"},
    ];

    add(aId:number,aName:string,aSal:number,aDept:string)
    {
      let id1=aId;
      let name1=aName;
      let sal1=aSal;
      let dept1=aDept;
      this.employees.push({empId:id1,empName:name1,empSal:sal1,empDep:dept1});
    }
}
