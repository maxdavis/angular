import {Injectable} from '@angular/core'

import {ShoppingCartService} from '../restaurant-detail/shopping-cart/shopping-cart.service'
import { Cartitem } from '../restaurant-detail/shopping-cart/cart-item.model';

@Injectable()
export class OrderService {

  constructor(private cartService: ShoppingCartService){

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

}