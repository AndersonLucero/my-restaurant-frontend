import { OrderServiceService } from './services/order-service.service';
import { OrderComponent } from './components/order/order.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [AppComponent, OrderComponent],
  entryComponents: [],
  // eslint-disable-next-line max-len
  imports: [ BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, ReactiveFormsModule, BrowserModule,TableModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, OrderServiceService],
  bootstrap: [AppComponent],
})
export class AppModule { }
