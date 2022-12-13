const mongoose = require('mongoose');

mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/aprendendoMongo').then(db => {
    console.log(db);
});