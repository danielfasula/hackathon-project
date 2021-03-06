import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'



export default class CommentsController {
  constructor() {
  }

  createComment(event, creatorId, postId) {
    event.preventDefault()
    let form = event.target
    let newComment = {
      description: form.description.value,
      creatorId: creatorId,
      postId: postId

    }
    commentsService.createComment(newComment)
  }
  deleteComment(id){
    commentsService.deleteComment(id)
  }

}
