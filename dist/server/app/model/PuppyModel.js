"use strict";
var PuppyModel = (function () {
    function PuppyModel(PuppyModel) {
        this._PuppyModel = PuppyModel;
    }
    Object.defineProperty(PuppyModel.prototype, "name", {
        get: function () {
            return this._PuppyModel.name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PuppyModel.prototype, "color", {
        get: function () {
            return this._PuppyModel.color;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PuppyModel.prototype, "furType", {
        get: function () {
            return this._PuppyModel.furType;
        },
        enumerable: true,
        configurable: true
    });
    return PuppyModel;
}());
Object.seal(PuppyModel);
module.exports = PuppyModel;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zZXJ2ZXIvc3JjL2FwcC9tb2RlbC9hcHAvbW9kZWwvUHVwcHlNb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBSUE7SUFJSSxvQkFBWSxVQUF1QjtRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLFVBQVUsQ0FBQztJQUNsQyxDQUFDO0lBQ0Qsc0JBQUksNEJBQUk7YUFBUjtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQztRQUNqQyxDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDZCQUFLO2FBQVQ7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDbEMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSwrQkFBTzthQUFYO1lBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDO1FBQ3BDLENBQUM7OztPQUFBO0lBRUwsaUJBQUM7QUFBRCxDQW5CQSxBQW1CQyxJQUFBO0FBQ0QsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUN4QixpQkFBVSxVQUFVLENBQUMiLCJmaWxlIjoiYXBwL21vZGVsL1B1cHB5TW9kZWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IElQdXBweU1vZGVsID0gcmVxdWlyZSgnLi9pbnRlcmZhY2VzL1B1cHB5TW9kZWwnKTtcblxuY2xhc3MgUHVwcHlNb2RlbCB7XG5cbiAgICBwcml2YXRlIF9QdXBweU1vZGVsOiBJUHVwcHlNb2RlbDtcblxuICAgIGNvbnN0cnVjdG9yKFB1cHB5TW9kZWw6IElQdXBweU1vZGVsKSB7XG4gICAgICAgIHRoaXMuX1B1cHB5TW9kZWwgPSBQdXBweU1vZGVsO1xuICAgIH1cbiAgICBnZXQgbmFtZSAoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX1B1cHB5TW9kZWwubmFtZTtcbiAgICB9XG5cbiAgICBnZXQgY29sb3IgKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiB0aGlzLl9QdXBweU1vZGVsLmNvbG9yO1xuICAgIH1cblxuICAgIGdldCBmdXJUeXBlICgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fUHVwcHlNb2RlbC5mdXJUeXBlO1xuICAgIH1cbiAgICBcbn1cbk9iamVjdC5zZWFsKFB1cHB5TW9kZWwpO1xuZXhwb3J0ID0gIFB1cHB5TW9kZWw7Il19
