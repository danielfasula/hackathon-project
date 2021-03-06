import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'


export default class PostsController {
  constructor() {

  }
  createPost(event, creatorId) {
    event.preventDefault()
    let form = event.target
    let newPost = {
      description: form.description.value,
      creatorId: creatorId

    }
    postsService.createPost(newPost)
  }

  deletePost(id) {
    postsService.deletePost(id)
  }
  editPost(id) {
    postsService.editPost(id)
  }
  confirmPost(id) {
    let body = {
      description: document.getElementById(`editable-${id}`).innerText
    }
    postsService.confirmPost(id, body)
  }

}
