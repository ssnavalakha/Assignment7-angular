import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CourseServiceClient} from '../../Services/CourseServiceClient';
import {ModuleServiceClient} from '../../Services/ModuleServiceClient';
import {LessonServiceClient} from '../../Services/LessonServiceClient';
import {TopicServiceClient} from '../../Services/TopicServiceClient';

@Component({
  selector: 'app-course-editor-component',
  templateUrl: './course-editor-component.component.html',
  styleUrls: ['./course-editor-component.component.css']
})
export class CourseEditorComponentComponent implements OnInit {
  public courseId: any;
  public course: any;
  public toggle: boolean;

  constructor(private activatedRoute: ActivatedRoute,
              private service: CourseServiceClient) {
  }

  ngOnInit() {
    this.toggle = false;
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.service.findCourseById(this.courseId)
        .then(crs => {
          this.course = crs;
        });
    });
  }

  toggleNavBar() {
    this.toggle = !this.toggle;
  }

}
