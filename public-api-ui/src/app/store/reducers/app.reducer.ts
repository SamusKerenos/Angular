import { ActionReducerMap } from '@ngrx/store';
import { UserReducer } from './user.reducer';
import { ResourceReducer } from './resource.reducer';
import { AppState } from '../state/app.state';

export const AppReducer: ActionReducerMap<AppState, any> = {
  usersState: UserReducer,
  resourcesState: ResourceReducer
};
