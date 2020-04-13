import { Address, User } from 'src/app/models';

export interface UserState {
  users: User[];
  ad: Address;
  page: number;
  per_page: number;
  total_pages: number;
  total: number;
}

export const InitialUserState: UserState = {
  users: null,
  ad: null,
  page: 0,
  per_page: 0,
  total_pages: 0,
  total: 0,
};
