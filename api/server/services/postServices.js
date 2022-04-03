const {Post} = require('../models/PostStore')
const moment = require('moment');

class PostsService {

  async createPost(data) {
      try {
        if(!data.date) data.date = new Date().toISOString()
        const post = await Post.create(data)
        return post;
      } catch (err) {
          throw {message: err.errmsg || err.message}
      }
    }
  async updatePost(_id, data) {
      try {
        const post = await Post.updateOne({_id}, data)
        return post;
      } catch (err) {
          throw {code: 404, message: err.errmsg}
      }
    }
    async deletePost(_id) {
        try {
          const post = await Post.deleteOne({_id})
          return post;
        } catch (err) {
            throw {code: 404, message: err.errmsg}
        }
      }
    async getPostByid(_id) {
        try {
          const post = await Post.findOne({_id})
          return post;
        } catch (err) {
            throw {code: 404, message: err.errmsg}
        }
      }
      async getPosts() {
        try {
          const post = await Post.find({}).sort({_id:-1}).exec()
          return post;
        } catch (err) {
            throw {code: 404, message: err.errmsg}
        }
      }
}

module.exports = new PostsService()
