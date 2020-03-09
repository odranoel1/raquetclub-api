const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/raquetclub-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));