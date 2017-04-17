import { Injectable } from '@angular/core';
import { Menu } from './menu';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {
    private menusUrl = '/api/menu';

    constructor (private http: Http) {}

    // get("/api/menus")
    getMenus(): Promise<Menu[]> {
      return this.http.get(this.menusUrl)
                 .toPromise()
                 .then(response => response.json() as Menu[])
                 .catch(this.handleError);
    }

    // post("/api/Menus")
    createMenu(newMenu: Menu): Promise<Menu> {
      return this.http.post(this.menusUrl, newMenu)
                 .toPromise()
                 .then(response => response.json() as Menu)
                 .catch(this.handleError);
    }

    // get("/api/Menus/:id") endpoint not used by Angular app

    // delete("/api/Menus/:id")
    deleteMenu(delMenuId: String): Promise<String> {
      return this.http.delete(this.menusUrl + '/' + delMenuId)
                 .toPromise()
                 .then(response => response.json() as String)
                 .catch(this.handleError);
    }

    // put("/api/Menus/:id")
    updateMenu(putMenu: Menu): Promise<Menu> {
      var putUrl = this.menusUrl + '/' + putMenu._id;
      return this.http.put(putUrl, putMenu)
                 .toPromise()
                 .then(response => response.json() as Menu)
                 .catch(this.handleError);
    }

    private handleError (error: any) {
      let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
      console.error(errMsg); // log to console instead
    }
}