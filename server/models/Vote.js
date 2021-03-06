import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.SchemaTypes.ObjectId


const Vote = new Schema(
  {
    value: { type: Number, required: true },
    creatorId: { type: String, ref: 'Profile', required: true },
    commentId: {type: ObjectId, ref: 'Comment', required: true },
    // NOTE If you wish to add additional public properties for Accounts do so here
  },
  { timestamps: true, toJSON: { virtuals: true } }
)

export default Vote
