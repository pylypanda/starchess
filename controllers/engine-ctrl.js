const Engine = require('../models/engine-model');

getEngines = async (req, res) => {
    await Engine.find({}, (err, engines) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!engines.length) {
            return res
                .status(404)
                .json({ success: false, error: `Engines not found` })
        }
        return res.status(200).json({ success: true, data: engines })
    }).sort({ rank: -1 }).collation({locale: "en_US", numericOrdering: true}).catch(err => console.log(err))
}

module.exports = { getEngines };
