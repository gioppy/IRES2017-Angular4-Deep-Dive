export interface ICustomer {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
}

export interface ICustomerResponse {
  status: string;
  values: ICustomer;
}

export interface ICustomerTeaser {
  _id: string;
  fullName: string;
}

export interface ICustomers {
  status: string;
  count: number;
  values: ICustomerTeaser[];
}
