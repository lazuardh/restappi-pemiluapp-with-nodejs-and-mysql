'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Candidat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Candidat.init({
    nameKandidat: DataTypes.STRING,
    partai: DataTypes.STRING,
    noUrut: DataTypes.STRING,
    motivasi: DataTypes.STRING,
    sasaran: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Candidat',
  });
  return Candidat;
};