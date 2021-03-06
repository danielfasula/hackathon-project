import { ProxyState } from "../AppState.js";
import Comment from "../Models/Comment.js"

class CommentsService {
  constructor() {
    this.getComments()
  }

  async getComments() {
    try {
      //const res = await api.get('comments')
      //ProxyState.comments = res.data.map(rawCommentData => new Comment(rawCommentData))
      
    } catch (error) {
      console.error(error);
    }
  }
}


export const commentsService = new CommentsService();
