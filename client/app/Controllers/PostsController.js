import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'

function _draw(){
  let getPosts = document.getElementById("get-all-posts")
  let posts = ProxyState.otherPosts
  let template = ""
  posts.forEach(p=> template+=p.Template)
  getPosts.innerHTML = template
}


export default class PostsController {
  constructor() {
    ProxyState.on("otherPosts",_draw)
    this.getPosts()
  }
  getPosts(){
    postsService.getPosts()
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
