import { ProxyState } from '../AppState.js'
import { postsService } from '../Services/PostsService.js'


function _drawOtherPosts() {
  let posts = ProxyState.otherPosts
  let template = ''
  posts.forEach(p => template += p.Template)
  document.getElementById('accordion').innerHTML = template
}

// function _drawMyPosts() {
//   let posts = ProxyState.myPosts
//   let template = ''
//   posts.forEach(p => template += p.Template)
//   document.getElementById('myPosts').innerHTML = template
// }

export default class PostsController {
  constructor() {
    _drawOtherPosts()
    // _drawMyPosts()
    ProxyState.on("otherPosts", _drawOtherPosts)
    // ProxyState.on("myPosts", _drawMyPosts)
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

}
