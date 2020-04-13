import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PaginatorComponent implements OnInit {
  @Input()
  public page: number;

  @Input()
  public totalPage: number;

  @Output()
  next = new EventEmitter();

  @Output()
  previous = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  disableMoveNext(): boolean {
    return this.page >= this.totalPage;
  }

  disableMovePrevious(): boolean {
    return  this.page <= 1;
  }
}
