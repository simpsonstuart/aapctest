

import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

import {Puppy} from "../../models/Puppy";
import {PuppyService} from "../../services/Puppy.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/dashboard/dashboard.component.html',
    styleUrls: ['./app/components/dashboard/dashboard.component.css']
})

export class DashboardComponent implements OnInit {
    Puppies: Puppy[] = [];

    constructor(
        private router: Router,
        private PuppyService: PuppyService) {
    }

    ngOnInit() {
        this.PuppyService.getPuppies()
            .then(Puppies => this.Puppies = Puppies);
    }

    gotoDetail(Puppy: Puppy) {
        let link = ['/detail', Puppy._id];
        this.router.navigate(link);
    }
}