import BaseController from '../utils/BaseController'
// @ts-ignore
import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService'
import { postsService } from '../services/PostsService'

export class ProfilesController extends BaseController {
  constructor() {
    super('api/profiles')
    this.router
      .get('', this.getAll)

      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)

  }


 async getAll(req, res, next) {
    try {
      return res.send(await accountService.findAll(req.body))
    } catch (error) {
      next(error)
    }
  }

}
