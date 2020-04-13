import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { UserService } from 'src/app/services/user.service';
import { UserResponse } from 'src/app/models';
import {
  UserActionAnnotations,
  LoadUserListAction,
  LoadUserListCompleteAction,
  DeleteUserCompleteAction,
  DeleteUserAction
} from '../actions/user.actions';
import { SayAction } from '../actions/common.actions';

@Injectable()
export class UserEffects {
  @Effect()
  $loadUserList: Observable<Action> = this.action.pipe(
    ofType<LoadUserListAction>(UserActionAnnotations.LoadUserList),
    switchMap(action => {
      return this.service.getListUsers(action.payload).pipe(
        map((result: UserResponse) => {
          return new LoadUserListCompleteAction(result);
        })
      );
    })
  );

  @Effect()
  $DeleteUser: Observable<Action> = this.action.pipe(
    ofType<DeleteUserAction>(UserActionAnnotations.DeleteUser),
    map(action => new DeleteUserCompleteAction())
  );

  @Effect()
  $DeleteUserComplete: Observable<Action> = this.action.pipe(
    ofType<DeleteUserCompleteAction>(UserActionAnnotations.DeleteUserComplete),
    map(action => new SayAction('user sucessful deleted'))
  );

  constructor(
    private action: Actions,
    private service: UserService) {
    }
}
