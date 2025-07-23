import express from 'express';
import { allPost } from '../data/post_data.js';

const postrout = express.Router();

postrout.route("/getpost/:id").get((req, res) => {
  const id = Number(req.params.id);
  const post = allPost.find(post => post.id === id);

  if (!post) {
    return res.send("Post not found!");
  }

  const respond = {
    title: post.title,
    tags: post.tags,
    likes: post.reactions?.likes,
    views: post.views,
  };

  res.send(respond);
});

export default postrout;
