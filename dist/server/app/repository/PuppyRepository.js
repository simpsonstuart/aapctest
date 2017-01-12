"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var PuppySchema = require("./../dataAccess/schemas/PuppySchema");
var RepositoryBase = require("./BaseRepository");
var PuppyRepository = (function (_super) {
    __extends(PuppyRepository, _super);
    function PuppyRepository() {
        return _super.call(this, PuppySchema) || this;
    }
    return PuppyRepository;
}(RepositoryBase));
Object.seal(PuppyRepository);
module.exports = PuppyRepository;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9zZXJ2ZXIvc3JjL2FwcC9yZXBvc2l0b3J5L2FwcC9yZXBvc2l0b3J5L1B1cHB5UmVwb3NpdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFHQSxpRUFBb0U7QUFDcEUsaURBQW9EO0FBRXBEO0lBQStCLG1DQUEyQjtJQUN0RDtlQUNJLGtCQUFNLFdBQVcsQ0FBQztJQUN0QixDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUpBLEFBSUMsQ0FKOEIsY0FBYyxHQUk1QztBQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDN0IsaUJBQVMsZUFBZSxDQUFDIiwiZmlsZSI6ImFwcC9yZXBvc2l0b3J5L1B1cHB5UmVwb3NpdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IFB1cHB5TW9kZWwgPSByZXF1aXJlKFwiLi8uLi9tb2RlbC9QdXBweU1vZGVsXCIpO1xuaW1wb3J0IElQdXBweU1vZGVsID0gcmVxdWlyZShcIi4vLi4vbW9kZWwvaW50ZXJmYWNlcy9QdXBweU1vZGVsXCIpO1xuaW1wb3J0IFB1cHB5U2NoZW1hID0gcmVxdWlyZShcIi4vLi4vZGF0YUFjY2Vzcy9zY2hlbWFzL1B1cHB5U2NoZW1hXCIpO1xuaW1wb3J0IFJlcG9zaXRvcnlCYXNlID0gcmVxdWlyZShcIi4vQmFzZVJlcG9zaXRvcnlcIik7XG5cbmNsYXNzIFB1cHB5UmVwb3NpdG9yeSAgZXh0ZW5kcyBSZXBvc2l0b3J5QmFzZTxJUHVwcHlNb2RlbD4ge1xuICAgIGNvbnN0cnVjdG9yICgpIHtcbiAgICAgICAgc3VwZXIoUHVwcHlTY2hlbWEpO1xuICAgIH1cbn1cblxuT2JqZWN0LnNlYWwoUHVwcHlSZXBvc2l0b3J5KTtcbmV4cG9ydCA9IFB1cHB5UmVwb3NpdG9yeTsiXX0=
