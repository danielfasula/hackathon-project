import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId

const Comment = new Schema(
  {
    description: { type: String, required: true },
    creatorId: { type: String, ref: 'Profile', required: true },
    postId: { type: ObjectId, ref: 'Post', required: true }
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Comment
