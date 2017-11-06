import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {Product} from "../../entities/product";
import {CartService} from "../../providers/cart.service";
import {ToastController} from "ionic-angular";


@IonicPage()
@Component({
    selector: 'page-product-detail',
    templateUrl: 'product-detail.html',
})
export class ProductDetailPage {

    constructor(public navCtrl: NavController, public navParams: NavParams, public cartService: CartService,public toastController:ToastController) {
        this.selectedProduct = navParams.get('item');
    }

    selectedProduct: Product;

    ionViewDidLoad() {
        console.log('ionViewDidLoad ProductDetailPage');
    }

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        this.showToast('bottom');
    }
    showToast(position?:string){
        let toast=this.toastController.create({
            message:'Ürün Başarıyla Eklenmiştir!',
           duration:4000,
           position:position,
            showCloseButton:true,
            closeButtonText:'Ok'
        });
    toast.present();
    }

}
