import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-dataviewer',
  templateUrl: './dataviewer.component.html',
  styleUrls: ['./dataviewer.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class DataviewerComponent {
  constructor() {
  }
}
