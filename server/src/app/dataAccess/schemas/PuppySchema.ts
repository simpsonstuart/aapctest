

import DataAccess = require('../DataAccess');
import IPuppyModel = require("./../../model/interfaces/PuppyModel");

var mongoose = DataAccess.mongooseInstance;
var mongooseConnection = DataAccess.mongooseConnection;

class PuppySchema {

    static get schema () {
        var schema =  mongoose.Schema({
            name : {
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
    }
}
var schema = mongooseConnection.model<IPuppyModel>("Puppies", PuppySchema.schema);
export = schema;""