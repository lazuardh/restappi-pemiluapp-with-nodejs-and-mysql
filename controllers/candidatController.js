const {Candidat} = require('../models');

const getAllDatasCandidates = async (req, res) => {
    try {
        const Calon = await Candidat.findAll();
        return res.json({
            message: 'respon kandidat success',
            values: Calon,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

module.exports ={getAllDatasCandidates}