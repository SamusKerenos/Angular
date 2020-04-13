import { UserState, InitialUserState } from './user.state';
import { ResourceState, InitialResourceState } from './resource.state';

export interface AppState {
  usersState: UserState;
  resourcesState: ResourceState;
}

export const InitialAppState: AppState = {
  usersState: InitialUserState,
  resourcesState: InitialResourceState
};

export function getInitialState(): AppState {
  return InitialAppState;
}
