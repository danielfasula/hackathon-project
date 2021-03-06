// @ts-ignore
import { Auth0Provider } from '@bcwdev/auth0provider'
import { dbContext } from '../db/DbContext'
import { postsService } from '../services/PostsService'
import { commentsService } from '../services/CommentsService'
import BaseController from '../utils/BaseController'

export class PostsController extends BaseController {
  constructor() {
    super('api/posts')
    this.router
      .get('', this.getAll)
      // NOTE: Beyond this point all routes require Authorization tokens (the user must be logged in)
      .use(Auth0Provider.getAuthorizedUserInfo)
      .post('', this.create)
      .delete('/:id', this.delete)
      .put('/:id', this.edit)
      .get('/:id/comments', this.getAllCommentsByPostId)
  }

  async getAll(req, res, next) {
    try {
      return res.send(await postsService.find())
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
     req.body.creatorId = req.userInfo.id
      res.send(await postsService.create(req.body))
    } catch (error) {
      next(error)
    }
  }
  async delete(req, res, next) {
    try {
      res.send(await postsService.delete(req.params.id, req.userInfo.id))
    } catch (error) {
      next(error)
    }
  }

  async edit(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      res.send(await postsService.edit(req.params.id, req.userInfo.id, req.body))
    } catch (error) {
      next(error)
    }
  }
  async getAllCommentsByPostId(req, res, next) {
    try {
      res.send(await commentsService.find( {postId: req.params.id}))
    } catch (error) {
      next(error)
    }
  }

}
