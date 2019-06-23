import express from 'express';

import { Post } from '../../models';

const router = express.Router();

router.post('/post', (req, res) => {
  Post.create({ post: req.body.postText, author: req.body.author }, function(
    err,
    post
  ) {
    if (err) return res.status(400).json({ post: 'error save post' });
    // saved!);
    console.log('post saved successfully', post);
    res.json(post);
  });

  console.log('body', req.body);
});

/**
 * get posts route
 */
router.get('/posts/user:id', (req, res) => {
  const { id } = req.params;
  try {
    const posts = Post.find({ author: id });
    res.json({ posts });
  } catch (error) {
    console.log('find posts Errors', error);
  }
});

export default router;
