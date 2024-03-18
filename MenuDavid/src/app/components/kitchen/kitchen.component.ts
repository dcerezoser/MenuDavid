import { Component } from '@angular/core';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-kitchen',
  templateUrl: './kitchen.component.html',
  styleUrls: ['./kitchen.component.css']
})
export class KitchenComponent {
  public orders!: any;

  constructor(private ordersService: OrdersService ){
    this.orders=this.ordersService.sendOrders();
    console.log("Desde la cocina"+this.orders)
  }
}
