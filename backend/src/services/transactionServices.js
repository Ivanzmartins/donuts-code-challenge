const { Transactions } = require('../models');

const { senderHaveBalance, transactionLimit, receiverExists, updateBalance } = require('../utils/transactionAux');

const newDeposit = async (userId, amount) => {
  try {
    const transaction = await Transactions.create({ senderId: userId, receiverId: userId, amount });
    await updateBalance(userId, userId, amount);

    return { status: 200, transaction };
  } catch (error) {
    return { status: 500, message: error.message };
  }
};

const createTransaction = async (senderId, receiverId, amount) => {
  if (senderId === receiverId) return { status: 400, message: 'Cannot transfer to yourself' };
  try {
    const senderBalance = await senderHaveBalance(senderId, amount);
    if (!senderBalance) return { status: 400, message: 'Insufficient funds' };

    const limit = await transactionLimit(amount);
    if (!limit) return { status: 400, message: 'Transaction limit exceeded' };

    const validReceiver = await receiverExists(receiverId);
    if (!validReceiver) return { status: 400, message: 'Receiver does not exist' };

    await updateBalance(senderId, receiverId, amount);
    const transaction = await Transactions.create({ sender_id: senderId, receiver_id: receiverId, amount });

    return { status: 201, transaction };
  } catch (error) {
    return { status: 500, message: error.message };
  }
}

module.exports = {
  createTransaction,
  newDeposit,
};