const { v4: uuidv4 } = require('uuid');

let data = [
    {
        id:uuidv4(),
        name: "durgesh sharma",
        adhar : "XXXXXXXXXXX",
        content : "hello durgesh sharma ji"
    }
    ,
    {
        id:uuidv4(),
        name: "Monti",
        adhar : "XXXXXXXXXXX",
        content : "hello Monti"
    },
    {
        id:uuidv4(),
        name: "Suresh",
        adhar : "XXXXXXXXXXX",
        content : "hello Suresh"
    },
    {
        id:uuidv4(),
        name: "Pushpa",
        adhar : "XXXXXXXXXXX",
        content : "hello Pushpa"
    },
    {
        id:uuidv4(),
        name: "Rahul",
        adhar : "XXXXXXXXXXX",
        content : "hello"
    },
    {
        id:uuidv4(),
        name: "Pushpendra",
        adhar : "XXXXXXXXXXX",
        content : "hello durgesh "
    }
];

module.exports = data;