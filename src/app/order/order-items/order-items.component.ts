import { Cartitem } from './../../restaurant-detail/shopping-cart/cart-item.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mt-order-items',
  templateUrl: './order-items.component.html'
})
export class OrderItemsComponent implements OnInit {

@Input() items: Cartitem[]

@Output() increaseQty = new EventEmitter<Cartitem>()
@Output() decreaseQty = new EventEmitter<Cartitem>()
@Output() remove = new EventEmitter<Cartitem>()

  constructor() { }

  ngOnInit() {
  }

  emitIncreaseQty(item: Cartitem){
    this.increaseQty.emit(item)
  }

  emitDecreaseQty(item: Cartitem){
    this.decreaseQty.emit(item)
  }

  emitRemove(item: Cartitem){
    this.remove.emit(item)
  }

}
