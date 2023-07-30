import { Component } from '@angular/core';
import * as XLSX from 'xlsx';
import { Banco, DomicileGroup } from './domicileGroup';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {


  onFileChange(event: any): void {
    const file = event.target.files[0];
    const fileReader = new FileReader();

    fileReader.onload = (e: any) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const worksheet = workbook.Sheets[workbook.SheetNames[0]];
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { raw: true });

      const parseData = JSON.parse(JSON.stringify(jsonData));

      this.processJsonData(parseData);


    };

    fileReader.readAsArrayBuffer(file);
  }

  processJsonData(parseData: any[]) {

      let bancos : Banco[] = new Array();
      let bancosFinal : Banco[] = new Array();

      this.populateBanco(parseData, bancos);

      this.mapListBanco(bancos, bancosFinal);

      this.createFinalList(bancosFinal, bancos);

      console.log(bancosFinal);

      this.createObjectToJson(bancosFinal);


  }


  private createFinalList(bancosFinal: Banco[], bancos: Banco[]) {
    bancosFinal.forEach(bf => {

      bancos.forEach(bk => {

        if (bf.id === bk.id) {

          bf.domGroups.push(bk.domGroup);
        }

      });
    });
  }

  private mapListBanco(bancos: Banco[], bancosFinal: Banco[]) {
    let groupIntems = new Map<string, Banco>();

    bancos.forEach(bc => {

      const { id } = bc;

      if (groupIntems.has(id)) {
        groupIntems.get(id)?.domGroup;
      } else {
        groupIntems.set(id, bc);
      }
    });

    groupIntems.forEach((vl, key) => {

      bancosFinal.push(vl);

    });
  }

  private populateBanco(parseData: any[], bancos: Banco[]) {
    parseData.forEach(elem => {

      let banco: Banco = new Banco();
      let domicileGroup: DomicileGroup = new DomicileGroup();
      banco.banco = elem.banco;
      banco.agencia = elem.agencia;
      banco.conta = elem.conta;
      banco.ec = elem.ec;
      banco.id = banco.ec.toString() + banco.banco + banco.agencia + banco.conta;

      domicileGroup.bandeira = elem.bandeira;
      domicileGroup.id = banco.id;
      domicileGroup.grpDomicilio = elem.grpDomicilio;
      domicileGroup.liquidacao = elem.liquidacao;

      banco.domGroup = new DomicileGroup();
      banco.domGroup.bandeira = elem.bandeira;
      banco.domGroup.grpDomicilio = elem.grpDomicilio;
      banco.domGroup.liquidacao = elem.liquidacao;

      bancos.push(banco);


    });
  }

  private createObjectToJson(objectListBank:Banco[]){

    const jsonToString: string = JSON.stringify(objectListBank);

    console.log(jsonToString);

  }

}
