export interface IAuthToken {
  access_token: string;
  refresh_token: string;
}

export interface IAuthTokenResponse {
  status: string;
  message: string;
  values: IAuthToken;
}
