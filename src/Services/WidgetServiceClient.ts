import {Injectable} from '@angular/core';
@Injectable()
export class WidgetServiceClient {
  private WIDGET_API_URL: string;
  constructor() {
    this.WIDGET_API_URL = 'https://dry-coast-78857.herokuapp.com/';
  }
  comparator = (a , b) => {
    return a.widget.position - b.widget.position;
  }
  findWidgetsForTopic = topicId => {
    return this.findAllWidgets().then(wids => {
      const y = wids.filter(x => x.topicId === Number(topicId)).sort(this.comparator);
      return y;
    });
  }
  findWidgetById = (widgetId) => {
    return this.findAllWidgets().then(wids => {
      return wids.filter(x => x.widget.id === Number(widgetId)).sort(this.comparator);
    });
  }
  findAllWidgets = () => {
    return fetch(this.WIDGET_API_URL + 'api/topic/widgets', {
      credentials: 'include'
    }).then(response =>
      response.json());
  }
}
