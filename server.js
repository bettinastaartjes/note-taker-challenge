//the require statements will read the index.js files ine ach of the directories indiciated
const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

//initializing app and creating port
//the variable we use to create endpoints (app) is set to express(), which means that if we were to move the app routes from server.js to another file, we'd need to make sure we're using the same app the entire time. 
const app = express();
const PORT = process.env.PORT || 3001;

// setting up body parsing/static/route middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));
//now we tell teh server that anytime a client navigates to hostApi, the app will use the router we set up in apiroutes. if / is the endpoint, then the router will serve back our html routes.
app.use('api', apiRoutes);
app.use('/', htmlRoutes);

// starting server on port
app.listen(PORT, () => console.log(`listening on Port: ${PORT}`));