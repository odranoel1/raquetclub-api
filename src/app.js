const express = require('express');

// Start express & mongo
const app = express();
const db =  require('./database');

// Settings Express
app.set('port', process.env.PORT || 3000);


// Middlewares
app.use(express.json());

//Routes
app.use('/api/', require('./routes/user'));

//Server is listening
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});
