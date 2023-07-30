export class Banco {

  id!:string
  ec!:number
  banco!:string
  agencia	!:string
  conta	!:string
  domGroup!:DomicileGroup;
  domGroups:DomicileGroup[] = new Array();

}

export class DomicileGroup {

  id!:string
  bandeira !: number;
  grpDomicilio!:number;
  liquidacao !:number;


}
