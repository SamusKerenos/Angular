import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AppState } from 'src/app/store/state/app.state';
import { Store, select } from '@ngrx/store';
import { LoadUserListAction } from 'src/app/store/actions/user.actions';
import { getUserList, getUserPage, getUserTotalPages } from 'src/app/store/selectors/user.selectors';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserListComponent implements OnInit {
  private userPage = 1;

  public users$ = this.store.pipe(select(getUserList));
  public userPage$ = this.store.pipe(select(getUserPage));
  public userTotalPage$ = this.store.pipe(select(getUserTotalPages));

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadUserListAction(this.userPage));
  }

  onNextUserPage() {
    this.userPage += 1;
    this.store.dispatch(new LoadUserListAction(this.userPage));
  }

  onPreviousUserPage() {
    this.userPage -= 1;
    this.store.dispatch(new LoadUserListAction(this.userPage));
  }
}
