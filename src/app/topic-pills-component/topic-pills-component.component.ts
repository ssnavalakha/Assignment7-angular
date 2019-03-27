import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {TopicServiceClient} from '../../Services/TopicServiceClient';

@Component({
  selector: 'app-topic-pills-component',
  templateUrl: './topic-pills-component.component.html',
  styleUrls: ['./topic-pills-component.component.css']
})
export class TopicPillsComponentComponent implements OnInit {
  public topics: any[];
  public lessonId: any;
  public selectedRow: any;
  public moduleId: any;
  public courseId: any;
  constructor(private activatedRoute: ActivatedRoute,
              private topicService: TopicServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.lessonId = params.lessonId;
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
      this.selectedRow = Number(params.topicId);
      this.getTopicsForLesson(this.lessonId);
    });
  }
  getTopicsForLesson(lessonId) {
    if (this.lessonId != null) {
      this.topicService.findTopicsForLesson(this.lessonId)
        .then(tp => this.topics = tp);
    }
  }

  setClickedRow(t) {
    this.selectedRow = t.id;
  }
}
