import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {WidgetServiceClient} from '../../Services/WidgetServiceClient';

@Component({
  selector: 'app-widget-list-component',
  templateUrl: './widget-list-component.component.html',
  styleUrls: ['./widget-list-component.component.css']
})
export class WidgetListComponentComponent implements OnInit {
  public topicId: any;
  public courseId: any;
  public lessonId: any;
  public moduleId: any;
  public widgets: any[];
  constructor(private activatedRoute: ActivatedRoute,
              private widgetService: WidgetServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.lessonId = params.lessonId;
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      this.topicId = params.topicId;
    });
    if (this.topicId != null) {
      this.widgetService.findWidgetsForTopic(this.topicId)
        .then(wids => this.widgets = wids);
    }
  }
  splitArray(ar) {
    const array1 = ar.split(',');
    return array1;
  }
}
