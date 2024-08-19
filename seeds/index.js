const sequelize = require('../config/connection');
const seedUser = require('./userSeed.js');
const seedBlogPosts = require('./blogPostSeed.js');

const seedAll = async () => {
  try {
    await sequelize.sync({ force: true });
    await seedUser();
    await seedBlogPosts();
    console.log('Data seeding successful!');
  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    process.exit(0);
  }
};

seedAll();