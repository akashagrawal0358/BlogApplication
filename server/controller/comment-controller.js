
const Comment = require('../model/comment');


// -------------------------------- Add a comment in post and stores in db ---------------------------------------

module.exports.newComment = async (request, response) => {
    try {
        const comment = await new Comment(request.body);
        comment.save();

        response.status(200).json('Comment saved successfully');
    } 
    catch (error) {
        response.status(500).json(error);
    }
}



// -------------------------------- Fetched all comments from db of seleted post ---------------------------------------

module.exports.getComments = async (request, response) => {

    console.log("gett controller............");
    try {
        const comments = await Comment.find({ postId: request.params.id });

        response.status(200).json(comments);
    } 
    catch (error) {
        response.status(500).json(error)
    }
}


// --------------------------------  delete selected post's comment from db  ---------------------------------------


module.exports.deleteComment = async (request, response) => {
    try {
        const comment = await Comment.findById(request.params.id);
        await comment.delete()

        response.status(200).json('comment deleted successfully');
    } catch (error) {
        response.status(500).json(error)
    }
}