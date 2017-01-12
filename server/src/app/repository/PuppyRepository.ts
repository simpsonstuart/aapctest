
import PuppyModel = require("./../model/PuppyModel");
import IPuppyModel = require("./../model/interfaces/PuppyModel");
import PuppySchema = require("./../dataAccess/schemas/PuppySchema");
import RepositoryBase = require("./BaseRepository");

class PuppyRepository  extends RepositoryBase<IPuppyModel> {
    constructor () {
        super(PuppySchema);
    }
}

Object.seal(PuppyRepository);
export = PuppyRepository;