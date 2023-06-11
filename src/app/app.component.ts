import { BankTableConst, CardTableConst } from './../domain/tableConstant';
import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { ProductService } from 'src/services/product.service';
import { Product } from 'src/domain/product';
import { Bank } from 'src/domain/bank';
import { BankService } from 'src/services/bank.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'grid-example01';
  bankDmcls: Bank[] = [];
  bankConst = BankTableConst;
  cardConst = CardTableConst;


  constructor(private appservice: AppService,
             private bankService:BankService ){

             }



  ngOnInit(): void {

   this.getDataBankDomicileGroup();

  }

  getDataBankDomicileGroup(){

    this.bankService.getBankWithGroups().then((dataBank)=>(this.bankDmcls =dataBank));

  }


  getSeverity(status: string) {
    switch (status) {
      case 'S':
            return 'success';
        case 'N':
            return 'danger';
         default:
          return 'warning';
    }
}

getStatusSeverity(status: string){
    switch (status) {
        case 'S':
            return 'success';
        case 'N':
            return 'danger';
         default:
          return 'warning';

    }
 }
}





