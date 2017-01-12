
import express = require('express');
import path = require('path');

import PuppyRoutes = require('../routes/PuppyRoutes');

var app = express();

class Routes {

    get routes() {

        app.use("/", new PuppyRoutes().routes);
        
        return app;
    }
}
export = Routes;