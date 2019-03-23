import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseTableComponentComponent } from './course-table-component.component';

describe('CourseTableComponentComponent', () => {
  let component: CourseTableComponentComponent;
  let fixture: ComponentFixture<CourseTableComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseTableComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseTableComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
