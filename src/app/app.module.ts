import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {registerLocaleData} from '@angular/common';
import ruLocale from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { CommentComponent } from './shared/components/comment/comment.component';
import { AddCommentComponent } from './shared/components/add-comment/add-comment.component';
import { ListCommentsComponent } from './shared/components/list-comments/list-comments.component';
import { RefDirective } from './shared/directives/ref.directive';
import { AlertComponent } from './shared/components/alert/alert.component';

registerLocaleData(ruLocale, 'ru');

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    AddCommentComponent,
    ListCommentsComponent,
    RefDirective,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
