import { ResourceState } from '../state/resource.state';
import { AppState } from '../state/app.state';
import { createSelector } from '@ngrx/store';

const selectResources = (state: AppState) => state.resourcesState;

export const getResourceList = createSelector(
  selectResources,
  (state: ResourceState) => state.resources
);

export const getResourcePage = createSelector(
  selectResources,
  (state: ResourceState) => state.page
);

export const getResourceTotalPage = createSelector(
  selectResources,
  (state: ResourceState) => state.total_pages
);
