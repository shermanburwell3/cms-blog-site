const { User } = require('../models');

const userData = [
    {
        username: 'testuser',
        email: 'testuser@email.com',
        password: 'test123',
    }
];

const seedData = async () => {
    await User.bulkCreate(userData);
    console.log('User data seeded successfully!');
};