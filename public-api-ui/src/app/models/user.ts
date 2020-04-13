import { DataUnit } from './data-unit';

export interface User extends DataUnit {
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}
