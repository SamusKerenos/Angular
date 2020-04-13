import { Action } from '@ngrx/store';
import { UserResponse, DataUnit, User } from 'src/app/models';

export enum UserActionAnnotations {
  LoadUserList = '[User Action] load list with all users on page',
  LoadUserListComplete = '[User Action] load list with all users on page complete',
  DeleteUser = '[User Action] delete concrete user from list',
  DeleteUserComplete = '[User Action] show information about deleted user',
}

export class LoadUserListAction implements Action {
  readonly type = UserActionAnnotations.LoadUserList;

  constructor(public payload: number) {
  }
}

export class LoadUserListCompleteAction implements Action {
  readonly type = UserActionAnnotations.LoadUserListComplete;

  constructor(public payload: UserResponse) {
  }
}

export class DeleteUserAction implements Action {
  readonly type = UserActionAnnotations.DeleteUser;

  constructor(public payload: DataUnit) {
  }
}

export class DeleteUserCompleteAction implements Action {
  readonly type = UserActionAnnotations.DeleteUserComplete;
}

export type UserActionType = LoadUserListAction
  | LoadUserListCompleteAction
  | DeleteUserAction
  | DeleteUserCompleteAction;
