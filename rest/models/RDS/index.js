const Sequelize = require('sequelize');

const sequelize = new Sequelize('nice', 'nicecam20', 'nicecamera20', {
  host: 'aurora-dev.nice-cam.com',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  define: {
    timestamps: false
  },
});

// load models                 
const models = [
  'device',
  'deviceAttribute',
  'sceneMode'
  // 'SequelizeMeta',
  // 'userr'
];
models.forEach((model) => {
  module.exports[model] = sequelize.import(__dirname + '/' + model);
  console.log(`__dirname: ${__dirname}`);
});

module.exports.sequelize = sequelize;
