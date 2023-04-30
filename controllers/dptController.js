const { Dpt } = require('../models');

const getAllDatasDPT = async (req, res) => {
    const getDPT = await Dpt.findAll({
        attributes: ['kecamatan', 'kelurahan', 'tps', 'nik', 'nama', 'tempat_lahir', 'tgl_lahir', 'status_kawin', 'jenis_kelamin', 'alamat', 'rt', 'rw']
    });
    const getTotalDatas = await Dpt.count();
    return  res.json({
        message: 'response succesfully',
        totalData: getTotalDatas,
        values: getDPT,
    });
}

const getDatasByNIK = async (req, res) => {
    const { nik } = req.params;
      const data = await Dpt.findByPk(nik, {
        attributes: { exclude: ['createdAt', 'updatedAt', 'nkk', 'disabilitas', 'keterangan'] },
      });

      if (!data) {
        return res.status(404).json({ message: 'Data not found' });
      }

      return res.status(200).json({
        message: 'response succesfully',
        data: data,
      });
  };
  

// attributes: ['kecamatan', 'kelurahan', 'tps', 'nkk', 'nik', 'nama', 'tempat_lahir', 'tgl_lahir', 'status_kawin', 'jenis_kelamin', 'alamat', 'rt', 'rw', 'disabilitas', 'keterangan']

module.exports = {getAllDatasDPT, getDatasByNIK}