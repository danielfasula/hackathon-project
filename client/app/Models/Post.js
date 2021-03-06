
export default class Post {
  constructor({ id, description, creatorId }) {
    this.id = id
    this.creatorId = creatorId
    this.description = description
    //this.completion = data.completion
    //this.comments = data.comments
    //this.popular = data.popular || false
  }

  get Template() {
    return /*html*/ `
    <div class="card">
                    <div class="card-header" id="${this.id}">
                        <h5 class="mb-0">
                            <button class="btn btn-link collapsed" data-toggle="collapse"
                              data-target="#post-${this.id}"
                                aria-expanded="false" aria-controls="${this.id}">
                                Me and tyreasdf
                            </button>
                        </h5>
                    </div>
                    <div id="post-${this.id}" class="collapse" aria-labelledby="${this.id}" data-parent="#accordion">
                        <div class="card-body">
                           ${this.description}
                        </div>
                    </div>
                </div>
        `
  }
}
