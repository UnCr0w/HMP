import { Service } from '@angular/core';

@Service()
export class Transaction {
  history: any[] = [];

  addTransaction(cartItems: any[], finalTotal: number) {
    let newReceipt = {
      id: this.history.length + 1,
      tanggal: new Date(), 
      items: cartItems,    
      totalHarga: finalTotal 
    };

    this.history.push(newReceipt);
  }

  getHistory() {
    return this.history;
  }
}


