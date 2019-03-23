import { Routes, RouterModule } from '@angular/router';
import {CourseGridComponentComponent} from './course-grid-component/course-grid-component.component';
import {ModuleListComponentComponent} from './module-list-component/module-list-component.component';
import {LessonTabsComponentComponent} from './lesson-tabs-component/lesson-tabs-component.component';
import {TopicPillsComponentComponent} from './topic-pills-component/topic-pills-component.component';
import {WidgetListComponentComponent} from './widget-list-component/widget-list-component.component';
import {CourseEditorComponentComponent} from './course-editor-component/course-editor-component.component';
import {CourseTableComponentComponent} from './course-table-component/course-table-component.component';
const appRoutes: Routes = [
  { path: '', component: CourseGridComponentComponent},
  { path: 'course', component: CourseGridComponentComponent },
  { path: 'course/table', component: CourseTableComponentComponent},
  { path: 'course/:courseId', component: CourseEditorComponentComponent },
  { path: 'course/:courseId/module', component: ModuleListComponentComponent},
  { path: 'course/:courseId/module/:moduleId/lesson', component: LessonTabsComponentComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic', component: TopicPillsComponentComponent},
  { path: 'course/:courseId/module/:moduleId/lesson/:lessonId/topic/:topicId/widget', component: WidgetListComponentComponent}
];
export const routing = RouterModule.forRoot(appRoutes);
