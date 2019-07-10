import { Component, OnInit } from '@angular/core'
import { RadioOption } from '../shared/radio/radio.optio.model'
import { OrderService } from './order.service'
import { Cartitem } from '../restaurant-detail/shopping-cart/cart-item.model';


@Component({
  selector: 'mt-order',
  templateUrl: './order.component.html'
})
export class OrderComponent implements OnInit {

  delivery: number = 8

  paymentOptions: RadioOption[] = [
    {label: 'Dinheiro', value: 'MON'},
    {label: 'Cartão de Débito', value:'DEB'},
    {label: 'Cartão de Refeição', value: 'REF'}
  ]

  constructor(private orderService: OrderService) { }

  ngOnInit() {
  }

  itemsValue(): number {
    return this.orderService.itemsValue()
  }

  cartItems():Cartitem[]{
    return this.orderService.cartItems()
  }

  increaseQty(item: Cartitem){
    this.orderService.increaseQty(item)
  }

  decreaseQty(item: Cartitem){
      this.orderService.decreaseQty(item)
  }

  remove(item: Cartitem){
    this.orderService.remove(item)
  }

}
