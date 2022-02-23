const exp = {};
const { getTrips, createTrip } = require('../services/trips.service')

exp.getTrips = async (req, res) => {

    // console.log("gettrips 001");
    // infoJson = {
    //     name : "victor",
    //     age : 10
    // }
    // res.json(infoJson);
    let trips = await getTrips();
    res.json(trips)
}


exp.createTrip = async (req, res) => {

    // // // // const NodeGeocoder = require('node-geocoder');

    // // // // const options = {
    // // // //   provider: 'google',
    
    // // // //   // Optional depending on the providers
    // // // //   // fetch: customFetchImplementation,
    // // // //   apiKey: 'AIzaSyBOvBaUjXyNALkd7L2MttHK7ZAfQnhquQs', // for Mapquest, OpenCage, Google Premier
    // // // //   formatter: null // 'gpx', 'string', ...
    // // // // };
    
    // // // // const geocoder = NodeGeocoder(options);
    // // // // // -12.06638206274529, -75.21709415659676
    // // // // const respo = await geocoder.reverse({ lat: -12.06638206274529, lon: -75.21709415659676 });
    
    // // // // console.log(respo);

    let response = await createTrip(req.body);
    res.json(response);
    // res.json({
    //     message: "post successful"
    // })
}

module.exports = exp;