import { AuthController } from "./Controllers/AuthController.js";
import PostsController from "./Controllers/PostsController.js";
import CommentsController from "./Controllers/CommentsController.js";
import AccountController from "./Controllers/AccountController.js";
import VotesController from './Controllers/VotesController.js'
import ProfilesController from './Controllers/ProfilesController.js'


// TODO change data in querySelectorAll()!
function tab() {
  let triggerTabList = [].slice.call(document.querySelectorAll('#nav-myProfile-tab, #nav-conundrum-tab'))
  triggerTabList.forEach(function (triggerEl) {
    var tabTrigger = new bootstrap.Tab(triggerEl)
    triggerEl.addEventListener('click', function (event) {
      event.preventDefault()
      tabTrigger.show()
    })
  })
}

class App {
  constructor() {
    tab()
  }
  authController = new AuthController();
  postsController = new PostsController();
  commentsController = new CommentsController();
  accountController = new AccountController();
  votesController = new VotesController();
  profileController = new ProfilesController();
}

window["app"] = new App();
