db = db.getSiblingDB('tripsdb');

db.createCollection('trips');

db.trips.insertMany(
    [

        {
            "start": {
                "time": 10,
                "lat": -33.580158,
                "lon": -70.567227,
                "address": "La Victoria 2001"
            },
            "end": {
                "time": 50,
                "lat": -33.580005,
                "lon": -70.566498,
                "address": "El Peñón 01330, Puente Alto, Región Metropolitana, Chile"
            },
            "id": "6218184f1bc0638700755a4a",
            "distance": 0.0007448825410822919,
            "duration": 40,
            "overspeedsCount": 1,
            "boundingBox": [
                {
                    "lat": -33.580158,
                    "lon": -70.567227
                },
                {
                    "lat": -33.58013,
                    "lon": -70.566995
                },
                {
                    "lat": -33.580117,
                    "lon": -70.566633
                },
                {
                    "lat": -33.580078,
                    "lon": -70.566408
                },
                {
                    "lat": -33.580005,
                    "lon": -70.566498
                }
            ]
        },
        {
            "start": {
                "time": 10,
                "lat": -33.580158,
                "lon": -70.567227,
                "address": "El Peñón 1231, Puente Alto, Región Metropolitana, Chile"
            },
            "end": {
                "time": 50,
                "lat": -33.580005,
                "lon": -70.566498,
                "address": "El Peñón 01330, Puente Alto, Región Metropolitana, Chile"
            },
            "id": "621814e15a54112020f26a15",
            "distance": 0.0007448825410822919,
            "duration": 40,
            "overspeedsCount": 1,
            "boundingBox": [
                {
                    "lat": -33.580158,
                    "lon": -70.567227
                },
                {
                    "lat": -33.58013,
                    "lon": -70.566995
                },
                {
                    "lat": -33.580117,
                    "lon": -70.566633
                },
                {
                    "lat": -33.580078,
                    "lon": -70.566408
                },
                {
                    "lat": -33.580005,
                    "lon": -70.566498
                }
            ]
        },
        {
            "start": {
                "time": 10,
                "lat": -33.580158,
                "lon": -70.567227,
                "address": "El Peñón 1231, Puente Alto, Región Metropolitana, Chile"
            },
            "end": {
                "time": 50,
                "lat": -33.580005,
                "lon": -70.566498,
                "address": "El Peñón 01330, Puente Alto, Región Metropolitana, Chile"
            },
            "id": "621814d95a54112020f26a13",
            "distance": 0.0007448825410822919,
            "duration": 40,
            "overspeedsCount": 1,
            "boundingBox": [
                {
                    "lat": -33.580158,
                    "lon": -70.567227
                },
                {
                    "lat": -33.58013,
                    "lon": -70.566995
                },
                {
                    "lat": -33.580117,
                    "lon": -70.566633
                },
                {
                    "lat": -33.580078,
                    "lon": -70.566408
                },
                {
                    "lat": -33.580005,
                    "lon": -70.566498
                }
            ]
        }
    ]
);