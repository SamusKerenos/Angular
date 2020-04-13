import { Injectable } from '@angular/core';
import { Effect, Actions, ofType } from '@ngrx/effects';
import { SayAction, CommonActionAnnotations } from '../actions/common.actions';
import { map } from 'rxjs/operators';
import { CommonService } from 'src/app/services/common.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class CommonEffects {
  @Effect({ dispatch: false })
  $sayHi = this.action.pipe(
    ofType<SayAction>(CommonActionAnnotations.Say),
    map(action => {
      this.service.say(action.payload);
      return EMPTY;
    })
  );

  constructor(
    private action: Actions,
    private service: CommonService) {
  }
}
