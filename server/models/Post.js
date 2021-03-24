import mongoose from 'mongoose'
import { dbContext } from '../db/DbContext'
const Schema = mongoose.Schema

const Post = new Schema(
  {
    description: { type: String, required: true },
    creatorId: { type: String, ref: 'Profile', required: true }
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Post.pre('findOneAndRemove', async function(next) {
  try {
    await dbContext.Comment.deleteMany({ postId: this._conditions._id })
  } catch (error) {
    next(error)
  }
})
export default Post
