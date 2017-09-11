/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('userr', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    name: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'userr'
  });
};
