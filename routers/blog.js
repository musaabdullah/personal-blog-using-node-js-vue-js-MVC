/* eslint-disable linebreak-style */
const { Router } = require('express');
const blog = require('../controllers/blog');

const router = Router();
router.post('/', blog.postBlog);
router.get('/', blog.getAllBlogs);
// router.put('/:id');
router.delete('/:id', blog.getOneBlog);
router.get('/:id', blog.deleteBlog);

module.exports = router;