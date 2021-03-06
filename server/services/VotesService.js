import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'


class VotesService {

  async find(query = {}) {
    return await dbContext.Vote.find(query).populate('postId', "description")
  }

  async create(body) {
    return await dbContext.Vote.create(body)
  }

  async delete(id, userId) {
    const vote = await dbContext.Vote.findOneAndDelete({_id: id, creatorId: userId})
    if (!vote) {
      throw new BadRequest('You are NOT the CREATOR, or this is not the correct VOTE ID')
    }
    return vote
    }

    async edit(id, userId, body) {
      const vote = await dbContext.Vote.findOneAndUpdate({_id: id, creatorId: userId }, body, { new: true })
      if (!vote) {
        throw new BadRequest('You are NOT the CREATOR, or this is not the correct VOTE ID')
      }
      return vote
      }
  }


export const votesService = new VotesService();
