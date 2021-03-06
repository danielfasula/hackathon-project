import { ProxyState } from '../AppState.js'

export default class Profile {
  constructor({ name, id, picture, bio }) {
    this.name = name
    this.id = id
    this.bio = bio
    this.picture = picture
  }
  get Template() {
    return /*html*/`<div class="col-12">
                    <div class="card p-2">
                        <div class="card-title p-2">
                            <div class="d-flex align-items-center">
                                <div class="profile-id"><img src="${this.picture}" alt=""></div>
                                <div>
                                <h3>${this.bio}</h3>
                                </div>
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
                        <div class="row">
                        <div class="col-12">
                            ${this.MyPosts}
                        </div>
                            </div>
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
    let myPosts = ProxyState.myPosts
    myPosts.forEach(p => template += p.Template)
    return template
  }

}
