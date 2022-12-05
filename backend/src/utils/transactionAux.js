const senderHaveBalance = async (senderId, amount) => {
  const sender = await Users.findOne({ where: { id: senderId } });
  const senderBalance = sender.balance;
  if (senderBalance < amount) return false;
  return true;
};

const transactionLimit = async (amount) => {
  if (amount > 2000) return false;
  return true;
};

const receiverExists = async (receiverId) => {
  const receiver = await Users.findOne({ where: { id: receiverId } });
  if (!receiver) return false;
  return true;
};

const updateBalance = async (senderId, receiverId, amount) => {
  const sender = await Users.findOne({ where: { id: senderId } });
  const receiver = await Users.findOne({ where: { id: receiverId } });
  const senderBalance = sender.balance;
  const receiverBalance = receiver.balance;
  const newSenderBalance = senderBalance - amount;
  const newReceiverBalance = receiverBalance + amount;
  await Users.update({ balance: newSenderBalance }, { where: { id: senderId } });
  await Users.update({ balance: newReceiverBalance }, { where: { id: receiverId } });
};

module.exports = {
  senderHaveBalance,
  transactionLimit,
  receiverExists,
  updateBalance,
};