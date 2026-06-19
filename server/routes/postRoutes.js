const express = require("express");
const Post = require("../models/Post");

const router = express.Router();

router.post("/create", async (req, res) => {
  try {
    const { title, content, author, category } = req.body;

    const post = await Post.create({
      title,
      content,
      author,
      category,
    });

    res.status(201).json({
      message: "Post created successfully ",
      post,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

router.get("/", asyn (req, res) => {
  try {
    const posts = await Post.find()
      .populate("author", "name email")
      .sort({ createdAt: -1 });

    res.status(200).json(posts);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Server Error",
    });
  }
});

module.exports = router;