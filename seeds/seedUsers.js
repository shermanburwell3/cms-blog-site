const { User } = require('../models');

const userData = [
    {
        username: 'testuser',
        email: 'testuser@email.com',
        password: 'test123',
    }
];

const seedUser = async () => {
    await User.bulkCreate(userData);
    console.log('User data seeded successfully!');
};

module.exports = seedUser;