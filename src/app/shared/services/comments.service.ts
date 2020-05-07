import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, of, BehaviorSubject} from 'rxjs';
import { Comment, RespComment } from '../interfaces';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  comments: Comment[] = [];
  observableComments = new BehaviorSubject<Comment[]>(this.comments);
  comments$ = this.observableComments.asObservable();

  constructor(private http: HttpClient) {this.getAll()}

  addComment(comment: Comment): Observable<Comment>{
    return this.http.post(`${environment.dbUrl}/comments.json`, comment)
      .pipe(map((response: RespComment) => {
        const newComment = {
          ...comment,
          id: response.name,
          dateTime: new Date(comment.dateTime)
        }
        this.comments.push(newComment)
        return newComment;
      }))
  }

  getAll(): void{
    this.http.get<Comment>(`${environment.dbUrl}/comments.json`)
      .pipe(map((response: {[key: string]: any}) => {
        return Object
          .keys(response)
          .map(key => ({
            ...response[key],
            id: key,
            dateTime: new Date(response[key].dateTime)
          }))
      })).subscribe(resp=>{
        this.comments = resp
        this.observableComments.next(resp.filter(comment=>!comment.parentId));
      });
  }

  getById(parentId:string):Comment[]{
    return this.comments.filter(comment=>comment.parentId===parentId)
  }
}
