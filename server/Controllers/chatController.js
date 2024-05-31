const ChatModel = require("../Models/chatModel");

const createChat = async (req, res) => {
  const { firstId, secondId } = req.body;

  try {
    const chat = await ChatModel.findOne({
      members: { $all: [firstId, secondId] },
    });

    if (chat) return res.status(200).json(chat);

    const newChat = new ChatModel({
      members: [firstId, secondId],
    });

    const response = await newChat.save();
    res.status(200).json(response);
  } catch (err) {
    console.log(err);
  }
};

const findUserChat = async (req, res) => {
  const userId = req.params.userId;

  try {
    const chats = await ChatModel.findOne({
      members: { $in: [userId] },
    });

    return res.status(200).json(chats);
  } catch (err) {
    console.log(err);
  }
};
const findChat = async (req, res) => {
  const { firstId, secondId } = req.params;

  try {
    const chat = await ChatModel.findOne({
      members: { $all: [firstId, secondId] },
    });

    return res.status(200).json(chat);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { createChat, findUserChat, findChat };
