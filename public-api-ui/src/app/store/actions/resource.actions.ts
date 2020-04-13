import { Action } from '@ngrx/store';
import { ResourceResponse, DataUnit, Resource } from 'src/app/models';

export enum ResourceActionAnnotations {
  LoadResourceList = '[Resource Action] load list with all resource',
  LoadResourceListComplete = '[Resource Action] load list with all resource complete',
  DeleteResource = '[Resource Action] delete concrete resource',
  DeleteResourceComplete = '[Resource Action] show information about deleted resource',
}

export class LoadResourceListAction implements Action {
  readonly type = ResourceActionAnnotations.LoadResourceList;

  constructor(public payload: number) {
  }
}

export class LoadResourceListCompleteAction implements Action {
  readonly type = ResourceActionAnnotations.LoadResourceListComplete;

  constructor(public payload: ResourceResponse) {
  }
}

export class DeleteResourceAction implements Action {
  readonly type = ResourceActionAnnotations.DeleteResource;

  constructor(public payload: DataUnit) {
  }
}

export class DeleteResourceCompleteAction implements Action {
  readonly type = ResourceActionAnnotations.DeleteResourceComplete;
}

export type ResourceActionType = LoadResourceListAction
  | LoadResourceListCompleteAction
  | DeleteResourceAction
  | DeleteResourceCompleteAction;
