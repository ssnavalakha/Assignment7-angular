import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../Services/CourseServiceClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-grid-component',
  templateUrl: './course-grid-component.component.html',
  styleUrls: ['./course-grid-component.component.css']
})
export class CourseGridComponentComponent implements OnInit {
  public courses: any[];

  constructor(private service:
                CourseServiceClient,
              private router: Router) {
  }

  ngOnInit() {
    this.service.findAllCourses().then(courses => {
      this.courses = courses;
    });
  }
  navigateToEditor(id) {
    this.router.navigate(['/course/' + id]);
  }

  navigateToList() {
    this.router.navigate(['/course/table/']);
  }
}
