const { Schema, model } = require('mongoose');


const TripSchema = new Schema({
    id: {
        type: Schema.Types.ObjectId,
        index: true,
        require: true,
        auto: true
    },
    start: {
        time: Number,
        lat: Number,
        lon: Number,
        address: String
    },
    end: {
        time: Number,
        lat: Number,
        lon: Number,
        address: String
    },
    distance: Number,
    duration: Number,
    overspeedsCount: Number,
    boundingBox: [
        {
            _id: false,
            lat: Number,
            lon: Number
        }
    ]
})


// const TripSchema = new Schema({
//     id: {
//         type: Schema.Types.ObjectId,
//         index: true,
//         require: true,
//         auto: true
//     },
//     comment: String,
//     code: String,
//     force: Number,
//     element: {
//         name: String,
//         age: Number
//     },
//     pets: [
//         {
//             _id: false,
//             name: String,
//             age: Number
//         }
//     ]

// })

module.exports = model('trips', TripSchema);