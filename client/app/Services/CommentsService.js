import { ProxyState } from "../AppState.js";
import Comment from "../Models/Comment.js"
import { api } from '../Services/AxiosService.js'

class CommentsService {
  constructor() {
  }

  async getComments() {
    try {
      const res = await api.get('api/comments')
      ProxyState.comments = res.data.map(rawComments => new Comment(rawComments))
    } catch (error) {
      console.error(error);
    }
  }

  async createComment(newComment) {
    try {
      const res = await api.post('api/comments', newComment)
      ProxyState.comments = [...ProxyState.comments, new Comment(res.data[0])]
      console.log(ProxyState.comments);
    } catch (error) {
      console.error(error)
    }
  }
}


export const commentsService = new CommentsService();
