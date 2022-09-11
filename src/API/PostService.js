import axios from "axios"

export default class PostService {
  static async getAll(limit = 10, page = 1) {
    try {
      const  postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts", 
        {params: {
          _limit: limit,
          _page: page
        }
      })
      return postsResponse

    } catch (e) {
      console.log(e)
    } 
    
  }

  static async getPostById(id) {
    try {
      const  postsResponse = await axios.get("https://jsonplaceholder.typicode.com/posts/" + id)
      return postsResponse

    } catch (e) {
      //console.log(e)
    } 
    
  }

  static async getPostComments(id) {
    try {
      const  postsResponse = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      return postsResponse

    } catch (e) {
      //console.log(e)
    } 
    
  }
}

