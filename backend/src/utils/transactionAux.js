const { User } = require('../models');

const senderHaveBalance = async (senderId, amount) => {
  const sender = await User.findOne({ where: { user_id: senderId } });
  const senderBalance = sender.balance;
  if (senderBalance < amount) return false;
  return true;
};

const transactionLimit = async (amount) => {
  if (amount > 2000) return false;
  return true;
};

const receiverExists = async (receiverId) => {
  const receiver = await User.findOne({ where: { user_id: receiverId } });
  if (!receiver) return false;
  return true;
};

const updateBalance = async (senderId, receiverId, amount) => {
  const sender = await User.findOne({ where: { user_id: senderId } });
  let balance = Number(sender.balance);
  const newSenderBalance = balance - amount;

  const receiver = await User.findOne({ where: { user_id: receiverId } });
  balance = Number(receiver.balance);
  const newReceiverBalance = balance + amount;

  await User.update({ balance: newSenderBalance }, { where: { user_id: senderId } });
  await User.update({ balance: newReceiverBalance }, { where: { user_id: receiverId } });
};

module.exports = {
  senderHaveBalance,
  transactionLimit,
  receiverExists,
  updateBalance,
};