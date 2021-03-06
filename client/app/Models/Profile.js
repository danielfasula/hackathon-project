import { ProxyState } from '../AppState.js'

export default class Profile {
  constructor({ name, id, imgUrl }) {
    this.name = name
    this.id = id
    this.imgUrl = imgUrl
  }
  get Template() {
    return /*html*/`

                <div class="col-12">
                    <div class="card p-2">
                        <div class="card-title p-2">
                            <div class="d-flex align-items-center">
                                <div class="profile-id"><img src="${this.imgUrl}" alt=""></div>
                                <div class="skeleton-loader text mx-2"></div>
                            </div>
                        </div>
                        <div class="card-body border-top">
                            <div class="block">${this.name}</div>
                            <div>
                  <form onsubmit="app.postsController.createPost(event, '${this.id}')">
                <div class="form-group">
                    <textarea class="form-control" name="description" id="postcreation" rows="3"></textarea>
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
                            ${this.MyPosts}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `
  }

  get MyPosts() {
    let template = ''
    let myPosts = ProxyState.myPosts.filter(p => p.id == this.id)

    myPosts.forEach(p => template += p.Template)
    return template
  }

}
