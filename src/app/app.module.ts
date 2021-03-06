import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { CourseListComponent } from './courses/course-list.component';
//import { StarComponent } from './shared/component/star/star.component';
import { startWith } from 'rxjs';
//import { ReplacePipe } from './pipe/replace.pipe';
//import { NavBarComponent } from './core/component/nav-bar/nav-bar.component';
//import { Error404Component } from './core/component/error-404/error-404.component';
//import { CourseInfoComponent } from './courses/course-info.component';
import { CourseModule } from './courses/course.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    //CourseListComponent,
    //StarComponent,
    //ReplacePipe,
    //NavBarComponent,
    //Error404Component,
    //CourseInfoComponent
  ],
  imports: [
    BrowserModule,
    //FormsModule,
    HttpClientModule,
    CourseModule,
    CoreModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses',pathMatch: 'full'
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
