import { User } from './user';
import { ResposeUnit } from './response-unit';

export interface UserResponse extends ResposeUnit {
  data: User[];
}
