import { Component, OnInit, Input, ComponentFactoryResolver, ViewChild } from '@angular/core';
import { AddCommentComponent } from '../add-comment/add-comment.component'
import { Comment } from '../../interfaces';
import { RefDirective } from '../../directives/ref.directive'


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {

  @Input() comment: Comment;
  @ViewChild(RefDirective, {static: false}) refDir: RefDirective

  isReply: boolean = false

  constructor(private resolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
  }

  reply() {
    event.preventDefault()
    if(this.isReply){
      this.refDir.containerRef.clear()
      this.isReply = !this.isReply
      return
    }
    this.isReply = !this.isReply
    const replyFactory = this.resolver.resolveComponentFactory(AddCommentComponent)
    this.refDir.containerRef.clear()

    const component = this.refDir.containerRef.createComponent(replyFactory)

    component.instance.parentId = this.comment.id
    component.instance.close.subscribe(() => {
      this.refDir.containerRef.clear()
    })
  }

}
