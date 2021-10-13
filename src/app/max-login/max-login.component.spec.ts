import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxLoginComponent } from './max-login.component';

describe('MaxLoginComponent', () => {
  let component: MaxLoginComponent;
  let fixture: ComponentFixture<MaxLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
