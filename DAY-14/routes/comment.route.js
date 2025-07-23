import express from 'express';
import { allComments } from '../data/comment_data.js';

const commentrout = express.Router();

commentrout.route("/getcomment/:id").get((req, res) => {
  const id = Number(req.params.id);
  const comment = allComments.find(comment => comment.id === id);

  if (!comment) {
    return res.send("Comment not found!");
  }

  const response = {
    
    fullName: comment.user.fullName,
    body: comment.body,
    likes: comment.likes,
    
  };

  res.send(response);
});

export default commentrout;
