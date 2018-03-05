import { ICustomerRef, ICustomerTeaser } from './customer.model';

export interface IOrderTeaser {
  _id: string;
  customer: ICustomerTeaser;
  description: string;
  state: string;
  created: Date;
}

export interface IOrder {
  _id: string;
  customer: ICustomerRef;
  state: string;
  created: Date;
  backupData: boolean;
  includedAccessories: string[];
  description: string;
  notes: string;
}

export interface IOrdersResponse {
  status: string;
  count: number;
  values: IOrderTeaser[];
}

export interface IOrderResponse {
  status: string;
  values: IOrder;
}
