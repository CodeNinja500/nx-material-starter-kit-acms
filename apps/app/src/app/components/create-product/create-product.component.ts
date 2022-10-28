import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-create-product',
  styleUrls: ['./create-product.component.scss'],
  templateUrl: './create-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateProductComponent {
  readonly newProductForm: FormGroup = new FormGroup({
    title: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
    image: new FormControl(),
    category: new FormControl()
  });

  constructor(private _productsService: ProductsService) {
  }

  onNewProductFormSubmitted(newProductForm: FormGroup): void {
    this._productsService.addNew({
      price: newProductForm.get('price')?.value,
      image: newProductForm.get('image')?.value,
      description: newProductForm.get('description')?.value,
      title: newProductForm.get('title')?.value,
      category: newProductForm.get('category')?.value
    }).subscribe();

  }
}
