
import {Component, OnInit} from '@angular/core';
import {PuppyService} from "../../services/Puppy.service";
import {Puppy} from "../../models/Puppy";
import { Router } from '@angular/router';

@Component({
    selector: 'my-Puppies',
    templateUrl: './app/components/Puppies/Puppies.component.html'
})

export class PuppiesComponent implements OnInit {

    Puppies: Puppy[];
    selectedPuppy: Puppy;
    error: any;

    constructor(
        private router: Router,
        private PuppyService: PuppyService) { }
    getPuppies() {
        this.PuppyService.getPuppies().then(Puppies => this.Puppies = Puppies);
    }
    ngOnInit() {
        this.getPuppies();
    }
    onSelect(Puppy: Puppy) { this.selectedPuppy = Puppy; }

    gotoDetail() {
        this.router.navigate(['/detail', this.selectedPuppy._id]);
    }

    addPuppy() {
        this.selectedPuppy = null;
        this.router.navigate(['/detail', 'new']);
    }

    deletePuppy(Puppy: Puppy, event: any) {
        event.stopPropagation();
        this.PuppyService
            .delete(Puppy)
            .then(res => {
                this.Puppies = this.Puppies.filter(h => h !== Puppy);
                if (this.selectedPuppy === Puppy) { this.selectedPuppy = null; }
            })
            .catch(error => this.error = error);
    }
}
