import {Injectable} from '@angular/core'

import {Http, Headers, RequestOptions} from '@angular/http'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { Cartitem } from '../restaurant-detail/shopping-cart/cart-item.model';
import { Order, OrderItem} from '../order/order.model'

import {MEAT_API} from '../app.api'

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService, private http: Http){

  }  

  itemsValue(): number {
    return this.cartService.total()
  }

  cartItems(): Cartitem[]{
      return this.cartService.items
  }

  increaseQty(item: Cartitem){
      this.cartService.increaseQty(item)
  }

  decreaseQty(item: Cartitem){
      this.cartService.decreaseQty(item)
  }

  remove(item: Cartitem){
      this.cartService.removeItem(item)
  }

  clear(){
      this.cartService.clear()
  }

  checkOrder(order: Order) : Observable<string>{
      const headers = new Headers()
      headers.append('Content-Type', 'application/json')
      return this.http.post(`${MEAT_API}/orders`, 
                              JSON.stringify(order), 
                              new RequestOptions({headers: headers}))
                              .map(response=> response.json())
                              .map(order =>order.id)
  }

}