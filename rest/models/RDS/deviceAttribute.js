/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('deviceAttribute', {
    attribute_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    device_id: {
      type: "BINARY(16)",
      allowNull: true
    },
    attribute_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    attribute_sequence: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    attribute_status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    attribute_created_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    attribute_updated_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'deviceAttribute'
  });
};
