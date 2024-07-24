import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {
  private localKey = 'comments';

  getComments(movieId: number): any[] {
    const comments = JSON.parse(localStorage.getItem(this.localKey) || '{}');
    return comments[movieId] || [];
  }
  addComment(movieId: number, comment: any): void {
    const comments = JSON.parse(localStorage.getItem(this.localKey) || '{}');
    if (!comments[movieId]) {
      comments[movieId] = [];
    }
    comments[movieId].push(comment);
    localStorage.setItem(this.localKey, JSON.stringify(comments));
  }
  addReply(movieId: number, commentIndex: number, reply: any): void {
    const comments = JSON.parse(localStorage.getItem(this.localKey) || '{}');
    if (comments[movieId] && comments[movieId][commentIndex]) {
      if (!comments[movieId][commentIndex].replies) {
        comments[movieId][commentIndex].replies = [];
      }
      comments[movieId][commentIndex].replies.push(reply);
      localStorage.setItem(this.localKey, JSON.stringify(comments));
    }
  }
}
