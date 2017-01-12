
import mongoose = require("mongoose");

interface PuppyModel extends mongoose.Document {
    color: string;
    furType: string;
    name: string;
}

export = PuppyModel;