

import {Injectable} from '@angular/core';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Puppy} from "../models/Puppy";

@Injectable()
export class PuppyService {

    private PuppiesUrl = 'api/Puppies';  // URL to web api

    constructor(private http: Http) { }

    getPuppies(): Promise<Puppy[]> {
        return this.http.get(this.PuppiesUrl)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    getPuppy(id: string) {
        return this.http.get(this.PuppiesUrl + '/' + id)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    save(Puppy: Puppy): Promise<Puppy>  {
        if (Puppy._id) {
            return this.put(Puppy);
        }
        return this.post(Puppy);
    }

    private post(Puppy: Puppy): Promise<Puppy> {
        let headers = new Headers({
            'Content-Type': 'application/json'});

        return this.http
            .post(this.PuppiesUrl, JSON.stringify(Puppy), {headers:headers})
            .toPromise()
            .then(response => response.json().data)
            .catch(this.handleError);
    }

    private put(Puppy: Puppy) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.PuppiesUrl}/${Puppy._id}`;

        return this.http
            .put(url, JSON.stringify(Puppy), {headers: headers})
            .toPromise()
            .then(() => Puppy)
            .catch(this.handleError);
    }

    delete(Puppy: Puppy) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.PuppiesUrl}/${Puppy._id}`;

        return this.http
            .delete(url, headers)
            .toPromise()
            .catch(this.handleError);
    }

    private handleError(error: any) {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}