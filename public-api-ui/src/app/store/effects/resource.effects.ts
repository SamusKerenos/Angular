import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ResourceResponse } from 'src/app/models';
import { SayAction } from '../actions/common.actions';
import { ResourceService } from 'src/app/services/resource.service';
import {
  ResourceActionAnnotations,
  LoadResourceListCompleteAction,
  LoadResourceListAction,
  DeleteResourceCompleteAction,
  DeleteResourceAction,
} from '../actions/resource.actions';
import { Action } from '@ngrx/store';

@Injectable()
export class ResourceEffects {
  @Effect()
  $loadResourceList: Observable<Action> = this.action.pipe(
    ofType<LoadResourceListAction>(ResourceActionAnnotations.LoadResourceList),
    switchMap(action => {
      return this.service.getListResources(action.payload).pipe(
        map((result: ResourceResponse) => {
          return new LoadResourceListCompleteAction(result);
        })
      );
    })
  );

  @Effect()
  $DeleteResource: Observable<Action> = this.action.pipe(
    ofType<DeleteResourceAction>(ResourceActionAnnotations.DeleteResource),
    map(action => new DeleteResourceCompleteAction())
  );

  @Effect()
  $DeleteResourceComplete: Observable<Action> = this.action.pipe(
    ofType<DeleteResourceCompleteAction>(ResourceActionAnnotations.DeleteResourceComplete),
    map(action => new SayAction('resource sucessful deleted'))
  );

  constructor(
    private action: Actions,
    private service: ResourceService) {
    }
}
