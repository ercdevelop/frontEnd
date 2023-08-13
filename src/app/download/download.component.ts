import { Component } from '@angular/core';
import *as XLSX from 'xlsx';
import { XlsxService } from '../services/xlsx.service';


@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['./download.component.css']
})
export class DownloadComponent {

  constructor(private excelService:XlsxService){}


  exportToExcel():void {

    const data = [
      {name: 'John', age:30, city:'New York'},
      {name: 'Alice', age:25, city:'Los Angeles'},
      {name: 'RAfael', age:7, city:'Sorocaba'}

    ] ;

    this.excelService.exportToExcel(data,'data','Sheet1');


  }

}
