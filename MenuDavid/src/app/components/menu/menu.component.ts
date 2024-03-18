import { Component } from '@angular/core';
import { MenuServiceService } from 'src/app/services/menu-service.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  public menus!: any;

  constructor(private menuService: MenuServiceService){
    this.menuService.getMenu().subscribe(data => {
      this.menus=data;
      console.log(this.menus);
    })

  }
}
