const express = require('express');
const validated = require("../middleware/validateId");
const {
    getAllPost,
  getPostById,
  updatePostById,
  deletePostById,
  addPost,
  doesIdExist
} = require("../controllers/posts")

const router = express.Router();

router.get("", getAllPost);

router.get("", validateId, getPostById);

router.post("", addPost);

router.put("/:id", validatedId, updatePostById);

router.delete("/:id", validateId, deletePostById);

module.exports = router;
