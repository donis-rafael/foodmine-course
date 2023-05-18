import { Food } from "./food";

export class CartItem{
  // al poner "public" en el constructor, no se necesita inicializar la variable
  // food!:Food ya que lo toma directamente desde el constructor
  constructor(public food:Food){}
  quantity:number = 1;
  price:number = this.food.price;
}
