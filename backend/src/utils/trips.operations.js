const exp = {};
const NodeGeocoder = require('node-geocoder');

const optionsNg = {
    provider: 'google',  
    // fetch: customFetchImplementation,
    apiKey: 'AIzaSyBOvBaUjXyNALkd7L2MttHK7ZAfQnhquQs',
    formatter: null
};

const geocoder = NodeGeocoder(optionsNg);

const getStartEnd = async (readings) => {    
    readings.sort((a,b) => (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0))
    let startLocation = await geocoder.reverse({ 
        lat: readings[0].location.lat, 
        lon: readings[0].location.lon 
    });
    let endLocation = await geocoder.reverse({ 
        lat: readings[readings.length - 1].location.lat, 
        lon: readings[readings.length - 1].location.lon 
    });
    let start = {
        time: readings[0].time,
        lat: readings[0].location.lat,
        lon: readings[0].location.lon,
        address: startLocation[0].formattedAddress
    }
    let end = {
        time: readings[readings.length - 1].time,
        lat: readings[readings.length - 1].location.lat,
        lon: readings[readings.length - 1].location.lon,
        address: endLocation[0].formattedAddress
    }
    return { start, end };
}

exp.generateTrip = async (body) => {
    const readings = body.readings
    let { start, end } = await getStartEnd(readings);
    let distance = Math.sqrt(Math.pow((end.lat - start.lat), 2) + Math.pow((end.lon - start.lon), 2));
    let duration = end.time - start.time;
    let overspeedsCount = 0;
    let boundingBox = [];

    readings.forEach(item => {
        if (item.speed > item.speedLimit)
            overspeedsCount ++;
        boundingBox.push(item.location);
    });

    let trip = {
        start: start,
        end: end,
        distance: distance,
        duration: duration,
        overspeedsCount: overspeedsCount,
        boundingBox:boundingBox
    }
    return trip;
}

exp.validateTrip = async (body) => {
    const readings = body.readings
    let success = false;
    let message = '';
    let withoutTime = false;
    readings.forEach(item => {
        if (item.time === undefined){
            withoutTime = true;
            return;
        }            
    });
    if ( withoutTime ) {
        message = 'Todos los readings deben tener la propiedad time';
    } else if (readings.length < 5 ){
        message = 'Para construir el viaje deben haber por lo menos 5 readings';
    } else {
        success = true
    }
    return { success, message };
}

module.exports = exp;