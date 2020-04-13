import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { User, DataUnit } from 'src/app/models';
import { AppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { DeleteUserAction } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserComponent {
  @Input()
  user: User;

  constructor(private store: Store<AppState>) { }

  delete(deleted: string) {
    const unit: DataUnit = {id: deleted};
    this.store.dispatch(new DeleteUserAction(unit));
  }
}
