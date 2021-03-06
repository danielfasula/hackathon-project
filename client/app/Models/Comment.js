export default class Comment {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.description = data.description
    this.postId = data.postId
  }
  get Template() {
    return /*html*/ `<h3>${this.description}</h3>`
  }
}

