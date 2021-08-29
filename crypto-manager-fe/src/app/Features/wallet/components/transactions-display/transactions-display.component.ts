import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {ITransactionItem} from '../../interfaces/itransaction-item';

@Component({
  selector: 'app-transactions-display',
  templateUrl: './transactions-display.component.html',
  styleUrls: ['./transactions-display.component.scss']
})
export class TransactionsDisplayComponent implements OnInit {

  @Input() transactionsList$: Observable<any>;
  @Input() currencyCode: string;
  transactionList: ITransactionItem[] = [];

  constructor() {
  }

  ngOnInit(): void {
    this.transactionsList$.forEach((transactionArray: ITransactionItem[]) => {
      transactionArray.forEach((transaction) => {
        if (transaction.amount.currency === this.currencyCode && !this.transactionList.includes(transaction)) {
          this.transactionList.push(transaction);
        }
      });
      console.log(transactionArray);
    });
  }

}
