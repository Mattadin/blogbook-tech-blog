const { Post } = require('../models');

const postdata = [
    {
        title: 'First Test',
        description: 'So it begins...',
        user_id: 1
    },
    {
        title: 'Second test',
        description: 'so it Continues...',
        user_id: 2
    },
    {
        title: 'Third test!',
        description: 'ThEn tHeRe wErE thReEeeE',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;