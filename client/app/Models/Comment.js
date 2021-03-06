export default class Comment {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.description = data.description
    this.postId = data.postId
  }
  get Template() {
    return /*html*/ `<h3>${this.description} <button class="close mt-1 mr-3"
    onclick="app.commentsController.deleteComment('${this.id}')"><span >&times;</span></button></h3>

    `
  }
}

