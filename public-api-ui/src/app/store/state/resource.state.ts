import { Resource, Address } from 'src/app/models';

export interface ResourceState {
  resources: Resource[];
  ad: Address;
  page: number;
  per_page: number;
  total_pages: number;
  total: number;
}

export const InitialResourceState: ResourceState = {
  resources: null,
  ad: null,
  page: 0,
  per_page: 0,
  total_pages: 0,
  total: 0,
};
