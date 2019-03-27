import {Injectable} from '@angular/core';

@Injectable()
export class CourseServiceClient {
  private readonly COURSE_API_URL: string;
  constructor() {
    this.COURSE_API_URL = 'https://dry-coast-78857.herokuapp.com/';
  }
  findCourseById = courseId => {
    return fetch(this.COURSE_API_URL + 'api/courses/' + courseId)
      .then(response =>
        response.json());

  }
  findAllCourses = () => {
    return fetch(this.COURSE_API_URL + 'api/allcourses', {
      credentials: 'include'
    }).then(response =>
      response.json());

  }
}
