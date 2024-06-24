
const Post = require('../model/post');


module.exports.createPost = async (request, response) => {
    try {
        const post = await new Post(request.body);
        post.save();

        return response.status(200).json('Post saved successfully');
    } catch (error) {
        return response.status(500).json(error);
    }
}    