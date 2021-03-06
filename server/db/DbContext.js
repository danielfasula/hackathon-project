import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import PostSchema from '../models/Post'
import CommentSchema from '../models/Comment'
import VoteSchema from '../models/Vote'

class DbContext {
  Values = mongoose.model('Value', ValueSchema)
  Account = mongoose.model('Account', AccountSchema)
  Post = mongoose.model('Post', PostSchema)
  Comment = mongoose.model('Comment', CommentSchema)
  Vote = mongoose.model("Vote", VoteSchema)
}

export const dbContext = new DbContext()
