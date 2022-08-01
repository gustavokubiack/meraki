import axios from 'axios';

const url = '/api/post';

export default class API {
    
    // to get all the posts from the database
    static async getAllPost(){
        const res = await axios.get(url);
        return res.data;
    }

    // to get single post by id
    static async getPostByID(id){
        const res = await axios.get(`${url}/${id}`);
        return res.data;
    }

    // to insert post into the database
    static async addPost(post){
        const res = await axios.post(url, post);
        return res.data;
    }

    // to update post into the database
    static async updatePost(id, post){
        const res = await axios.patch(`${url}/${id}`, post);
        return res.data;
    }

    // to delete post into the database
    static async deletePost(id){
        const res = await axios.delete(`${url}/${id}`);
        return res.data;
   }
}