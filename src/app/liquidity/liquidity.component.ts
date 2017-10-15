import { Component, OnInit } from '@angular/core';
import { IMultiSelectOption } from 'angular-2-dropdown-multiselect';
import {Http} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';


@Component({
  selector: 'app-liquidity',
  templateUrl: './liquidity.component.html',
  styleUrls: ['./liquidity.component.css']
})


export class LiquidityComponent implements OnInit {
  optionsModel: number[];
  myOptions: IMultiSelectOption[];
  accounts = [ 'DKB Konto', 'Commerzbank Konto'];

  constructor(private http: Http) { }  
   

  ngOnInit() {
    this.myOptions = [
      { id: 1, name: 'DKB Girokonto' },
      { id: 2, name: 'Commerzbank Tagesgeldkonto' },
      
  ];
  
  }
  onChange() {
    console.log(this.optionsModel);
  }

  

}
