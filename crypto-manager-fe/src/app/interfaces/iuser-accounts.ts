import {IAccountData} from './iaccount-data';

export interface IuserAccounts {

  'pagination': {
    'ending_before': null;
    'starting_after': null;
    'limit': number;
    'order': string;
    'previous_uri': null;
    'next_uri': null
  };
  'data': IAccountData[];
  warnings?: [
    {
      id: string;
      message: string;
      url: string;
    }
  ];
}
