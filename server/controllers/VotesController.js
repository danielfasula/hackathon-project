import { Auth0Provider } from '@bcwdev/auth0provider'
import { dbContext } from '../db/DbContext'
import { votesService } from '../services/VotesService'
import BaseController from '../utils/BaseController'

export class VotesController extends BaseController {
  constructor() {
    super('api/votes')
    this.router
      .get('', this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.delete)
      .put('/:id', this.edit)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await votesService.find())
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
     req.body.creatorId = req.userInfo.id
      res.send(await votesService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await votesService.delete(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }
  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await votesService.edit(req.params.id, req.userInfo.id, req.body))
    } catch (error) {
      next(error)
    }
  }

}
