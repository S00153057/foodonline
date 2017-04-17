import { Component, Input } from '@angular/core';
import { Menu } from '../menu';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent{
  @Input()
  menu: Menu;

  @Input()
  createHandler: Function;
  @Input()
  updateHandler: Function;
  @Input()
  deleteHandler: Function;

  constructor (private menuService: MenuService) {}

  createMenu(menu: Menu) {
    this.menuService.createMenu(menu).then((newMenu: Menu) => {
      this.createHandler(newMenu);
    });
  }

  updateMenu(menu: Menu): void {
    this.menuService.updateMenu(menu).then((updatedMenu: Menu) => {
      this.updateHandler(updatedMenu);
    });
  }

  deleteMenu(menuId: String): void {
    this.menuService.deleteMenu(menuId).then((deletedMenuId: String) => {
      this.deleteHandler(deletedMenuId);
    });
  }

}
