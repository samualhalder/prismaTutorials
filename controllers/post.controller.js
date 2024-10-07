import prisma from "../DB/db.config.js";

export const getAllPosts = async (req, res) => {
  const posts = await prisma.post.findMany({
    include: {
      user: {
        select: {
          username: true,
        },
      },
      _count: {
        select: {
          comment: true,
        },
      },
    },
  });
  res.status(200).json(posts);
};

export const createPost = async (req, res) => {
  const { userId, title, description } = req.body;

  const newPost = await prisma.post.create({
    data: {
      user_id: Number(userId),
      title,
      description,
    },
  });
  res
    .status(200)
    .json({ message: "post created successfully.", user: newPost });
};

export const getPostById = async (req, res) => {
  const { postId } = req.params;
  const findUser = await prisma.post.findUnique({
    where: {
      id: Number(postId),
    },
  });
  res.status(200).json(findUser);
};
