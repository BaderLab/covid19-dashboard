// to run:  node data.js 10 > output.json

const d3 = require('d3-geo');

function randomID(len) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let id = "";
    for(let i = 0; i < len; i++) {
        id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
}

function randomNum(min, max) {
    return Math.random() * (max - min) + min;
}

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomArg(... args) {
    return args[Math.floor(Math.random() * args.length)];
}

function randomPointInGTA() {
    const gta = {
        type: "Feature",
        properties: {},
        geometry: {
          type: "Polygon",
          coordinates: [[
                [-79.59182739257812,43.57541653626529],
                [-79.7882080078125,43.74332071724287],
                [-79.30618286132812,44.08265280537317],
                [-78.95462036132812,43.87116823921815],
                [-79.05624389648438,43.866218006556394],
                [-79.33502197265625,43.6599240747891],
                [-79.453125,43.65793702655821],
                [-79.59182739257812,43.57541653626529],
            ]]
        }
    };
    for(;;) {
        let x = randomNum(-78.95462036132812, -79.7882080078125);
        let y = randomNum(43.57541653626529, 44.08265280537317);
        if(d3.geoContains(gta, [x,y])) {
            return {
                type: "FeatureCollection",
                features: [{
                    type: "Feature",
                    properties: {},
                    geometry: {
                        type: "Point",
                        coordinates: [x,y]
                    }
                }]
            };
        }
    }
}

const numEntries = process.argv[2] ? process.argv[2] : 10;

let data = [];
for(let i = 0; i < numEntries; i++) {
    let fever = randomArg(true,false);
    let cough = randomArg(true,false);
    let fatigue = randomArg(true,false);
    let symptomatic = fever || cough || fatigue;

    data.push({
        id: randomID(10),
        patient_information: {
            age: randomInt(10,70),
            sex: randomArg("M","F"),
            travel_history: randomArg("europe","USA","china","brazil"),
            known_concurrent_conditions: randomArg(null,"diabetes","hypertension","cancer")
        },
        symptoms: {
            fever: fever,
            cough: cough,
            fatigue: fatigue,
            severity: !symptomatic ? "asymptomatic" : randomArg("mild","moderate","severe"),
        },
        test_information: {
            score: randomNum(0.0, 1.0),
            result: randomArg(true,false)
        },
        timestamp: new Date(2020, 2, randomInt(0,30)),
        location: randomPointInGTA() // geojson
    });
}

let result = JSON.stringify(data, null, 2);
console.log(result);
