import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';
import { MenuDetailsComponent } from '../menu-details/menu-details.component';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css'],
  providers: [MenuService]
})
export class MenuListComponent implements OnInit {

  menus: Menu[]
  selectedMenu: Menu

  constructor(private menuService: MenuService) { }

  ngOnInit() {
    this.menuService
      .getMenus()
      .then((menus: Menu[]) => {
        this.menus = menus.map((menu) => {
          return menu;
        });
      });
  }

  private getIndexOfMenu = (menuId: String) => {
    return this.menus.findIndex((menu) => {
      return menu._id === menuId;
    });
  }

  selectMenu(menu: Menu) {
    this.selectedMenu = menu
  }

  createNewMenu() {
    var menu: Menu = {
      name: '',
      description: '',
      calories: '',
      category: '',
      price: {
        eu: '',
        uk: ''
      }
    };

    // By default, a newly-created menu will have the selected state.
    this.selectMenu(menu);
  }

  deleteMenu = (menuId: String) => {
    var idx = this.getIndexOfMenu(menuId);
    if (idx !== -1) {
      this.menus.splice(idx, 1);
      this.selectMenu(null);
    }
    return this.menus;
  }

  addMenu = (menu: Menu) => {
    this.menus.push(menu);
    this.selectMenu(menu);
    return this.menus;
  }

  updateMenu = (menu: Menu) => {
    var idx = this.getIndexOfMenu(menu._id);
    if (idx !== -1) {
      this.menus[idx] = menu;
      this.selectMenu(menu);
    }
    return this.menus;
  }

}
