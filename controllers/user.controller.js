import prisma from "../DB/db.config.js";

export const createUser = async (req, res) => {
  const { username, password, email } = req.body;

  const findUser = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (findUser) {
    return res.status(400).json({ errMessage: "user alredy exitst." });
  }
  const newUser = await prisma.user.create({
    data: {
      username,
      email,
      password,
    },
  });
  res
    .status(200)
    .json({ message: "user created successfully.", user: newUser });
};

export const getUserById = async (req, res) => {
  const { userId } = req.params;
  const findUser = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
  });
  res.status(200).json(findUser);
};

export const updateUser = async (req, res) => {
  const { username, email, password } = req.body;
  const { userId } = req.params;
  const findUser = await prisma.user.findUnique({
    where: {
      id: Number(userId),
    },
  });
  if (!findUser) {
    return res.status(404).json({ errMessage: "no such user" });
  }
  await prisma.user.update({
    where: {
      id: Number(userId),
    },
    data: {
      username,
      email,
      password,
    },
  });
  res.status(200).json({ message: "user updated successfully" });
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  console.log("hit");
  try {
    await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    });
    res.status(200).json("user deleted successfully");
  } catch (error) {
    res.status(400).json("somtething went wrong");
  }
};
