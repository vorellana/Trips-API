const exp = {};
const Trip = require('../models/trips');
const { generateTrip } = require('../utils/trips.operations')

exp.getTrips = async () => {
    let trips = await Trip.find({});
    return trips;
}


exp.createTrip = async (body) => {

    // let newTrip = new Trip({ comment: "cuatro"});
    // let newTrip = new Trip(body);

    // let response = await newTrip.save();
    // await newTrip.save();

    let jsonTrip = await generateTrip(body);
    let newTrip = new Trip(jsonTrip);

    await newTrip.save();

    let response = { message: "create Trip successful"};
    return response;
}

module.exports = exp;