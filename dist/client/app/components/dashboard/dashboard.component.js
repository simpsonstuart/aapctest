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
var router_1 = require("@angular/router");
var Puppy_service_1 = require("../../services/Puppy.service");
var DashboardComponent = (function () {
    function DashboardComponent(router, PuppyService) {
        this.router = router;
        this.PuppyService = PuppyService;
        this.Puppies = [];
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.PuppyService.getPuppies()
            .then(function (Puppies) { return _this.Puppies = Puppies; });
    };
    DashboardComponent.prototype.gotoDetail = function (Puppy) {
        var link = ['/detail', Puppy._id];
        this.router.navigate(link);
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    core_1.Component({
        selector: 'my-dashboard',
        templateUrl: './app/components/dashboard/dashboard.component.html',
        styleUrls: ['./app/components/dashboard/dashboard.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        Puppy_service_1.PuppyService])
], DashboardComponent);
exports.DashboardComponent = DashboardComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jbGllbnQvYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2FwcC9jb21wb25lbnRzL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFFQSxzQ0FBZ0Q7QUFDaEQsMENBQXlDO0FBR3pDLDhEQUEwRDtBQVExRCxJQUFhLGtCQUFrQjtJQUczQiw0QkFDWSxNQUFjLEVBQ2QsWUFBMEI7UUFEMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBSnRDLFlBQU8sR0FBWSxFQUFFLENBQUM7SUFLdEIsQ0FBQztJQUVELHFDQUFRLEdBQVI7UUFBQSxpQkFHQztRQUZHLElBQUksQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFO2FBQ3pCLElBQUksQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLEtBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxFQUF0QixDQUFzQixDQUFDLENBQUM7SUFDakQsQ0FBQztJQUVELHVDQUFVLEdBQVYsVUFBVyxLQUFZO1FBQ25CLElBQUksSUFBSSxHQUFHLENBQUMsU0FBUyxFQUFFLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBQ0wseUJBQUM7QUFBRCxDQWpCQSxBQWlCQyxJQUFBO0FBakJZLGtCQUFrQjtJQU45QixnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLGNBQWM7UUFDeEIsV0FBVyxFQUFFLHFEQUFxRDtRQUNsRSxTQUFTLEVBQUUsQ0FBQyxvREFBb0QsQ0FBQztLQUNwRSxDQUFDO3FDQU1zQixlQUFNO1FBQ0EsNEJBQVk7R0FMN0Isa0JBQWtCLENBaUI5QjtBQWpCWSxnREFBa0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcblxuaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQge1B1cHB5fSBmcm9tIFwiLi4vLi4vbW9kZWxzL1B1cHB5XCI7XG5pbXBvcnQge1B1cHB5U2VydmljZX0gZnJvbSBcIi4uLy4uL3NlcnZpY2VzL1B1cHB5LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdteS1kYXNoYm9hcmQnLFxuICAgIHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnLi9hcHAvY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5jc3MnXVxufSlcblxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgUHVwcGllczogUHVwcHlbXSA9IFtdO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXG4gICAgICAgIHByaXZhdGUgUHVwcHlTZXJ2aWNlOiBQdXBweVNlcnZpY2UpIHtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5QdXBweVNlcnZpY2UuZ2V0UHVwcGllcygpXG4gICAgICAgICAgICAudGhlbihQdXBwaWVzID0+IHRoaXMuUHVwcGllcyA9IFB1cHBpZXMpO1xuICAgIH1cblxuICAgIGdvdG9EZXRhaWwoUHVwcHk6IFB1cHB5KSB7XG4gICAgICAgIGxldCBsaW5rID0gWycvZGV0YWlsJywgUHVwcHkuX2lkXTtcbiAgICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUobGluayk7XG4gICAgfVxufSJdfQ==
