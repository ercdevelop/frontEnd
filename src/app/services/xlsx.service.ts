import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class XlsxService {

  constructor() { }

  exportToExcel(data: any[], finleName: string, sheetName:string) {

    const worksheet: XLSX.WorkSheet =XLSX.utils.json_to_sheet(data);
    const workbook: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook,worksheet,sheetName);

    XLSX.writeFile(workbook, `${finleName}.xlsx`);


  }
}
