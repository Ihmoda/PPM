import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-creation',
  templateUrl: './product-creation.component.html',
  styleUrls: ['./product-creation.component.css']
})

export class ProductCreationComponent implements OnInit {
  product: Product = new Product;
  constructor(private _dataService: DataService, private _router: Router) { }

  ngOnInit() {
  }

  createProduct(){
    console.log(this.product.name);
    this._dataService.createProduct(this.product);
    console.log(this.product);
    this.product = new Product;
    this._router.navigateByUrl("products")
  }

}
