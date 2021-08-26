import {Component, OnInit} from '@angular/core';
import {WalletDataService} from '../../services/wallet-data.service';

@Component({
  selector: 'app-wallet-history',
  templateUrl: './wallet-history.component.html',
  styleUrls: ['./wallet-history.component.scss']
})
export class WalletHistoryComponent implements OnInit {

  constructor(private walletDataService: WalletDataService) {
  }

  ngOnInit(): void {
    this.walletDataService.getTransactions();
  }

}
