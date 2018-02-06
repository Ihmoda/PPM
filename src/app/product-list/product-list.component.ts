import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product_list: any[];
  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this.product_list = this._dataService.retrieveProducts();
    console.log(this.product_list);
  }

}
