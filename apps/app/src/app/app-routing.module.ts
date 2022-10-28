import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CategoryListComponent} from './components/category-list/category-list.component';
import {CreateProductComponent} from './components/create-product/create-product.component';
import {CategoryListComponentModule} from './components/category-list/category-list.component-module';
import {CategoriesServiceModule} from './services/categories.service-module';
import {CreateProductComponentModule} from './components/create-product/create-product.component-module';
import {ProductsServiceModule} from './services/products.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    {path: 'categories', component: CategoryListComponent}, {
    path: 'add-product',
    component: CreateProductComponent
  }]), CategoryListComponentModule, CategoriesServiceModule, CreateProductComponentModule, ProductsServiceModule],
  providers: [],
  declarations: [],
  exports: []
})
export class AppRoutingModule {
}
