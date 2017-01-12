

import IPuppyModel = require('./interfaces/PuppyModel');

class PuppyModel {

    private _PuppyModel: IPuppyModel;

    constructor(PuppyModel: IPuppyModel) {
        this._PuppyModel = PuppyModel;
    }
    get name (): string {
        return this._PuppyModel.name;
    }

    get color (): string {
        return this._PuppyModel.color;
    }

    get furType (): string {
        return this._PuppyModel.furType;
    }
    
}
Object.seal(PuppyModel);
export =  PuppyModel;