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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var app_routing_1 = require("./app.routing");
var Puppies_component_1 = require("./components/Puppies/Puppies.component");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var Puppy_detail_component_1 = require("./components/PuppyDetail/Puppy-detail.component");
var Puppy_service_1 = require("./services/Puppy.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            http_1.HttpModule,
            forms_1.FormsModule,
            app_routing_1.routing
        ],
        declarations: [
            app_component_1.AppComponent,
            Puppies_component_1.PuppiesComponent,
            dashboard_component_1.DashboardComponent,
            Puppy_detail_component_1.PuppyDetailComponent
        ],
        providers: [
            Puppy_service_1.PuppyService
        ],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jbGllbnQvYXBwL2FwcC9hcHAubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxzQ0FBOEM7QUFDOUMsOERBQTBEO0FBQzFELHdDQUFnRDtBQUNoRCxzQ0FBK0M7QUFFL0MsaURBQWdEO0FBQ2hELDZDQUE4QztBQUU5Qyw0RUFBK0U7QUFDL0Usa0ZBQWtGO0FBQ2xGLDBGQUF3RjtBQUV4RiwwREFBeUQ7QUFvQnpELElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUF6QixBQUEwQixJQUFBO0FBQWIsU0FBUztJQWxCckIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1AsZ0NBQWE7WUFDYixpQkFBVTtZQUNWLG1CQUFXO1lBQ1gscUJBQU87U0FDTjtRQUNILFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osb0NBQWdCO1lBQ2hCLHdDQUFrQjtZQUNsQiw2Q0FBb0I7U0FDckI7UUFDRCxTQUFTLEVBQUU7WUFDVCw0QkFBWTtTQUNiO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDOztHQUNXLFNBQVMsQ0FBSTtBQUFiLDhCQUFTIiwiZmlsZSI6ImFwcC9hcHAubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSAgICAgIGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSAgICBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBIdHRwTW9kdWxlIH0gICAgIGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xuXG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSAgZnJvbSAnLi9hcHAuY29tcG9uZW50JztcbmltcG9ydCB7IHJvdXRpbmcgfSAgICAgICBmcm9tICcuL2FwcC5yb3V0aW5nJztcblxuaW1wb3J0IHsgUHVwcGllc0NvbXBvbmVudCB9ICAgICAgZnJvbSAnLi9jb21wb25lbnRzL1B1cHBpZXMvUHVwcGllcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHVwcHlEZXRhaWxDb21wb25lbnQgfSAgZnJvbSAnLi9jb21wb25lbnRzL1B1cHB5RGV0YWlsL1B1cHB5LWRldGFpbC5jb21wb25lbnQnO1xuXG5pbXBvcnQgeyBQdXBweVNlcnZpY2UgfSAgZnJvbSAnLi9zZXJ2aWNlcy9QdXBweS5zZXJ2aWNlJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIEJyb3dzZXJNb2R1bGUsXG4gICAgSHR0cE1vZHVsZSxcbiAgICBGb3Jtc01vZHVsZSxcbiAgICByb3V0aW5nXG4gICAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgQXBwQ29tcG9uZW50LFxuICAgIFB1cHBpZXNDb21wb25lbnQsXG4gICAgRGFzaGJvYXJkQ29tcG9uZW50LFxuICAgIFB1cHB5RGV0YWlsQ29tcG9uZW50XG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFB1cHB5U2VydmljZVxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==
