import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResouceComponent } from './resouce.component';

describe('ResouceComponent', () => {
  let component: ResouceComponent;
  let fixture: ComponentFixture<ResouceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResouceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResouceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
