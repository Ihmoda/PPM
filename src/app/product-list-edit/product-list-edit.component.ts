import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list-edit',
  templateUrl: './product-list-edit.component.html',
  styleUrls: ['./product-list-edit.component.css']
})
export class ProductListEditComponent implements OnInit {
  product_id: number;
  product: Product = new Product;
  constructor(private _route: ActivatedRoute, private _dataService: DataService, private _router: Router) {
    this._route.paramMap.subscribe( params => {
      this.product_id = Number(params.get('id'));
      this.product = this._dataService.getProductbyId(this.product_id);
      
 })
}

  ngOnInit() {
    
  }


  editProduct(){
    this._dataService.editProduct(this.product_id, this.product);
    this.product_id = null;
    this.product = new Product
    this._router.navigateByUrl("products")
  }

}
