/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sceneMode', {
    scenemode_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    scenemode_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    scenemode_parent_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    scenemode_status: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    scenemode_sequence: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    scenemode_create_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    scenemode_update_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'sceneMode'
  });
};
