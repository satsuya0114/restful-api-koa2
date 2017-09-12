/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('device', {
    device_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    device_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    device_ip: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    device_owner: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    scenemode_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    device_mac: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    device_port: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    device_zone: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    device_did: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    device_password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    device_sequence: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    device_status: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    device_created_time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    device_update_time: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'device'
  });
};
