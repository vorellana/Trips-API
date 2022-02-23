const exp = {};

exp.getTrips = async (req, res) => {

    console.log("gettrips 001");

    infoJson = {
        name : "victor",
        age : 10
    }

    res.json(infoJson);
}

module.exports = exp;