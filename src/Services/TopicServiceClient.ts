import {Injectable} from '@angular/core';
@Injectable()
export class TopicServiceClient {
  private readonly TOPIC_API_URL: string;
  constructor() {
    this.TOPIC_API_URL = 'http://localhost:8080/';
  }

  findTopicsForLesson(lid) {
    return fetch(this.TOPIC_API_URL + 'api/lesson/' + lid + '/topic')
      .then(response =>
        response.json());
  }
  findTopicById(tid) {
    return fetch(this.TOPIC_API_URL + 'api/topic/' + tid)
      .then(response =>
        response.json());
  }
  findAllTopics = () => {
    return fetch(this.TOPIC_API_URL + '/api/topic/topics', {
      credentials: 'include'
    }).then(response =>
      response.json());
  }
}
