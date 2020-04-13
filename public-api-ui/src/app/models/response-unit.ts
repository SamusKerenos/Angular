import { Address } from './address';
import { Pagination } from './pagination';

export interface ResposeUnit extends Pagination {
  ad: Address;
}
