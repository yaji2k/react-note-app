import axios from 'axios'

export default class PostService {
  static async getAll(params) {
    return await axios.get('https://jsonplaceholder.typicode.com/posts', { params })
  }

  static async getOne(id) {
    return await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
  }
}
