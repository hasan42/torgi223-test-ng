import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommentComponent } from './shared/components/comment/comment.component';
import { AddCommentComponent } from './shared/components/add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    CommentComponent,
    AddCommentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
