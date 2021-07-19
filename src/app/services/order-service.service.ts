import { OrderDetailsDto } from './../dto/OrderDetailDto';
import { OrderDto } from './../dto/OrderDto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:8080/orders';


@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor(private readonly http: HttpClient ) { }

  /**obtener orden con get*/
  getOrder(id: number) {
    return this.http.get(baseUrl + '/' + id);
  }

  /**agregar detalles a orden con post*/
  setOrderDetail(details: OrderDetailsDto, order: OrderDto){
    console.log(JSON.stringify(order));
    return this.http.post(baseUrl + '/' + 'addDetails',JSON.parse(JSON.stringify(order)));
  }

  /**crear nueva orden */
  setNewOrder(order: OrderDto){
    return this.http.post(baseUrl + '/' + 'addDetails', JSON.parse(JSON.stringify(order)));
  }

}


