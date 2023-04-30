'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('tb_dpt', { 
      kecamatan: {
        type: Sequelize.CHAR(2),
        allowNull: false, 
      },
      kelurahan: {
        type: Sequelize.CHAR(2),
        allowNull: false, 
      },
      tps: {
        type: Sequelize.CHAR(3),
        allowNull: false, 
      },
      nkk: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      nik: {
        type: Sequelize.STRING(20),
        primaryKey: true,
        allowNull: false,
      },
      nama: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      tempat_lahir: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      tgl_lahir: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      status_kawin: {
        type: Sequelize.ENUM('S','B'),
        allowNull: false, 
      },
      jenis_kelamin: {
        type: Sequelize.ENUM('L','P'),
        allowNull: false, 
      },
      alamat: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
      rt: {
        type: Sequelize.CHAR(3),
        allowNull: false, 
      },
      rw: {
        type: Sequelize.CHAR(3),
        allowNull: false, 
      },
      disabilitas: {
        type: Sequelize.ENUM('0','1'),
        allowNull: false, 
      },
      keterangan: {
        type: Sequelize.STRING,
        allowNull: false, 
      },
    });
  },

  async down (queryInterface, Sequelize) {
   
    await queryInterface.dropTable('tb_dpt');
  }
};
