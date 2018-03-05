export interface ICustomerTeaser {
  _id: string;
  fullName: string;
  phoneNumber: string;
  image: string;
}

export interface ICustomerRef {
  _id: string;
  firstName: string;
  lastName: string;
}

export interface ICustomer {
  _id: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  image: string;
}

export interface ICustomerResponse {
  status: string;
  values: ICustomer;
}

export interface ICustomersResponse {
  status: string;
  count: number;
  values: ICustomerTeaser[];
}
