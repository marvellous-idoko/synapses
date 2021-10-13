import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MAXComponent } from './max.component';

describe('MAXComponent', () => {
  let component: MAXComponent;
  let fixture: ComponentFixture<MAXComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MAXComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MAXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
