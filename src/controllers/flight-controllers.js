const { flightservice } = require('../services/index');

const create = async (req, res) => {
    try {
        const flight = await flightservice.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            success: true,
            error: {},
            message: "Flight created successfully",
        });
    } catch (err) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to create flight",
            error: err,
        });
    }
};
const getAll = async(req,res)=>{
    try {
        const flight = await flightservice.getAllFlight(req.query)
        return res.status(201).json({
            data: flight,
            success: true,
            error: {},
            message: "Flight fetched successfully",
        });

    } catch (err) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Failed to get all flight",
            error: err,
        });
    }
}

module.exports = {
     create ,
     getAll
};
