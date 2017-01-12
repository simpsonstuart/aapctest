

import express = require("express");
import PuppyController = require("./../../controllers/PuppyController");

var router = express.Router();
class PuppyRoutes {
    private _PuppyController: PuppyController;

    constructor () {
        this._PuppyController = new PuppyController();
    }
    get routes () {
        var controller = this._PuppyController;

        router.get("/Puppies", controller.retrieve);
        router.post("/Puppies", controller.create);
        router.put("/Puppies/:_id", controller.update);
        router.get("/Puppies/:_id", controller.findById);
        router.delete("/Puppies/:_id", controller.delete);

        return router;
    }


}

Object.seal(PuppyRoutes);
export = PuppyRoutes;