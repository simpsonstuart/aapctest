"use strict";
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./components/dashboard/dashboard.component");
var Puppies_component_1 = require("./components/Puppies/Puppies.component");
var Puppy_detail_component_1 = require("./components/PuppyDetail/Puppy-detail.component");
var appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'detail/:id',
        component: Puppy_detail_component_1.PuppyDetailComponent
    },
    {
        path: 'Puppies',
        component: Puppies_component_1.PuppiesComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes, { useHash: true });

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9jbGllbnQvYXBwL2FwcC9hcHAucm91dGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsMENBQXVEO0FBRXZELGtGQUFrRjtBQUNsRiw0RUFBK0U7QUFDL0UsMEZBQXdGO0FBRXhGLElBQU0sU0FBUyxHQUFXO0lBQ3hCO1FBQ0UsSUFBSSxFQUFFLEVBQUU7UUFDUixVQUFVLEVBQUUsWUFBWTtRQUN4QixTQUFTLEVBQUUsTUFBTTtLQUNsQjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFdBQVc7UUFDakIsU0FBUyxFQUFFLHdDQUFrQjtLQUM5QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFlBQVk7UUFDbEIsU0FBUyxFQUFFLDZDQUFvQjtLQUNoQztJQUNEO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsb0NBQWdCO0tBQzVCO0NBQ0YsQ0FBQztBQUVXLFFBQUEsT0FBTyxHQUFHLHFCQUFZLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDIiwiZmlsZSI6ImFwcC9hcHAucm91dGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvdXRlcywgUm91dGVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgRGFzaGJvYXJkQ29tcG9uZW50IH0gICBmcm9tICcuL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHVwcGllc0NvbXBvbmVudCB9ICAgICAgZnJvbSAnLi9jb21wb25lbnRzL1B1cHBpZXMvUHVwcGllcy5jb21wb25lbnQnO1xuaW1wb3J0IHsgUHVwcHlEZXRhaWxDb21wb25lbnQgfSAgZnJvbSAnLi9jb21wb25lbnRzL1B1cHB5RGV0YWlsL1B1cHB5LWRldGFpbC5jb21wb25lbnQnO1xuXG5jb25zdCBhcHBSb3V0ZXM6IFJvdXRlcyA9IFtcbiAge1xuICAgIHBhdGg6ICcnLFxuICAgIHJlZGlyZWN0VG86ICcvZGFzaGJvYXJkJyxcbiAgICBwYXRoTWF0Y2g6ICdmdWxsJ1xuICB9LFxuICB7XG4gICAgcGF0aDogJ2Rhc2hib2FyZCcsXG4gICAgY29tcG9uZW50OiBEYXNoYm9hcmRDb21wb25lbnRcbiAgfSxcbiAge1xuICAgIHBhdGg6ICdkZXRhaWwvOmlkJyxcbiAgICBjb21wb25lbnQ6IFB1cHB5RGV0YWlsQ29tcG9uZW50XG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnUHVwcGllcycsXG4gICAgY29tcG9uZW50OiBQdXBwaWVzQ29tcG9uZW50XG4gIH1cbl07XG5cbmV4cG9ydCBjb25zdCByb3V0aW5nID0gUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzLCB7IHVzZUhhc2g6IHRydWUgfSk7XG4iXX0=
