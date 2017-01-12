"use strict";
var express = require("express");
var PuppyController = require("./../../controllers/PuppyController");
var router = express.Router();
var PuppyRoutes = (function () {
    function PuppyRoutes() {
        this._PuppyController = new PuppyController();
    }
    Object.defineProperty(PuppyRoutes.prototype, "routes", {
        get: function () {
            var controller = this._PuppyController;
            router.get("/Puppies", controller.retrieve);
            router.post("/Puppies", controller.create);
            router.put("/Puppies/:_id", controller.update);
            router.get("/Puppies/:_id", controller.findById);
            router.delete("/Puppies/:_id", controller.delete);
            return router;
        },
        enumerable: true,
        configurable: true
    });
    return PuppyRoutes;
}());
Object.seal(PuppyRoutes);
module.exports = PuppyRoutes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zZXJ2ZXIvc3JjL2NvbmZpZy9yb3V0ZXMvY29uZmlnL3JvdXRlcy9QdXBweVJvdXRlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsaUNBQW9DO0FBQ3BDLHFFQUF3RTtBQUV4RSxJQUFJLE1BQU0sR0FBRyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUM7QUFDOUI7SUFHSTtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFDRCxzQkFBSSwrQkFBTTthQUFWO1lBQ0ksSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLGdCQUFnQixDQUFDO1lBRXZDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDM0MsTUFBTSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQy9DLE1BQU0sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqRCxNQUFNLENBQUMsTUFBTSxDQUFDLGVBQWUsRUFBRSxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFbEQsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUNsQixDQUFDOzs7T0FBQTtJQUdMLGtCQUFDO0FBQUQsQ0FuQkEsQUFtQkMsSUFBQTtBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDekIsaUJBQVMsV0FBVyxDQUFDIiwiZmlsZSI6ImNvbmZpZy9yb3V0ZXMvUHVwcHlSb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IGV4cHJlc3MgPSByZXF1aXJlKFwiZXhwcmVzc1wiKTtcbmltcG9ydCBQdXBweUNvbnRyb2xsZXIgPSByZXF1aXJlKFwiLi8uLi8uLi9jb250cm9sbGVycy9QdXBweUNvbnRyb2xsZXJcIik7XG5cbnZhciByb3V0ZXIgPSBleHByZXNzLlJvdXRlcigpO1xuY2xhc3MgUHVwcHlSb3V0ZXMge1xuICAgIHByaXZhdGUgX1B1cHB5Q29udHJvbGxlcjogUHVwcHlDb250cm9sbGVyO1xuXG4gICAgY29uc3RydWN0b3IgKCkge1xuICAgICAgICB0aGlzLl9QdXBweUNvbnRyb2xsZXIgPSBuZXcgUHVwcHlDb250cm9sbGVyKCk7XG4gICAgfVxuICAgIGdldCByb3V0ZXMgKCkge1xuICAgICAgICB2YXIgY29udHJvbGxlciA9IHRoaXMuX1B1cHB5Q29udHJvbGxlcjtcblxuICAgICAgICByb3V0ZXIuZ2V0KFwiL1B1cHBpZXNcIiwgY29udHJvbGxlci5yZXRyaWV2ZSk7XG4gICAgICAgIHJvdXRlci5wb3N0KFwiL1B1cHBpZXNcIiwgY29udHJvbGxlci5jcmVhdGUpO1xuICAgICAgICByb3V0ZXIucHV0KFwiL1B1cHBpZXMvOl9pZFwiLCBjb250cm9sbGVyLnVwZGF0ZSk7XG4gICAgICAgIHJvdXRlci5nZXQoXCIvUHVwcGllcy86X2lkXCIsIGNvbnRyb2xsZXIuZmluZEJ5SWQpO1xuICAgICAgICByb3V0ZXIuZGVsZXRlKFwiL1B1cHBpZXMvOl9pZFwiLCBjb250cm9sbGVyLmRlbGV0ZSk7XG5cbiAgICAgICAgcmV0dXJuIHJvdXRlcjtcbiAgICB9XG5cblxufVxuXG5PYmplY3Quc2VhbChQdXBweVJvdXRlcyk7XG5leHBvcnQgPSBQdXBweVJvdXRlczsiXX0=
