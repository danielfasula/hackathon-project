export default class Post {
  constructor(data) {
    this.id = data.id
    this.creatorId = data.creatorId
    this.body = data.body
    this.completion = data.completion
    this.comments = data.comments
    this.popular = data.popular || false
  }
}