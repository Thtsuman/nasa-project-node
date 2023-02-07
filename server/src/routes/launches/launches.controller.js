const { launches } = require('../../modals/launches.modal')

function getAllLaunches(req, res) {
    res.status(200).json(Array.from(launches.values()))
}

module.exports = {
    getAllLaunches
}