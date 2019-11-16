const Celebrity = require('../models/celebrity')
const mongoose = require('mongoose')
require ('../config/db.config')

const arr = [
    {
        name:'Tom Cruise',
        occupations:'Actor',
        catchPhrase:'The power is mine',
    },
    {
        name:'Beyonce',
        occupations:'Singer',
        catchPhrase:'The power is mine',
    },
    {
        name:'Daffy Duck',
        occupations:'Comedian',
        catchPhrase:'The power is mine',
    },
]

Celebrity.create(arr)
    .then((arr) => console.info (`${arr.length} new celebritys added in the db`))
    .catch(error => console.info(error))
    .then(()=>mongoose.connection.close())