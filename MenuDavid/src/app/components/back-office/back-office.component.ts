import { Component } from '@angular/core';
import { MenuServiceService } from 'src/app/services/menu-service.service';

@Component({
  selector: 'app-back-office',
  templateUrl: './back-office.component.html',
  styleUrls: ['./back-office.component.css']
})
export class BackOfficeComponent {
  public menus!: any;
  public menuDay!: any;
  public daySelected:string='';

  constructor(private menuService: MenuServiceService){
    this.menuService.getMenu().subscribe(data =>{
      this.menus=data;
      //console.log(this.menu)
    })
  }

  

  getMenuDay():any{
   this.menuDay=this.menus.find((menu:any) => menu.day==this.daySelected);
   console.log(this.menuDay) 
   console.log('dia'+ this.daySelected)
   //console.log(this.daySele)
  }

  modifyMenu(){
    this.menus.find((menu:any) => menu.day==this.daySelected)
    console.log("hola "+ this.menuDay)

    for (let index = 0; index < this.menus.length; index++){
      if (this.menus.day == this.daySelected) {
        this.menus[index].starter = this.menuDay.starter;
        this.menus[index].main_course = this.menuDay.main_course;
        this.menus[index].dessert=this.menuDay.dessert
        return;
      }
    }
  console.log('Tras el cambio')
  console.log(this.menus)
}

  
}
