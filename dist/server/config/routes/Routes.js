"use strict";
var express = require("express");
var PuppyRoutes = require("../routes/PuppyRoutes");
var app = express();
var Routes = (function () {
    function Routes() {
    }
    Object.defineProperty(Routes.prototype, "routes", {
        get: function () {
            app.use("/", new PuppyRoutes().routes);
            return app;
        },
        enumerable: true,
        configurable: true
    });
    return Routes;
}());
module.exports = Routes;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zZXJ2ZXIvc3JjL2NvbmZpZy9yb3V0ZXMvY29uZmlnL3JvdXRlcy9Sb3V0ZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLGlDQUFvQztBQUdwQyxtREFBc0Q7QUFFdEQsSUFBSSxHQUFHLEdBQUcsT0FBTyxFQUFFLENBQUM7QUFFcEI7SUFBQTtJQVFBLENBQUM7SUFORyxzQkFBSSwwQkFBTTthQUFWO1lBRUksR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsSUFBSSxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUV2QyxNQUFNLENBQUMsR0FBRyxDQUFDO1FBQ2YsQ0FBQzs7O09BQUE7SUFDTCxhQUFDO0FBQUQsQ0FSQSxBQVFDLElBQUE7QUFDRCxpQkFBUyxNQUFNLENBQUMiLCJmaWxlIjoiY29uZmlnL3JvdXRlcy9Sb3V0ZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBleHByZXNzID0gcmVxdWlyZSgnZXhwcmVzcycpO1xuaW1wb3J0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5cbmltcG9ydCBQdXBweVJvdXRlcyA9IHJlcXVpcmUoJy4uL3JvdXRlcy9QdXBweVJvdXRlcycpO1xuXG52YXIgYXBwID0gZXhwcmVzcygpO1xuXG5jbGFzcyBSb3V0ZXMge1xuXG4gICAgZ2V0IHJvdXRlcygpIHtcblxuICAgICAgICBhcHAudXNlKFwiL1wiLCBuZXcgUHVwcHlSb3V0ZXMoKS5yb3V0ZXMpO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGFwcDtcbiAgICB9XG59XG5leHBvcnQgPSBSb3V0ZXM7Il19
