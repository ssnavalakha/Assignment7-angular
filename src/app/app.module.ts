import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseServiceClient} from '../Services/CourseServiceClient';
import {LessonServiceClient} from '../Services/LessonServiceClient';
import {ModuleServiceClient} from '../Services/ModuleServiceClient';
import {TopicServiceClient} from '../Services/TopicServiceClient';
import {WidgetServiceClient} from '../Services/WidgetServiceClient';
import { CourseGridComponentComponent } from './course-grid-component/course-grid-component.component';
import { ModuleListComponentComponent } from './module-list-component/module-list-component.component';
import { LessonTabsComponentComponent } from './lesson-tabs-component/lesson-tabs-component.component';
import { TopicPillsComponentComponent } from './topic-pills-component/topic-pills-component.component';
import { WidgetListComponentComponent } from './widget-list-component/widget-list-component.component';
import { routing } from './app.routing';
import { CourseEditorComponentComponent } from './course-editor-component/course-editor-component.component';
import { CourseTableComponentComponent } from './course-table-component/course-table-component.component';

@NgModule({
  declarations: [
    AppComponent,
    CourseGridComponentComponent,
    ModuleListComponentComponent,
    LessonTabsComponentComponent,
    TopicPillsComponentComponent,
    WidgetListComponentComponent,
    CourseEditorComponentComponent,
    CourseTableComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    routing
  ],
  providers: [ CourseServiceClient,
    LessonServiceClient,
    ModuleServiceClient,
    TopicServiceClient
    , WidgetServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
