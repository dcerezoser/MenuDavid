import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  private orders: string[]=[];

  constructor(private http: HttpClient) { }

  getOrders(order: string){
    this.orders.push(order);
    console.log(this.orders);
  }

  sendOrders(){
    return this.orders;
  }
}
