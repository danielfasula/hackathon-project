import { ProxyState } from '../AppState.js'
import { commentsService } from '../Services/CommentsService.js'


function _draw() {
  let jobs = ProxyState.comments
  let template = ''
  jobs.forEach(j => template += j.Template)
  document.getElementById('comments').innerHTML = template
}

export default class CommentsController {
  constructor() {
    ProxyState.on("comments", _draw)
  }

}
