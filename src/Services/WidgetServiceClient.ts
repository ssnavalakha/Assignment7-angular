import {Injectable} from '@angular/core';
import {CourseServiceClient} from './CourseServiceClient';
@Injectable()
export class WidgetServiceClient {
  private WIDGET_API_URL: string;
  private widgets: any[];
  private widgetsToBeDeleted: any[];
  private newlyCreatedWidgets: any[];
  private courses: {};
  private courseService: CourseServiceClient;
  constructor() {
    this.WIDGET_API_URL = 'http://localhost:8080/';
    this.widgets = [];
    this.widgetsToBeDeleted = [];
    this.newlyCreatedWidgets = [];
    this.courses = {};
    this.courseService = new CourseServiceClient();
  }

  findWidgetsForTopic = topicId => {
    return this.widgets.filter(wid => wid.topicId === topicId);
  }
  findWidgetById = (widgetId) => {
    return this.widgets.find(wid => wid.widget.id === widgetId);
  }
  findAllWidgets = () => {
    return fetch(this.WIDGET_API_URL + '/api/topic/widgets', {
      credentials: 'include'
    }).then(response =>
      response.json());
  }
}
