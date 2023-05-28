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
  users = [];
  banks = [];
  products: Product[] = [];
  bankDmcls: Bank[] = [];
  tableKey:any =[];
  tableValue:any = [];
  tableKeyBank:any =[];
  tableValueBank:any =[];
  bankConst = BankTableConst;
  cardConst = CardTableConst;

  array:any =[
    {
      Name:"A",
      Adress:"Add1",
      Email:"Teste@teste.com"
    },

    {
      Name:"B",
      Adress:"Add2",
      Email:"Teste@teste02.com"
    }

  ];


  constructor(private appservice: AppService,
             private productService: ProductService,
             private bankService:BankService ){

              this.getData();

             }



  ngOnInit(): void {

    this.productService.getProductsWithOrdersSmall().then((data) => (this.products = data));
    this.bankService.getBankWithGroups().then((dataBank)=>(this.bankDmcls =dataBank))

    this.getUsersList();
    this.getBankList();
    this.getData();
    this.getDataBank();

  }

  getUsersList(){

    this.appservice.getUserList().subscribe(
      response => this.users = response
    )

  }

  getBankList(){

    this.appservice.getBankList().subscribe (
      response => this.banks = response
    )
   }


  getSeverityBank(status: string) {
    return status === "S" ? 'success' : 'danger';
  }

  getStatusBankSeverity(status: string) {
    return status === "S" ? 'success' : 'danger';
  }

  getData(){
    this.array.forEach((element:any) => {
      this.tableKey = Object.keys(element);
      this.tableValue.push(Object.values(element));
    });


  }

  getDataBank(){
    this.bankConst.forEach((element:any) => {
      this.tableKey = Object.keys(element);
      this.tableValueBank.push(Object.values(element));
    });

    console.log(this.tableKey);
    console.log(this.tableValueBank);
    console.log(this.bankConst);

  }

  getSeverity(status: string) {
    switch (status) {
        case 'INSTOCK':
            return 'success';
        case 'LOWSTOCK':
            return 'warning';
        case 'OUTOFSTOCK':
            return 'danger';
            default:
          return 'teste';
    }
}

getStatusSeverity(status: string){
    switch (status) {
        case 'PENDING':
            return 'warning';
        case 'DELIVERED':
            return 'success';
        case 'CANCELLED':
            return 'danger';
         default:
          return 'teste';

    }
 }
}





