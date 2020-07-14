const mongoose = require('mongoose');
const dbConfig = require('./config');

module.exports = {
    init(){
        mongoose.connect(dbConfig.dbs,{
            useNewUrlParser: true
        })
    }
};