import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { tokenNotExpired } from 'angular2-jwt';
@Injectable()
export class UserService {
    authToken: any;
    user: any;
    constructor(private http: Http) { }
    getUserFromLocal() {
        const user = localStorage.getItem('user');
        // user = JSON.parse(user);
        return user;
    }
}
