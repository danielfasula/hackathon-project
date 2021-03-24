import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class CommentsService {
  async find(query = {}) {
    return await dbContext.Comment.find(query).populate('postId', 'description')
  }

  async create(body) {
    return await dbContext.Comment.create(body)
  }

  async delete(id, userId) {
    const comment = await dbContext.Comment.findOneAndDelete({ _id: id, creatorId: userId })
    if (!comment) {
      throw new BadRequest('You are NOT the CREATOR, or this is not the correct COMMENT ID')
    }
    return comment
  }

  async edit(id, userId, body) {
    const comment = await dbContext.Comment.findOneAndUpdate({ _id: id, creatorId: userId }, body, { new: true })
    if (!comment) {
      throw new BadRequest('You are NOT the CREATOR, or this is not the correct COMMENT ID')
    }
    return comment
  }
}

export const commentsService = new CommentsService()
