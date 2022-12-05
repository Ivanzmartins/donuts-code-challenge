const Transactions = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    transaction_id: { type: DataTypes.INTEGER, primaryKey: true },
    sender_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: true,
    },
    receiver_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
    },
    sender_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
    },
    amount: DataTypes.DECIMAL(10, 2),
    created_at: DataTypes.DATE,
  }, {
    tableName: 'transactions',
    underscored: true,
  });
  return Transactions;
}

module.exports = Transactions;