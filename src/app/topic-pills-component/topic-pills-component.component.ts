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
  public selectedLesson: any;
  public moduleId: any;
  public courseId: any;
  constructor(private activatedRoute: ActivatedRoute,
              private topicService: TopicServiceClient) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.lessonId = params.lessonId;
      this.moduleId = params.moduleId;
      this.courseId = params.courseId;
    });
    if (this.lessonId != null) {
      this.topicService.findTopicsForLesson(this.lessonId)
        .then(tp => this.topics = tp);
    }
  }

}
