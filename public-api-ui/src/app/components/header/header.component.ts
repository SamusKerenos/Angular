import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { SayAction} from 'src/app/store/actions/common.actions';
import { AppState } from 'src/app/store/state/app.state';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
  private error: string;

  constructor(
    private store: Store<AppState>,
    private service: CommonService) { }

  ngOnInit() {
  }

  onSayHiClick() {
    this.store.dispatch(new SayAction('Hi!'));
  }

  onMakeErrorClick() {
    this.service.makeHttpError().subscribe(resp => {
      if (resp) {
        this.error = resp.message;
      }
    });
  }
}
