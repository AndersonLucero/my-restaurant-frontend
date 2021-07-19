import { element } from 'protractor';
import { OrderDetailsDto } from './../../dto/OrderDetailDto';
import { OrderServiceService } from './../../services/order-service.service';
import { OrderDto } from './../../dto/OrderDto';
import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss'],
})
export class OrderComponent implements OnInit {

  orderDto: OrderDto = new OrderDto();
  orderDetailsDto: OrderDetailsDto = new OrderDetailsDto();

  /**variables booleanas para boton clicked */
  public buttonClicked = false;
  public buttonOrderClicked = false;
  public suma: number;

  constructor(
    private readonly orderService: OrderServiceService
  ) { }

  ngOnInit() {}

  /**
   * funcion de obtener una orden y sus detalles
   */

  getOrderById(){
    if(null===this.orderDto.id || undefined===this.orderDto.id || this.orderDto.id <= 0){
      console.log('id invalido');
    }else{
      this.orderService.getOrder(this.orderDto.id).subscribe((response: OrderDto) => {
        if(response){
          this.orderDto=response;
        }else{
          alert('No existe una orden con ese id');
          console.log('no hay datos con ese id');
        }
      });
    }
  }

  /**
   * funcion de agregar detalle
   */
  setDetailsById(){
    this.suma=0;

    if(null===this.orderDto.id || undefined===this.orderDto.id || this.orderDto.id <= 0){
      console.log('id invalido');
    }else{

        this.orderDetailsDto.total_detail=this.orderDetailsDto.cantidad*this.orderDetailsDto.precio_unitario;
        if(this.orderDto.details===null || this.orderDto.details===undefined){
          this.orderDto.details = [];
          this.orderDto.details.push(this.orderDetailsDto);
        }else{
          this.orderDto.details.push(this.orderDetailsDto);
        }
        this.orderService.setOrderDetail(this.orderDetailsDto, this.orderDto).subscribe((response: OrderDto) => {
        if(response){

          this.orderDto = new OrderDto();
          this.orderDto=response;
        }else{
          alert('no hay detalles con ese id');
        }
      });
    }
  }

/**
 * funcion para agregar nueva orden
 */

  setOrder(){
    this.orderDto.id=null;
    this.orderDto.details=null;
    this.orderDto.total=0;
    this.orderDto.date_order = new Date();
    console.log(this.orderDto.date_order);
    this.orderService.setNewOrder(this.orderDto).subscribe((response: OrderDto) => {
      if(response){
        this.orderDto=new OrderDto();
        this.orderDto=response;
      }else{
        alert('error');
      }
    });

  }

  /*
  * boton clicked
  */
  onDetailsClick(){
    this.buttonClicked = !this.buttonClicked;
  }

  onOrderClick(){
    this.buttonOrderClicked = !this.buttonOrderClicked;
  }


}
