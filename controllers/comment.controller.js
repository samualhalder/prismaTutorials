import prisma from "../DB/db.config.js";

export const createComment = async (req, res) => {
  const { userId, postId, comment } = req.body;

  const newComment = await prisma.comment.create({
    data: {
      user_id: Number(userId),
      post_id: Number(postId),
      comment,
    },
  });
  res
    .status(200)
    .json({ message: "comment created successfully.", comment: newComment });
};

export const getCommentById = async (req, res) => {
  const { commentId } = req.params;
  const findComment = await prisma.comment.findUnique({
    where: {
      id: Number(commentId),
    },
  });
  res.status(200).json(findComment);
};
