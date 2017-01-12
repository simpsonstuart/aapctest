"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var Puppy_service_1 = require("../../services/Puppy.service");
var router_1 = require("@angular/router");
var PuppiesComponent = (function () {
    function PuppiesComponent(router, PuppyService) {
        this.router = router;
        this.PuppyService = PuppyService;
    }
    PuppiesComponent.prototype.getPuppies = function () {
        var _this = this;
        this.PuppyService.getPuppies().then(function (Puppies) { return _this.Puppies = Puppies; });
    };
    PuppiesComponent.prototype.ngOnInit = function () {
        this.getPuppies();
    };
    PuppiesComponent.prototype.onSelect = function (Puppy) { this.selectedPuppy = Puppy; };
    PuppiesComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedPuppy._id]);
    };
    PuppiesComponent.prototype.addPuppy = function () {
        this.selectedPuppy = null;
        this.router.navigate(['/detail', 'new']);
    };
    PuppiesComponent.prototype.deletePuppy = function (Puppy, event) {
        var _this = this;
        event.stopPropagation();
        this.PuppyService
            .delete(Puppy)
            .then(function (res) {
            _this.Puppies = _this.Puppies.filter(function (h) { return h !== Puppy; });
            if (_this.selectedPuppy === Puppy) {
                _this.selectedPuppy = null;
            }
        })
            .catch(function (error) { return _this.error = error; });
    };
    return PuppiesComponent;
}());
PuppiesComponent = __decorate([
    core_1.Component({
        selector: 'my-Puppies',
        templateUrl: './app/components/Puppies/Puppies.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        Puppy_service_1.PuppyService])
], PuppiesComponent);
exports.PuppiesComponent = PuppiesComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jbGllbnQvYXBwL2NvbXBvbmVudHMvUHVwcGllcy9hcHAvY29tcG9uZW50cy9QdXBwaWVzL1B1cHBpZXMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDQSxzQ0FBZ0Q7QUFDaEQsOERBQTBEO0FBRTFELDBDQUF5QztBQU96QyxJQUFhLGdCQUFnQjtJQU16QiwwQkFDWSxNQUFjLEVBQ2QsWUFBMEI7UUFEMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO0lBQUksQ0FBQztJQUMzQyxxQ0FBVSxHQUFWO1FBQUEsaUJBRUM7UUFERyxJQUFJLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUNELG1DQUFRLEdBQVIsVUFBUyxLQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBRXRELHFDQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELG1DQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztRQUMxQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCxzQ0FBVyxHQUFYLFVBQVksS0FBWSxFQUFFLEtBQVU7UUFBcEMsaUJBU0M7UUFSRyxLQUFLLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDeEIsSUFBSSxDQUFDLFlBQVk7YUFDWixNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ2IsSUFBSSxDQUFDLFVBQUEsR0FBRztZQUNMLEtBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLEtBQUssS0FBSyxFQUFYLENBQVcsQ0FBQyxDQUFDO1lBQ3JELEVBQUUsQ0FBQyxDQUFDLEtBQUksQ0FBQyxhQUFhLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFBQyxLQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztZQUFDLENBQUM7UUFDcEUsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBQ0wsdUJBQUM7QUFBRCxDQXBDQSxBQW9DQyxJQUFBO0FBcENZLGdCQUFnQjtJQUw1QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLGlEQUFpRDtLQUNqRSxDQUFDO3FDQVNzQixlQUFNO1FBQ0EsNEJBQVk7R0FSN0IsZ0JBQWdCLENBb0M1QjtBQXBDWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvUHVwcGllcy9QdXBwaWVzLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge1B1cHB5U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1B1cHB5LnNlcnZpY2VcIjtcbmltcG9ydCB7UHVwcHl9IGZyb20gXCIuLi8uLi9tb2RlbHMvUHVwcHlcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbXktUHVwcGllcycsXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL1B1cHBpZXMvUHVwcGllcy5jb21wb25lbnQuaHRtbCdcbn0pXG5cbmV4cG9ydCBjbGFzcyBQdXBwaWVzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIFB1cHBpZXM6IFB1cHB5W107XG4gICAgc2VsZWN0ZWRQdXBweTogUHVwcHk7XG4gICAgZXJyb3I6IGFueTtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxuICAgICAgICBwcml2YXRlIFB1cHB5U2VydmljZTogUHVwcHlTZXJ2aWNlKSB7IH1cbiAgICBnZXRQdXBwaWVzKCkge1xuICAgICAgICB0aGlzLlB1cHB5U2VydmljZS5nZXRQdXBwaWVzKCkudGhlbihQdXBwaWVzID0+IHRoaXMuUHVwcGllcyA9IFB1cHBpZXMpO1xuICAgIH1cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5nZXRQdXBwaWVzKCk7XG4gICAgfVxuICAgIG9uU2VsZWN0KFB1cHB5OiBQdXBweSkgeyB0aGlzLnNlbGVjdGVkUHVwcHkgPSBQdXBweTsgfVxuXG4gICAgZ290b0RldGFpbCgpIHtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvZGV0YWlsJywgdGhpcy5zZWxlY3RlZFB1cHB5Ll9pZF0pO1xuICAgIH1cblxuICAgIGFkZFB1cHB5KCkge1xuICAgICAgICB0aGlzLnNlbGVjdGVkUHVwcHkgPSBudWxsO1xuICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9kZXRhaWwnLCAnbmV3J10pO1xuICAgIH1cblxuICAgIGRlbGV0ZVB1cHB5KFB1cHB5OiBQdXBweSwgZXZlbnQ6IGFueSkge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgdGhpcy5QdXBweVNlcnZpY2VcbiAgICAgICAgICAgIC5kZWxldGUoUHVwcHkpXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuUHVwcGllcyA9IHRoaXMuUHVwcGllcy5maWx0ZXIoaCA9PiBoICE9PSBQdXBweSk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRQdXBweSA9PT0gUHVwcHkpIHsgdGhpcy5zZWxlY3RlZFB1cHB5ID0gbnVsbDsgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5jYXRjaChlcnJvciA9PiB0aGlzLmVycm9yID0gZXJyb3IpO1xuICAgIH1cbn1cbiJdfQ==
