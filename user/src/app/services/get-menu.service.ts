import { Injectable } from "@angular/core";
import { Headers, Http } from "@angular/http";
import 'rxjs/add/operator/map';
@Injectable()
export class GetMenuService {

    constructor(private http: Http) { }

    getCats() {
        return this.http.get('http://localhost:3700/admin/get-categories').map(res => res.json());
        // return this.http.get('admin/get-categories').map(res => res.json());
    }

    // Getting roti items
    getRotiItems() {
        return this.http.get('http://localhost:3700/admin/get-roti-items').map(res => res.json());
        // return this.http.get('admin/get-roti-items').map(res => res.json());
    }
    
    getDatesMenu(date,last_date){
        return this.http.get('http://localhost:3700/admin/get-dates-menu/' + date + '/' + last_date).map(res => res.json());
        // return this.http.get('admin/get-dates-menu/' + date + '/' + last_date).map(res => res.json());
    }
    getItemDetails(item_id){
        return this.http.get('http://localhost:3700/admin/get-item-details/' + item_id).map(res => res.json());
        // return this.http.get('admin/get-item-details/' + item_id).map(res => res.json());
    }

}