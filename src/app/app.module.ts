import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CommentComponent } from './shared/components/comment/comment.component';
import { AddCommentComponent } from './shared/components/add-comment/add-comment.component';
import { ListCommentsComponent } from './shared/components/list-comments/list-comments.component';
import { RefDirective } from './shared/directives/ref.directive';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    AddCommentComponent,
    ListCommentsComponent,
    RefDirective
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
