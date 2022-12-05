const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    balance: DataTypes.DECIMAL(10, 2),
    cpf: DataTypes.INTEGER,

  }, {
    tableName: 'users',
    timestamps: false,
    underscored: true,
  });



  return User;
}

module.exports = User;