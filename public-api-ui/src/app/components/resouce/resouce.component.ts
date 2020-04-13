import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { Resource, DataUnit } from 'src/app/models';
import { AppState } from 'src/app/store/state/app.state';
import { Store } from '@ngrx/store';
import { DeleteResourceAction } from 'src/app/store/actions/resource.actions';

@Component({
  selector: 'app-resouce',
  templateUrl: './resouce.component.html',
  styleUrls: ['./resouce.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResouceComponent {
  @Input()
  resource: Resource;

  constructor(private store: Store<AppState>) { }

  delete(deleted: string) {
    const unit: DataUnit = {id: deleted};
    this.store.dispatch(new DeleteResourceAction(unit));
  }
}
