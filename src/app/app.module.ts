import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CourseServiceClient} from '../Services/CourseServiceClient';
import {LessonServiceClient} from '../Services/LessonServiceClient';
import {ModuleServiceClient} from '../Services/ModuleServiceClient';
import {TopicServiceClient} from '../Services/TopicServiceClient';
import {WidgetServiceClient} from '../Services/WidgetServiceClient';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ CourseServiceClient, LessonServiceClient,
    ModuleServiceClient,
    TopicServiceClient
    , WidgetServiceClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
