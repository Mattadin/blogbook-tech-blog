const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'Testing this functionality!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Me too!',
        user_id: 2,
        post_id: 2
    },
    {
        comment_text: 'Me three!',
        user_id: 3,
        post_id: 3
    }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;