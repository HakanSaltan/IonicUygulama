import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductService} from '../../providers/product.service';
import { Product } from '../../entities/product';
import { ProductDetailPage } from '../product-detail/product-detail';
import {Category} from "../../entities/category";
import {CategoryService} from "../../providers/category.service";

@IonicPage()
@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
    providers:[ProductService,CategoryService]
})
export class ProductPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService:ProductService, public categoryService:CategoryService) {
  }
    products:Product[];
    categories:Category[];
    selectedCategory:string;
    filterText:string="";

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductPage');
    this.getProducts();
      this.getCategories();
  }
    getProducts(){

        this.productService.getProducts().subscribe(p=>{
            this.products = p
        })
    }
    getCategories(){
        this.categoryService.getCategories().subscribe(data=>this.categories=data);
    }

    itemTapped(event,product){
        this.navCtrl.push(ProductDetailPage,{item:product})
    }
    getItems(){

        var val=this.filterText;
        if(val&&val.trim()!=''){
            this.productService.getProducts(this.selectedCategory).subscribe(p=>this.products=p.filter(item=>{
                return item.productName.toLocaleLowerCase().indexOf(val.toLocaleLowerCase())>-1;
            }))
        }
        else{
            this.productService.getProducts(this.selectedCategory).subscribe(p=>{
                this.products = p
            })
        }

    }

}
