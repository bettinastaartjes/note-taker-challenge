const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//initializing app and creating port
const app = express();
const PORT = process.env.PORT || 3001;

// setting up body parsing/static/route middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
app.use('api', apiRoutes);
app.use('/', htmlRoutes);

// starting server on port
app.listen(PORT, () => console.log(`listening on Port: ${PORT}`));