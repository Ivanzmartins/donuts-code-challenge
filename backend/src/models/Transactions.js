const Transactions = (sequelize, DataTypes) => {
  const Transactions = sequelize.define('Transactions', {
    transaction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    sender_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
    },
    receiver_id: {
      type: DataTypes.INTEGER,
      foreignKey: true,
      allowNull: false,
    },
    amount: DataTypes.DECIMAL(10, 2),
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 'transactions',
    underscored: true,
    timestamps: false,
  });
  return Transactions;
}

module.exports = Transactions;