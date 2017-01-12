"use strict";
var DataAccess = require("../DataAccess");
var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;
var PuppySchema = (function () {
    function PuppySchema() {
    }
    Object.defineProperty(PuppySchema, "schema", {
        get: function () {
            var schema = mongoose.Schema({
                name: {
                    type: String,
                    required: true
                },
                color: {
                    type: String,
                    required: true
                },
                furType: {
                    type: String,
                    required: true
                }
            });
            return schema;
        },
        enumerable: true,
        configurable: true
    });
    return PuppySchema;
}());
var schema = mongooseConnection.model("Puppies", PuppySchema.schema);
"";
module.exports = schema;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zZXJ2ZXIvc3JjL2FwcC9kYXRhQWNjZXNzL3NjaGVtYXMvYXBwL2RhdGFBY2Nlc3Mvc2NoZW1hcy9QdXBweVNjaGVtYS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBRUEsMENBQTZDO0FBRzdDLElBQUksUUFBUSxHQUFHLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQztBQUMzQyxJQUFJLGtCQUFrQixHQUFHLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQztBQUV2RDtJQUFBO0lBb0JBLENBQUM7SUFsQkcsc0JBQVcscUJBQU07YUFBakI7WUFDSSxJQUFJLE1BQU0sR0FBSSxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUMxQixJQUFJLEVBQUc7b0JBQ0gsSUFBSSxFQUFFLE1BQU07b0JBQ1osUUFBUSxFQUFFLElBQUk7aUJBQ2pCO2dCQUNELEtBQUssRUFBRTtvQkFDSCxJQUFJLEVBQUUsTUFBTTtvQkFDWixRQUFRLEVBQUUsSUFBSTtpQkFDakI7Z0JBQ0QsT0FBTyxFQUFFO29CQUNMLElBQUksRUFBRSxNQUFNO29CQUNaLFFBQVEsRUFBRSxJQUFJO2lCQUNqQjthQUNKLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxNQUFNLENBQUM7UUFDbEIsQ0FBQzs7O09BQUE7SUFDTCxrQkFBQztBQUFELENBcEJBLEFBb0JDLElBQUE7QUFDRCxJQUFJLE1BQU0sR0FBRyxrQkFBa0IsQ0FBQyxLQUFLLENBQWMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUNsRSxFQUFFLENBQUE7QUFBbEIsaUJBQVMsTUFBTSxDQUFDIiwiZmlsZSI6ImFwcC9kYXRhQWNjZXNzL3NjaGVtYXMvUHVwcHlTY2hlbWEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IERhdGFBY2Nlc3MgPSByZXF1aXJlKCcuLi9EYXRhQWNjZXNzJyk7XG5pbXBvcnQgSVB1cHB5TW9kZWwgPSByZXF1aXJlKFwiLi8uLi8uLi9tb2RlbC9pbnRlcmZhY2VzL1B1cHB5TW9kZWxcIik7XG5cbnZhciBtb25nb29zZSA9IERhdGFBY2Nlc3MubW9uZ29vc2VJbnN0YW5jZTtcbnZhciBtb25nb29zZUNvbm5lY3Rpb24gPSBEYXRhQWNjZXNzLm1vbmdvb3NlQ29ubmVjdGlvbjtcblxuY2xhc3MgUHVwcHlTY2hlbWEge1xuXG4gICAgc3RhdGljIGdldCBzY2hlbWEgKCkge1xuICAgICAgICB2YXIgc2NoZW1hID0gIG1vbmdvb3NlLlNjaGVtYSh7XG4gICAgICAgICAgICBuYW1lIDoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNvbG9yOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVyVHlwZToge1xuICAgICAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgICAgICByZXF1aXJlZDogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gc2NoZW1hO1xuICAgIH1cbn1cbnZhciBzY2hlbWEgPSBtb25nb29zZUNvbm5lY3Rpb24ubW9kZWw8SVB1cHB5TW9kZWw+KFwiUHVwcGllc1wiLCBQdXBweVNjaGVtYS5zY2hlbWEpO1xuZXhwb3J0ID0gc2NoZW1hO1wiXCIiXX0=
