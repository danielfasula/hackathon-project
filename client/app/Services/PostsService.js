import { ProxyState } from "../AppState.js";
import Post from "../Models/Post.js";
import { api } from '../Services/AxiosService.js'


class PostsService {

  constructor() {
  }
  async getPosts(){
    try {
      let res = await api.get("api/posts")
      ProxyState.otherPosts = res.data.map(p=> new Post(p))
    } catch (error) {

    }
  }


  async editPost(id) {
    let editPost = document.getElementById(`editable-${id}`)
    let confirmEdit = document.getElementById(`confirm-${id}`)
    editPost.toggleAttribute("contenteditable")
    confirmEdit.toggleAttribute("hidden")

  }
  async confirmPost(id, body) {
    try {
      document.getElementById(`confirm-${id}`).toggleAttribute("hidden")
      window.alert('Edited!')
      return await api.put('api/posts/' + id, body)
    } catch (error) {
      console.log(error);
    }
  }

  async getMyPosts() {
    try {
      const res = await api.get(`account/${ProxyState.account.id}/posts`)
      ProxyState.myPosts = res.data.map(rawPostData => new Post(rawPostData))
      console.log(ProxyState.myPosts);
    } catch (error) {
      console.error(error);
    }
  }

  async createPost(newPost) {
    try {
      const res = await api.post('api/posts', newPost)
      ProxyState.myPosts = [...ProxyState.myPosts, new Post(res.data)]
    } catch (error) {
      console.error(error)
    }
  }

  async deletePost(id) {
    try {
      await api.delete('api/posts/' + id)
      this.getMyPosts()
    } catch (error) {
      console.error(error);
    }
  }
}


export const postsService = new PostsService();
