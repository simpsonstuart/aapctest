

import {Component, Input, OnInit} from '@angular/core';
import {Puppy} from "../../models/Puppy";
import { ActivatedRoute, Params } from '@angular/router';
import {PuppyService} from "../../services/Puppy.service";

@Component({
    selector: 'my-Puppy-detail',
    templateUrl: './app/components/PuppyDetail/Puppy-detail.component.html'
})

export class PuppyDetailComponent implements OnInit {
    @Input() Puppy: Puppy;
    newPuppy = false;
    error: any;
    navigated = false; // true if navigated here


    constructor(
        private PuppyService: PuppyService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            let id = params['id'];
            if (id === 'new') {
                this.newPuppy = true;
                this.Puppy = new Puppy();
            } else {
                this.newPuppy = false;
                this.PuppyService.getPuppy(id)
                    .then(Puppy => this.Puppy = Puppy);
            }
        });
    }

    save() {
        this.PuppyService
            .save(this.Puppy)
            .then(Puppy => {
                this.Puppy = Puppy; // saved Puppy, w/ id if new
                this.goBack();
            })
            .catch(error => this.error = error); // TODO: Display error message
    }

    goBack() {
        window.history.back();
    }
}