const express = require('express');
const router = express.Router();
const { BlogPost } = require('../models');

// Get all blog posts
router.get('/blogposts', async (req, res) => {
    try {
        const blogPosts = await BlogPost.findAll();
        res.json(blogPosts);
    } catch (error) {
        res.status(500).json({ error: 'Error retrieving blog posts' });
    }
});

// Create a new blog post
router.post('/blogposts', async (req, res) => {
    const { title, content, user_id } = req.body;

    try {
        const newBlogPost = await BlogPost.create({ title, content, user_id });
        res.status(201).json(newBlogPost);
    } catch (error) {
        res.status(400).json({ error: 'Error creating blog post' });
    }
});

// Update a blog post
router.put('/blogposts/:id', async (req, res) => {
    const { title, content } = req.body;
    const postId = req.params.id;

    try {
        const updatedBlogPost = await BlogPost.update({ title, content }, { where: { id: postId } });
        res.json(updatedBlogPost);
    } catch (error) {
        res.status(400).json({ error: 'Error updating blog post' });
    }
});

// Delete a blog post
router.delete('/blogposts/:id', async (req, res) => {
    const postId = req.params.id;

    try {
        await BlogPost.destroy({ where: { id: postId } });
        res.json({ message: 'Blog post deleted successfully' });
    } catch (error) {
        res.status(400).json({ error: 'Error deleting blog post' });
    }
});

module.exports = router;