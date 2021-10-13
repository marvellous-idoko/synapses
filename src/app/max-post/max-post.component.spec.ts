import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxPostComponent } from './max-post.component';

describe('MaxPostComponent', () => {
  let component: MaxPostComponent;
  let fixture: ComponentFixture<MaxPostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxPostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
