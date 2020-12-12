/* eslint-disable linebreak-style */
const { Router } = require('express');
const blog = require('../controllers/blog');

const router = Router();
router.post('/', blog.postBlog);
router.get('/', blog.getAllBlogs);
router.put('/:id', blog.blog_put);
router.delete('/:id', blog.deleteBlog);
router.get('/:id', blog.getOneBlog);

router.get('/details', (req, res) => {
  res.render('details');
});

module.exports = router;
