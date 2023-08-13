import { Component, EventEmitter, Output } from '@angular/core';
import { AppService } from '../app.service';
import { BankService } from 'src/services/bank.service';
import { Bank } from 'src/domain/bank';
import { BankTableConst, CardTableConst } from 'src/domain/tableConstant';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent {


  title = 'grid-example01';
  bankDmcls: Bank[] = [];
  bankConst = BankTableConst;
  cardConst = CardTableConst;
  @Output() eventBank = new EventEmitter<any>();


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
