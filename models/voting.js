'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class voting extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  voting.init({
    nik: DataTypes.STRING,
    pemilih: DataTypes.STRING,
    tps: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'voting',
  });
  return voting;
};