import { IRole } from './role.model';

export interface IUserTeaser {
  _id: string;
  username: string;
  role: IRole;
}
