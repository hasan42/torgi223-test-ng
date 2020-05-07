import { Component, OnInit, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CommentsService } from '../../services/comments.service';
import { Comment } from '../../interfaces';
import {Subscription} from 'rxjs';


@Component({
  selector: 'app-add-comment',
  templateUrl: './add-comment.component.html',
  styleUrls: ['./add-comment.component.scss']
})
export class AddCommentComponent implements OnInit {

  @Input() parentId:string;

  form: FormGroup
  submitted = false

  constructor(private serv: CommentsService,) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      author: new FormControl(null, Validators.required),
      text: new FormControl(null, Validators.required)
    })
  }

  submit(){
    if(this.form.invalid){
      return
    }

    const comment: Comment = {
      parentId: this.parentId,
      dateTime: new Date(),
      authorName: this.form.value.author,
      body: this.form.value.text,
    }

    this.submitted = true;
    this.serv.addComment(comment).subscribe((resp) => {
      this.form.reset()
      this.submitted = true
    })
  }

}
