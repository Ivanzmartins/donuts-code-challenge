const transactionServices = require('../services/transactionServices');

const newTransaction = async (req, res) => {
  const senderId = Number(req.params.id); // pesquisar a implementação do req.user
  
  const { receiverId, amount } = req.body;
  try {
    const { status, message } = await transactionServices.createTransaction(senderId, receiverId, amount);

    if (message) return res.status(status).json(message);
  
    return res.status(status).json({ message: 'Value transfered succefully.' });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = {
  newTransaction,
};