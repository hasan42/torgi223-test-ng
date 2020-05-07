import { Component, OnInit, Input } from '@angular/core';
import { CommentsService } from '../../services/comments.service';
import { Observable, Subscription } from 'rxjs';
import { Comment } from '../../interfaces';

@Component({
  selector: 'app-list-comments',
  templateUrl: './list-comments.component.html',
  styleUrls: ['./list-comments.component.scss']
})
export class ListCommentsComponent implements OnInit {

  @Input() parentId: string = null;

  comments$: Observable<Comment[]>
  comments:Comment[]
  subscription: Subscription

  constructor(private serv: CommentsService) { }

  ngOnInit(): void {
    if(this.parentId === null){
      this.subscription = this.serv.comments$.subscribe(
        value => {
          this.comments = value;
        },
        error => console.log(error)
      );
    }else{
      this.comments = this.serv.getById(this.parentId);
    }
  }

}
