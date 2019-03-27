import {Injectable} from '@angular/core';
@Injectable()
export class LessonServiceClient {
  private readonly LESSON_API_URL: string;
  constructor() {
    this.LESSON_API_URL = 'https://dry-coast-78857.herokuapp.com/';
  }
  findLessonsByModule(mid) {
    return fetch(this.LESSON_API_URL + 'api/module/' + mid + '/lesson')
      .then(response =>
        response.json());
  }
  findLessonById(lid) {
    return fetch(this.LESSON_API_URL + 'api/lesson/' + lid)
      .then(response =>
        response.json());
  }
  findAllLessons = () => {
    return fetch(this.LESSON_API_URL + '/api/topic/lessons', {
      credentials: 'include'
    }).then(response =>
      response.json());
  }
}
