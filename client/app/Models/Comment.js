export default class Post {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.body = data.body
    this.votes = data.votes
  }
  get Template() {
    return /*html*/ `
      <div>${this.body}</div>
        `
  }
}

