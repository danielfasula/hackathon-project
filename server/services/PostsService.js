import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class PostsService {

  async find(query = {}) {
    return await dbContext.Post.find(query)
    // .populate('posts') in the comment service b/c you want it attached to the parent - parents dont care about children MY GOD
  }
  async create(body) {
    return await dbContext.Post.create(body)
  }
  async delete(id, userId) {
    const post = await dbContext.Post.findOneAndRemove({_id: id, creatorId: userId})
    if (!post) {
      throw new BadRequest('You are NOT the CREATOR, or this is not the correct POST ID')
    }
    return post
    }

    async edit(id, userId, body) {
      const post = await dbContext.Post.findOneAndUpdate({_id: id, creatorId: userId }, body, { new: true })
      if (!post) {
        throw new BadRequest('You are NOT the CREATOR, or this is not the correct POST ID')
      }
      return post
      }
  }


export const postsService = new PostsService();
