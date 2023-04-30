
module.exports = (sequelize, DataTypes) => {
  const Dpt = sequelize.define('Dpt', {
    kecamatan: {
      type: DataTypes.CHAR(2),
      allowNull: false,
    },
    kelurahan: {
      type: DataTypes.CHAR(2),
      allowNull: false,
    },
    tps: {
      type: DataTypes.CHAR(3),
      allowNull: false,
    },
    nkk: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nik: {
      type: DataTypes.STRING,
      primaryKey: true,
      allowNull: false,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tempatLahir: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'tempat_lahir',
    }, 
    tglLahir: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'tgl_lahir',
    },
    statusKawin: {
      type: DataTypes.ENUM('B','S'),
      allowNull: false,
      field: 'status_kawin',
    },
    jenisKelamin: {
      type: DataTypes.ENUM('L','P'),
      allowNull: false,
      field: 'jenis_kelamin',
    },
    alamat: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rt: {
      type: DataTypes.CHAR(3),
      allowNull: false,
    },
    rw: {
      type: DataTypes.CHAR(3),
      allowNull: false,
    },
    disabilitas: {
      type: DataTypes.ENUM(0,1),
      allowNull: false,
    },
    keterangan: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
      tableName: 'tb_dpt',
  });
  return Dpt;
};