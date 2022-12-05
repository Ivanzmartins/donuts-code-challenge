const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    user_id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    balance: DataTypes.DECIMAL(10, 2),

  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });



  return User;
}

module.exports = User;