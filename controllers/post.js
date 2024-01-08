const Post = require("../models/post.js");

const getAll = async (req, res) => {
  try {
    const posts = await Post.find().exec();
    res.json(posts);
  } catch (error) {
    res.status(500).json(error.message);
  }
};
const getLastTags = async (req, res) => {
  try {
    const posts = await Post.find().limit(5).exec();
    const tags = posts.map((obj) => obj.tags.flat().slice(0, 5));
    res.json(tags);
  } catch (error) {
    res.status(500).json({
      message: "Не удалось получить теги",
    });
  }
};
const getOne = async (req, res) => {
  try {
    // console.log(req.params);
    const postId = req.params.id;
    const post = await Post.findByIdAndUpdate(
      {
        _id: postId,
      },
      {
        $inc: { viewsCount: 1 },
      },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({
        message: "Статья не найдена",
      });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({
      message: "Не удалось получить статьи",
    });
  }
};
const create = async (req, res) => {
  try {
    const doc = new Post({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags,
      author: req.userId,
    });

    const post = await doc.save();
    res.status(201).json(post);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать статью",
    });
  }
};

const remove = async (req, res) => {
  try {
    const { postId } = req.params;
    const result = await Post.findOneAndDelete(postId);
    if (!result) {
      return res.status(404).json({
        message: "Статья не найдена",
      });
    }
    res.json({ message: "Статья удалена" });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Не удалось создать статью",
    });
  }
};

const update = async (req, res) => {
  try {
    const { postId } = req.params;
    const body = req.body;
    const updatePost = await Post.findOneAndUpdate(postId, body, {
      new: true,
    });
    if (!updatePost) {
      return res.status(404).json({
        message: "Статья не найдена",
      });
    }
    res.json(updatePost);
  } catch (error) {
    res.status(500).json({
      message: "Не удалось получить статьи",
    });
  }
};
const uploadImage = (req, res) => {
  try {
    // console.log(req.file);
    res.json({
      url: `/uploads/${req.file.originalname}`,
    });
  } catch (error) {}
};
module.exports = {
  getAll,
  getLastTags,
  getOne,
  create,
  update,
  remove,
  uploadImage,
};
