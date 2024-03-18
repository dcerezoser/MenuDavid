import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {
  private urlJson: string='../../assets/menu.json';
  private urlSpring: string = 'http://127.0.0.1:8081/api/menus';
  constructor(private http: HttpClient ) { }

  getMenu(){
    return this.http.get<any[]>(this.urlJson);
  }

  setMenu(menu: object){

  }

  /*
  putMenu(menu:any){
    let jsonData = JSON.stringify(menu);
    return this.http.put("http://127.0.0.1:8000/juego/modificaJuego", jsonData)
    .subscribe(
      response => {
        console.log("Menú modificado correctamente:", response);
       
      },
      error => {
        console.error("Error al modificar el menú:", error);
      }
    );
  }

 */
}
