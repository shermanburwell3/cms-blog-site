const express = require('express');
const { User, BlogPost } = require('../models');
const router = express.Router();

// GET route to display the home page
router.get('/', async (req, res) => {
  try {
    // Fetch all blog posts with associated user information
    const blogPosts = await BlogPost.findAll({
      include: {
        model: User,
        attributes: ['username']
      }
    });

    res.render('homepage', { loggedIn: req.session.loggedIn });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    res.render('login');
  });
  
  module.exports = router;

module.exports = router;