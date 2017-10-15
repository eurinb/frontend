import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-income-list',
  templateUrl: './income-list.component.html',
  styleUrls: ['./income-list.component.css']
})
export class IncomeListComponent implements OnInit {
  
  vacationSalary: number = 210.55;
  basisSalary: number = 1415.93;
  bonusSalary: number = 145.11; 
  salary: number = 0; 

  overallIncome: number = 0;
  share: number= 51.22;


  constructor() { }


  sumSalary() {
    this.salary = this.vacationSalary + this.basisSalary + this.bonusSalary;
    return this.salary.toFixed(2);
  }

  sumOverallIncome() {
    this.overallIncome = this.salary + this.share;
    return this.overallIncome.toFixed(2);
    
  }

  ngOnInit() {
  }

}
