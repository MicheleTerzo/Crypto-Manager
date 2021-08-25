import {ICurrency} from './icurrency';

export interface IAccountData {
  'id': string;
  'name': string;
  'primary': boolean;
  'type': string;
  'currency': ICurrency;
  'balance': {
    'amount': string;
    'currency': string;
  };
  'created_at': string;
  'updated_at': string;
  'resource': string;
  'resource_path': string;
  'allow_deposits': boolean;
  'allow_withdrawals': boolean;
  'exchangeRate': number;
  'totalValue': number;
}
