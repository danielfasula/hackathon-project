import { ProxyState } from '../AppState.js'
export default class Post {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.description = data.description
    //this.completion = data.completion
    this.comments = data.comments
    //this.popular = data.popular || false
  }

  get Template() {
    return /*html*/ `
                <div class="card">
                    <div class="card-header" id="${this.id}">
                        <h5 class="mb-0">
                            <button id="editable-${this.id}"class="btn btn-link collapsed pr-4" data-toggle="collapse"
                              data-target="#post-${this.id}"
                                aria-expanded="false" aria-controls="${this.id}" >
                                ${this.description} 
                            </button>
                          <button class="btn close mt-1 btn-info" onclick="app.postsController.editPost('${this.id}')">Edit</button>
                          <button class="btn btn-success close mt-1 mr-3" onclick="app.postsController.confirmPost('${this.id}')" hidden id="confirm-${this.id}">Confirm</button>
                    <button class="close mt-1 mr-3"
                    onclick="app.postsController.deletePost('${this.id}')"><span >&times;</span></button>
                        </h5>
                    </div>
                    <div id="post-${this.id}" class="collapse" aria-labelledby="${this.id}" data-parent="#accordion">

                        <div class="card-body">
                            <form onsubmit="app.commentsController.createComment(event, '${this.creatorId}'  ,'${this.id}')">
                              <div class="form-group">
                            <input class="form-control" name="description" placeholder="Comment" id="commentcreation"/>
                          <button type="submit" class="btn btn-primary">Submit</button>
                              </div>
                            </form>
                            <div>
                           ${this.Comments}
                            </div>
                           </div>
                    </div>
                </div>
        `
  }

  get Comments() {
    let template = ''
    let comments = ProxyState.comments.filter(c => c.postId._id == this.id)
    comments.forEach(c => template += c.Template)
    return template
  }
}
