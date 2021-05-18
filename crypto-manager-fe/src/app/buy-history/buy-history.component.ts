import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormBuilder, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-buy-history',
  templateUrl: './buy-history.component.html',
  styleUrls: ['./buy-history.component.scss']
})
export class BuyHistoryComponent implements OnInit {

  addNewAssetGroup = this.fb.group({
    assetName: ['', Validators.required],
    qty: ['', Validators.required],
    price: ['', Validators.required],
    date: ['', Validators.required]
  });
  newCrypto = false;
  cryptoAssets = [
    {
      value: 'btc',
      name: 'Bitcoin'
    },
    {
      value: 'eth',
      name: 'Ethereum'
    },
    {
      value: 'xlm',
      name: 'Stellar'
    },
    {
      value: 'cmp',
      name: 'Compound'
    },
    {
      value: 'dgc',
      name: 'DogeCoin'
    },
  ];
  minDate = null;

  constructor(private snackBar: MatSnackBar, private fb: FormBuilder) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.log(this.addNewAssetGroup.value as string);
    this.snackBar.open('Added new asset to your wallet', 'CLOSE', {
      duration: 3000
    });
  }
}
