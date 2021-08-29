export interface ITransactionItem {
  'id': string;
  'type': string;
  'status': string;
  'amount': {
    'amount': string;
    'currency': string;
  };
  'native_amount': {
    'amount': string;
    'currency': string;
  };
  'description': string;
  'created_at': string;
  'updated_at': string;
  'resource': string;
  'resource_path': string;
  'network': {
    'status': string;
    'name': string;
  };
  'to'?: {
    'id': string;
    'resource': string;
    'resource_path': string;
  };
  'from'?: {
    id: string;
    resource: string;
    resource_path: string;
    currency: string;
  };
  'details': {
    'title': string;
    'subtitle': string;
  };
}
