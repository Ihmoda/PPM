import { Injectable } from '@angular/core';
import { Product } from './product'

@Injectable()
export class DataService {
  products: Product[] = [
    {
      name: "2017 Macbook Pro",
      price: 1500,
      url: "https://cdn2.macworld.co.uk/cmsdata/reviews/3659985/mbp_2017_31_screen.jpg",
    },
    {
      name: "Razer Phone",
      price: 700,
      url: "https://i.guim.co.uk/img/media/b4238ba5e3f60f414d5958a89b2142f9ac094218/0_0_4048_2429/master/4048.jpg?w=300&q=55&auto=format&usm=12&fit=max&s=db1a4190ec6c88f51804550685b6754e",
    }
  ];
  constructor() { }

  retrieveProducts(): Product[] {
    return this.products;
  }

  getProductbyId(idx: number) {
    return this.products[idx];
  }

  createProduct(product: Product) {
    this.products.push(product);
  }

  removeProduct(idx: number) {
    this.products.splice(idx,1);
  }

  editProduct(idx: number, product: Product) {
    this.products[idx] = product;
  }

}
