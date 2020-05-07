import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Observable, Subscription } from 'rxjs';
import { Comment } from '../../interfaces';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent implements OnInit, OnDestroy {

  @Input() parentId: string = null;

  comments:Comment[]
  subscription: Subscription

  constructor(private serv: CommentsService) { }

  ngOnInit(): void {
    if(this.parentId === null){
      this.subscription = this.serv.comments$.subscribe(
        value => {
          this.comments = value.filter(comments=>!comments.parentId);
        },
        error => console.log(error)
      );
    }else{
      this.subscription = this.serv.comments$.subscribe(
        value => {
          this.comments = value.filter(comments=>comments.parentId===this.parentId);
        },
        error => console.log(error)
      );
    }
  }
  ngOnDestroy() {
    if(this.subscription){
      this.subscription.unsubscribe()
    }
  }

}
