/* eslint-disable linebreak-style */
const { json } = require('body-parser');
const Blog = require('../models/blog');

const handleError = (error) => {
  const errors = { title: '', content: '' };
  if (error.message.includes('Blog validation failed')) {
    Object.values(error.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
  }
  return errors;
};

module.exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.postBlog = async (req, res) => {
  try {
    const blog = {
      title: req.body.title,
      content: req.body.content,
    };
    const savedBlog = await Blog.create(blog);
    res.status(200).json({ savedBlog });
  } catch (error) {
    const errors = handleError(error);
    res.status(404).json(errors);
  }
};

module.exports.deleteBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteblog = await Blog.remove({ _id: id });
    res.status(200).json({ id });
  } catch (error) {
    res.status(404).json(error);
  }
};

module.exports.getOneBlog = async (req, res) => {
  try {
    const id = req.params.id;
    const blog = await Blog.findById(id);
    res.status(200).json({ blog });
  } catch (error) {
    json.status(400).json(error);
  }
};

module.exports.blog_put = async (req, res) => {
  try {
    const blog = {
      Id: req.params.id,
      title: req.body.title,
      content: req.body.content,
    };
    const blogUpdate = await Blog.updateOne(
      { _id: blog.Id },
      {
        $set: {
          title: blog.title,
          content: blog.content,
        },
      },
    );
    res.status(200).json({ id: blog.Id });
  } catch (error) {
    res.status(404).json(error);
  }
};
