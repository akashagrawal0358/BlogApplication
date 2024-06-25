
const Comment = require('../model/comment');


// -------------------------------- Add a comment in post and stores in db ---------------------------------------

module.exports.newComment = async (request, response) => {
        try {
            const comment = await new Comment(request.body);
            comment.save();
    
            response.status(200).json('Comment saved successfully');
        } catch (error) {
            response.status(500).json(error);
        }
    }