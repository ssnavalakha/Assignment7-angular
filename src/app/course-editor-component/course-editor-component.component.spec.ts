import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseEditorComponentComponent } from './course-editor-component.component';

describe('CourseEditorComponentComponent', () => {
  let component: CourseEditorComponentComponent;
  let fixture: ComponentFixture<CourseEditorComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseEditorComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseEditorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
