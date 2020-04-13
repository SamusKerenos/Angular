import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppState } from 'src/app/store/state/app.state';
import { getResourceList, getResourcePage, getResourceTotalPage } from 'src/app/store/selectors/resource.selectors';
import { LoadResourceListAction } from 'src/app/store/actions/resource.actions';

@Component({
  selector: 'app-resource-list',
  templateUrl: './resource-list.component.html',
  styleUrls: ['./resource-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResourceListComponent implements OnInit {
  private resourcePage = 1;

  public resources$ = this.store.pipe(select(getResourceList));
  public resourcePage$ = this.store.pipe(select(getResourcePage));
  public resourceTotalPage$ = this.store.pipe(select(getResourceTotalPage));

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.dispatch(new LoadResourceListAction(this.resourcePage));
  }

  onNextResourcePage() {
    this.resourcePage += 1;
    this.store.dispatch(new LoadResourceListAction(this.resourcePage));
  }

  onPreviousResourcePage() {
    this.resourcePage -= 1;
    this.store.dispatch(new LoadResourceListAction(this.resourcePage));
  }
}
