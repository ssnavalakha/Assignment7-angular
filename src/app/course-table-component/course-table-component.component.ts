import { Component, OnInit } from '@angular/core';
import {CourseServiceClient} from '../../Services/CourseServiceClient';
import {Router} from '@angular/router';

@Component({
  selector: 'app-course-table-component',
  templateUrl: './course-table-component.component.html',
  styleUrls: ['./course-table-component.component.css']
})
export class CourseTableComponentComponent implements OnInit {
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

  navigateToGrid() {
    this.router.navigate(['/course/']);
  }
}
