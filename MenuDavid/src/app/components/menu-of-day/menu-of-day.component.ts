import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MenuServiceService } from 'src/app/services/menu-service.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-menu-of-day',
  templateUrl: './menu-of-day.component.html',
  styleUrls: ['./menu-of-day.component.css']
})
export class MenuOfDayComponent {

  public menus!: any;
  public day!: string;



  constructor(private menuService: MenuServiceService,
    private activatedRoute: ActivatedRoute,
    private router: Router, private ordersService: OrdersService){
    this.activatedRoute.paramMap.subscribe((param: ParamMap)=>{
        this.day=param.get('day')!;
      })
    this.menuService.getMenu().subscribe(data =>{
      this.menus=data;
    })
  }

  ordered(plate: string){
    this.ordersService.getOrders(plate);
    console.log(plate);
  }

}
