import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Food } from '../shared/models/food';
import { CartItem } from '../shared/models/cartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  /*
  BehaviorSubject es un tipo especial de observable (opens new window) que permite la transmisión múltiple de valores
  a muchos observadores simultáneos y donde siempre se almacena y permanece disponible el valor actual.
  Es por ello que cada vez que un nuevo consumidor se suscribe al dato, siempre recibirá el valor actual
  (esta es la principal diferencia respecto al observable estándar)
  */
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() { }

  addToCart(food:Food):void{
    let cartItem = this.cart.items.find(item => item.food.id === food.id);
    if(cartItem)
      return;

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeFromCart(foodId: string):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId:string, quantity:number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId);

    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.cartSubject.asObservable();
  }

  // para el "local storage"
  private setCartToLocalStorage():void{
    // función recursiva donde se establece (al final) que el inicial valor de "prevSum" será 0 y posteriormente
    // se le suma el precio de cada producto del "currentItem"
    this.cart.totalPrice = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items.reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    this.cartSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    return cartJson? JSON.parse(cartJson) : new Cart();
  }
}
