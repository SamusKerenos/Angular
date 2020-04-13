import { createSelector } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { UserState } from '../state/user.state';

const selectUsers = (state: AppState) => state.usersState;

export const getUserPage = createSelector(
  selectUsers,
  (state: UserState) => state.page
);

export const getUserTotalPages = createSelector(
  selectUsers,
  (state: UserState) => state.total_pages
);

export const getUserList = createSelector(
  selectUsers,
  (state: UserState) => state.users
);
