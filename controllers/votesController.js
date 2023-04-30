const { voting } = require('../models');

const getAllDatasVoting = async (req, res) => {
    console.log(res.json);
    try {
        const userVotes = await voting.findAll();
        return res.status(200).json({
            message: "response voting successfully",
            values: userVotes,
        });
    } catch (error) {
        return res.status(400).json({
            message: error,
        });
    }
}

module.exports = {getAllDatasVoting}