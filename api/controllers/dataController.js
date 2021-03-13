/* eslint-disable no-console */
const Data = require('../models/data');

exports.getAllData = async (req, res) => {
        try {
                const allData = await Data.find();
                res.status(200).json({
                        status: 'Success ✨',
                        data: allData,
                });
        } catch (err) {
                res.status(404).json({
                        status: 'fail',
                        message: err,
                });
        }
};
