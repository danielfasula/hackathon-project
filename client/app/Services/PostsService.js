import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from '../Services/AxiosService.js'


class PostsService {
  constructor() {
    this.getMyPosts()
  }
  // async getOtherPosts() {
  //   try {
  //     const res = await api.get('jobs')
  //     ProxyState.otherPosts = res.data.map(rawPostData => new Post(rawPostData))
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  async getMyPosts() {
    try {
      const res = await api.get('jobs')
      ProxyState.myPosts = res.data.map(rawPostData => new Post(rawPostData))
    } catch (error) {
      console.error(error);
    }
  }

  async createPost(newPost) {
    try {
      const res = await api.post('posts', newPost)
      ProxyState.myPosts = [...ProxyState.myPosts, new Post(res.data)] 
    } catch (error) {
      console.error(error)
    }
  }
}


export const postsService = new PostsService();
