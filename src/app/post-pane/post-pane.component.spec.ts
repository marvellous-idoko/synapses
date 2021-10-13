import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostPaneComponent } from './post-pane.component';

describe('PostPaneComponent', () => {
  let component: PostPaneComponent;
  let fixture: ComponentFixture<PostPaneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostPaneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostPaneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
