import {Injectable} from '@angular/core';
@Injectable()
export class ModuleServiceClient {
  private readonly MODULE_API_URL: string;
  constructor() {
    this.MODULE_API_URL = 'http://localhost:8080/';
  }
  findAllModulesForCourse(cid) {
    return fetch(this.MODULE_API_URL + 'api/course/' + cid + '/modules')
      .then(response =>
        response.json());
  }
  findModuleById(mid) {
    return fetch(this.MODULE_API_URL + 'api/modules/' + mid)
      .then(response =>
        response.json());
  }
  findAllModules = () => {
    return fetch(this.MODULE_API_URL + '/api/topic/modules', {
      credentials: 'include'
    }).then(response =>
      response.json());
  }
}
