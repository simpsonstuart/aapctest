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
var Puppy_1 = require("../../models/Puppy");
var router_1 = require("@angular/router");
var Puppy_service_1 = require("../../services/Puppy.service");
var PuppyDetailComponent = (function () {
    function PuppyDetailComponent(PuppyService, route) {
        this.PuppyService = PuppyService;
        this.route = route;
        this.newPuppy = false;
        this.navigated = false; // true if navigated here
    }
    PuppyDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = params['id'];
            if (id === 'new') {
                _this.newPuppy = true;
                _this.Puppy = new Puppy_1.Puppy();
            }
            else {
                _this.newPuppy = false;
                _this.PuppyService.getPuppy(id)
                    .then(function (Puppy) { return _this.Puppy = Puppy; });
            }
        });
    };
    PuppyDetailComponent.prototype.save = function () {
        var _this = this;
        this.PuppyService
            .save(this.Puppy)
            .then(function (Puppy) {
            _this.Puppy = Puppy; // saved Puppy, w/ id if new
            _this.goBack();
        })
            .catch(function (error) { return _this.error = error; }); // TODO: Display error message
    };
    PuppyDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    return PuppyDetailComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Puppy_1.Puppy)
], PuppyDetailComponent.prototype, "Puppy", void 0);
PuppyDetailComponent = __decorate([
    core_1.Component({
        selector: 'my-Puppy-detail',
        templateUrl: './app/components/PuppyDetail/Puppy-detail.component.html'
    }),
    __metadata("design:paramtypes", [Puppy_service_1.PuppyService,
        router_1.ActivatedRoute])
], PuppyDetailComponent);
exports.PuppyDetailComponent = PuppyDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jbGllbnQvYXBwL2NvbXBvbmVudHMvUHVwcHlEZXRhaWwvYXBwL2NvbXBvbmVudHMvUHVwcHlEZXRhaWwvUHVwcHktZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUEsc0NBQXVEO0FBQ3ZELDRDQUF5QztBQUN6QywwQ0FBeUQ7QUFDekQsOERBQTBEO0FBTzFELElBQWEsb0JBQW9CO0lBTzdCLDhCQUNZLFlBQTBCLEVBQzFCLEtBQXFCO1FBRHJCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBUGpDLGFBQVEsR0FBRyxLQUFLLENBQUM7UUFFakIsY0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDLHlCQUF5QjtJQU01QyxDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUFBLGlCQVlDO1FBWEcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFVBQUMsTUFBYztZQUNyQyxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdEIsRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3JCLEtBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLEVBQUUsQ0FBQztZQUM3QixDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQztxQkFDekIsSUFBSSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztZQUMzQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsbUNBQUksR0FBSjtRQUFBLGlCQVFDO1FBUEcsSUFBSSxDQUFDLFlBQVk7YUFDWixJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQzthQUNoQixJQUFJLENBQUMsVUFBQSxLQUFLO1lBQ1AsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsQ0FBQyw0QkFBNEI7WUFDaEQsS0FBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2xCLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxFQUFsQixDQUFrQixDQUFDLENBQUMsQ0FBQyw4QkFBOEI7SUFDM0UsQ0FBQztJQUVELHFDQUFNLEdBQU47UUFDSSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDTCwyQkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUF0Q1k7SUFBUixZQUFLLEVBQUU7OEJBQVEsYUFBSzttREFBQztBQURiLG9CQUFvQjtJQUxoQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGlCQUFpQjtRQUMzQixXQUFXLEVBQUUsMERBQTBEO0tBQzFFLENBQUM7cUNBVTRCLDRCQUFZO1FBQ25CLHVCQUFjO0dBVHhCLG9CQUFvQixDQXVDaEM7QUF2Q1ksb0RBQW9CIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL1B1cHB5RGV0YWlsL1B1cHB5LWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBPbkluaXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtQdXBweX0gZnJvbSBcIi4uLy4uL21vZGVscy9QdXBweVwiO1xuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQge1B1cHB5U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1B1cHB5LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1QdXBweS1kZXRhaWwnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9QdXBweURldGFpbC9QdXBweS1kZXRhaWwuY29tcG9uZW50Lmh0bWwnXG59KVxuXG5leHBvcnQgY2xhc3MgUHVwcHlEZXRhaWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIEBJbnB1dCgpIFB1cHB5OiBQdXBweTtcbiAgICBuZXdQdXBweSA9IGZhbHNlO1xuICAgIGVycm9yOiBhbnk7XG4gICAgbmF2aWdhdGVkID0gZmFsc2U7IC8vIHRydWUgaWYgbmF2aWdhdGVkIGhlcmVcblxuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgUHVwcHlTZXJ2aWNlOiBQdXBweVNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlKSB7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMucm91dGUucGFyYW1zLmZvckVhY2goKHBhcmFtczogUGFyYW1zKSA9PiB7XG4gICAgICAgICAgICBsZXQgaWQgPSBwYXJhbXNbJ2lkJ107XG4gICAgICAgICAgICBpZiAoaWQgPT09ICduZXcnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5uZXdQdXBweSA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5QdXBweSA9IG5ldyBQdXBweSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLm5ld1B1cHB5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5QdXBweVNlcnZpY2UuZ2V0UHVwcHkoaWQpXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKFB1cHB5ID0+IHRoaXMuUHVwcHkgPSBQdXBweSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHNhdmUoKSB7XG4gICAgICAgIHRoaXMuUHVwcHlTZXJ2aWNlXG4gICAgICAgICAgICAuc2F2ZSh0aGlzLlB1cHB5KVxuICAgICAgICAgICAgLnRoZW4oUHVwcHkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuUHVwcHkgPSBQdXBweTsgLy8gc2F2ZWQgUHVwcHksIHcvIGlkIGlmIG5ld1xuICAgICAgICAgICAgICAgIHRoaXMuZ29CYWNrKCk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuZXJyb3IgPSBlcnJvcik7IC8vIFRPRE86IERpc3BsYXkgZXJyb3IgbWVzc2FnZVxuICAgIH1cblxuICAgIGdvQmFjaygpIHtcbiAgICAgICAgd2luZG93Lmhpc3RvcnkuYmFjaygpO1xuICAgIH1cbn0iXX0=
