

import express = require("express");
import PuppyBusiness = require("./../app/business/PuppyBusiness");
import IBaseController = require("./BaseController");
import IPuppyModel = require("./../app/model/interfaces/PuppyModel");

class PuppyController implements IBaseController <PuppyBusiness> {

    create(req: express.Request, res: express.Response): void {
        try {

            var Puppy: IPuppyModel = <IPuppyModel>req.body;
            var puppyBusiness = new PuppyBusiness();
            puppyBusiness.create(Puppy, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    update(req: express.Request, res: express.Response): void {
        try {
            var Puppy: IPuppyModel = <IPuppyModel>req.body;
            var _id: string = req.params._id;
            var puppyBusiness = new PuppyBusiness();
            puppyBusiness.update(_id, Puppy, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    delete(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var puppyBusiness = new PuppyBusiness();
            puppyBusiness.delete(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send({"success": "success"});
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    retrieve(req: express.Request, res: express.Response): void {
        try {

            var puppyBusiness = new PuppyBusiness();
            puppyBusiness.retrieve((error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
    findById(req: express.Request, res: express.Response): void {
        try {

            var _id: string = req.params._id;
            var puppyBusiness = new PuppyBusiness();
            puppyBusiness.findById(_id, (error, result) => {
                if(error) res.send({"error": "error"});
                else res.send(result);
            });
        }
        catch (e)  {
            console.log(e);
            res.send({"error": "error in your request"});

        }
    }
}
export = PuppyController;