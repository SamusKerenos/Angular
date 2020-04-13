import { Action } from '@ngrx/store';

export enum CommonActionAnnotations {
  Say = '[Common Actions] say something to demonstarte message functionality',
}

export class SayAction implements Action {
  readonly type = CommonActionAnnotations.Say;

  constructor(public payload: string) {
  }
}

export type CommonActionType = SayAction;
