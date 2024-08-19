const { BlogPost } = require('../models');



const blogPostData = [
  {
    title: 'First Blog Post',
    content: 'This is the content of the first blog post.',
    user_id: 1
  },
  {
    title: 'Second Blog Post',
    content: 'This is the content of the second blog post.',
    user_id: 2
  },
  {
    title: 'Third Blog Post',
    content: 'This is the content of the third blog post.',
    user_id: 1
  }
];

const seedBlogPosts = async () => {
    await BlogPost.bulkCreate(blogPostData);
};

module.exports = seedBlogPosts;