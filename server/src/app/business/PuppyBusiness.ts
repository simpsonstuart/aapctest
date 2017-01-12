
import PuppyRepository = require("./../repository/PuppyRepository");
import IPuppyBusiness = require("./interfaces/PuppyBusiness");
import IPuppyModel = require("./../model/interfaces/PuppyModel");
import PuppyModel = require("./../model/PuppyModel");


class PuppyBusiness implements IPuppyBusiness {
    private _PuppyRepository: PuppyRepository;

    constructor () {
        this._PuppyRepository = new PuppyRepository();
    }

    create (item: IPuppyModel, callback: (error: any, result: any) => void) {
        this._PuppyRepository.create(item, callback);
    }

    retrieve (callback: (error: any, result: any) => void) {
        this._PuppyRepository.retrieve(callback);
    }

    update (_id: string, item: IPuppyModel, callback: (error: any, result: any) => void) {

        this._PuppyRepository.findById(_id, (err, res) => {
            if(err) callback(err, res);

            else
                this._PuppyRepository.update(res._id, item, callback);

        });
    }

    delete (_id: string, callback:(error: any, result: any) => void) {
        this._PuppyRepository.delete(_id , callback);
    }

    findById (_id: string, callback: (error: any, result: IPuppyModel) => void) {
        this._PuppyRepository.findById(_id, callback);
    }

}


Object.seal(PuppyBusiness);
export = PuppyBusiness;