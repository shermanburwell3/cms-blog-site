const { User, BlogPost } = require('../models');

const userData = [
    {
        id: '1',
        username: 'testuser',
        email: 'testuser@email.com',
        password: 'test123',
    }
];

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

const seedUser = async () => {
    await User.bulkCreate(userData);
};

const seedBlogPosts = async () => {
    await BlogPost.bulkCreate(blogPostData);
};

module.exports = { seedUser, seedBlogPosts };