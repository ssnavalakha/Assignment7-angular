import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleServiceClient} from '../../Services/ModuleServiceClient';

@Component({
  selector: 'app-module-list-component',
  templateUrl: './module-list-component.component.html',
  styleUrls: ['./module-list-component.component.css']
})
export class ModuleListComponentComponent implements OnInit {
  public modules: any[];
  public courseId: any;
  public selectedRow: any;

  constructor(private activatedRoute: ActivatedRoute,
              private moduleService: ModuleServiceClient) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.selectedRow = Number(params.moduleId);
      this.getModulesForCourseId(this.courseId);
    });
    }
    getModulesForCourseId(courseId) {
      if (this.courseId != null) {
        this.moduleService.findAllModulesForCourse(this.courseId)
          .then(mdl => this.modules = mdl);
      }
    }
  setClickedRow(m) {
    this.selectedRow = m.id;
  }
}
