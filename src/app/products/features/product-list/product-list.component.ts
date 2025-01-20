import { Component, inject } from '@angular/core';
import { ProductsService } from '../../data-access/products.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styles: ``,
  providers: [ProductsService],
})
export default class ProductListComponent {
  private productsService = inject(ProductsService);
  constructor() {
    this.productsService.getProducts().subscribe((products) => {
      console.log(products);
    });
}
}
