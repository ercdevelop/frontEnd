import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  getBankWiDomicileGroups(){

    return [

      {
        id:12987,
        nmBank: 'Banco do Brasil',
        cdBank: '1',
        cdAgency: '7898',
        cdCurrentAcount: '8245',
        cdDigitCurrentAcount: '1',
        isActive: 'S',
        domicileGroups: [
          {
            id:'12987-1',
            cdCardType: 1,
            nmCardType: 'Visa',
            cdSettlementType: 1,
            nmSettlementType: 'Debito',
            cdDomicileGroup: 20,
            isActive: 'S',
            nmDomicileGroup: 'POS-Debito'
          },
          {
            id:'12987-2',
            cdCardType: 1,
            nmCardType: 'Visa',
            cdSettlementType: 2,
            nmSettlementType: 'Crédito',
            cdDomicileGroup: 21,
            isActive: 'S',
            nmDomicileGroup: 'POS-Crédito'
          },
          {
            id:'12987-3',
            cdCardType: 2,
            nmCardType: 'Master',
            cdSettlementType: 2,
            nmSettlementType: 'Crédito',
            cdDomicileGroup: 51,
            nmDomicileGroup: 'Lio-Crédito'
          },
          {
            id:'12987-4',
            cdCardType: 7,
            nmCardType: 'ELO',
            cdSettlementType: 1,
            nmSettlementType: 'Débito',
            cdDomicileGroup: 50,
            isActive: 'N',
            nmDomicileGroup: 'Lio-Débito'
          }
        ]
      },
      {
        id:9875,
        nmBank: 'Banco Bradesco',
        cdBank: '267',
        cdAgency: '5897',
        cdCurrentAcount: '9878',
        cdDigitCurrentAcount: '6',
        isActive: 'S',
        domicileGroups: [
          {
            id:'9875-1',
            cdCardType: 2,
            nmCardType: 'Master',
            cdSettlementType: 1,
            nmSettlementType: 'Debito',
            cdDomicileGroup: 20,
            isActive: 'S',
            nmDomicileGroup: 'POS-Debito'
          },
          {
            id:'9875-2',
            cdCardType: 11,
            nmCardType: 'Cabal',
            cdSettlementType: 2,
            nmSettlementType: 'Crédito',
            cdDomicileGroup: 21,
            isActive: 'S',
            nmDomicileGroup: 'POS-Crédito'
          },
          {
            id:'9875-3',
            cdCardType: 2,
            nmCardType: 'Master',
            cdSettlementType: 2,
            nmSettlementType: 'Crédito',
            cdDomicileGroup: 51,
            isActive: 'N',
            nmDomicileGroup: 'Lio-Crédito'
          },
          {
            id:'9875-4',
            cdCardType: 7,
            nmCardType: 'ELO',
            cdSettlementType: 1,
            nmSettlementType: 'Crédito',
            cdDomicileGroup: 81,
            isActive: 'S',
            nmDomicileGroup: 'Minha Casa-Crédito'
          }
        ]
      }


    ]

  }

  getBankWithGroups() {
    return Promise.resolve(this.getBankWiDomicileGroups().slice(0,10));
  }

}
