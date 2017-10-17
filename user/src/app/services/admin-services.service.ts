import { Injectable } from "@angular/core";
import { Http, Headers, HttpModule } from "@angular/http";
import 'rxjs/add/operator/map';
// http://localhost:3700/

@Injectable()
export class AdminServicesService {

    constructor(private http: Http) { }

    // Add Category Page

    // Adding a category
    addCategory(newData: any) {
        var headers = new Headers();

        headers.append('Content-type', 'application/json');

        // return this.http.post('http://localhost:3700/admin/add-category', newData, { headers: headers }).map(res => res.json());
        return this.http.post('admin/add-category', newData, { headers: headers }).map(res => res.json());

    }

    // Delete cateogry
    deleteCategory(id: string) {
        // return this.http.delete('http://localhost:3700/admin/delete-category/' + id).map(res => res.json());
        return this.http.delete('admin/delete-category/' + id).map(res => res.json());
    }

    // Get Categories
    getCategories() {
        // return this.http.get('http://localhost:3700/admin/get-categories').map(res => res.json());
        return this.http.get('admin/get-categories').map(res => res.json());
    }
    
    // Get Orders
    getOrders() {
        // return this.http.get('http://localhost:3700/admin/get-orders').map(res => res.json());
        return this.http.get('admin/get-orders').map(res => res.json());
    }



    // Add Items Page
    // Add Item
    addItem(cat_id, sub_name, item_name, item_price, item_img) {
        var headers = new Headers();

        headers.append('Content-type', 'application/json');

        var Data = {
            'cat_id': cat_id,
            'sub_name': sub_name,
            'item_name': item_name,
            'item_price': item_price,
            'item_img': item_img
        }

        // return this.http.post('http://localhost:3700/admin/add-item', Data, { headers: headers }).map(res => res.json());
        return this.http.post('admin/add-item', Data, { headers: headers }).map(res => res.json());
    }
    // Get all items
    getItems(cat_id: string, sub_name: string) {
        // return this.http.get('http://localhost:3700/admin/get-items/' + cat_id + '/' + sub_name).map(res => res.json());
        return this.http.get('admin/get-items/' + cat_id + '/' + sub_name).map(res => res.json());
    }

    // Delete Items
    deleteItem(item_id: string) {
        // return this.http.delete('http://localhost:3700/admin/delete-item/' + item_id).map(res => res.json());
        return this.http.delete('admin/delete-item/' + item_id).map(res => res.json());
    }


    // Add Sub Categories Page
    // Add subcategory
    addSub(subData: any) {
        var headers = new Headers();

        headers.append('Content-type', 'application/json');

        // return this.http.post('http://localhost:3700/admin/add-sub-category', subData, { headers: headers }).map(res => res.json());
        return this.http.post('admin/add-sub-category', subData, { headers: headers }).map(res => res.json());
    }

    // Get subs in a category
    getSubs(catId: any) {
        // return this.http.get('http://localhost:3700/admin/get-subs/' + catId).map(res => res.json());
        return this.http.get('admin/get-subs/' + catId).map(res => res.json());
    }

    // Delet Sub from category
    deleteSubFromCategory(subName: string, cat_id: string) {
        // return this.http.delete('http://localhost:3700/admin/delete-sub-category/' + subName + '/' + cat_id).map(res => res.json());
        return this.http.delete('admin/delete-sub-category/' + subName + '/' + cat_id).map(res => res.json());
    }

    // Add Menu Page
    // Getting items by sub category
    getDateItems(cat_id: string, sub_name: string, date: string) {
        // return this.http.get('http://localhost:3700/admin/get-date-items/' + cat_id + '/' + sub_name + '/' + date).map(res => res.json());
        return this.http.get('admin/get-date-items/' + cat_id + '/' + sub_name + '/' + date).map(res => res.json());
    }
    // post schedule
    postSchedule(schArray: any, remArray: any) {
        var headers = new Headers();
        headers.append('Content-type', 'application/json');
        let schJSON = JSON.stringify(schArray);

        let schData = { schArray, remArray };

        // return this.http.post('http://localhost:3700/admin/post-dates', schData, { headers: headers }).map(res => res.json());
        return this.http.post('admin/post-dates', schData, { headers: headers }).map(res => res.json());
    }
    getDates() {
        // return this.http.get('http://localhost:3700/admin/get-all-dates').map(res => res.json());
        return this.http.get('admin/get-all-dates').map(res => res.json());
    }

    deleteDate(date_id) {
        // return this.http.delete('http://localhost:3700/admin/delete-date/' + date_id).map(res => res.json());
        return this.http.delete('admin/delete-date/' + date_id).map(res => res.json());
    }

    // View Orders Page
    // Reward Page
    // Get all users
    getUsers() {
        // return this.http.get('http://localhost:3700/admin/get-users').map(res => res.json());
        return this.http.get('admin/get-users').map(res => res.json());
    }

    // Get User from userId
    getUserFromId(user_id){
        // return this.http.get('http://localhost:3700/admin/get-user-from-id/'+user_id).map(res => res.json());
        return this.http.get('admin/get-user-from-id/'+user_id).map(res => res.json());
    }
    
    getUserOrders(user_id) {
        // return this.http.get('http://localhost:3700/users/get-user-orders/' + user_id).map(res => res.json());
        return this.http.get('users/get-user-orders/' + user_id).map(res => res.json());
    }
    
    postRewards(email,points){
        // return this.http.get('http://localhost:3700/admin/post-rewards/' + email + '/' + points ).map(res => res.json());
        return this.http.get('admin/post-rewards/' + email + '/' + points ).map(res => res.json());
    }


}