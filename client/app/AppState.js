import { EventEmitter } from './Utils/EventEmitter.js'
import { isValidProp } from './Utils/isValidProp.js'
import Account from './Models/Account.js'
import Post from './Models/Post.js'
import Comment from './Models/Comment.js'


class AppState extends EventEmitter {
  user = {}
  account = {}

  /** @type {Post[]} */
  posts = []

  /** @type {Comment[]} */
  comments = []

}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
