import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CartService} from "../../providers/cart.service";
import {CartItem} from "../../entities/cart-item";

/**
 * Generated class for the ListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-list',
  templateUrl: 'list.html',
})
export class ListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public cartService:CartService) {
  }
    cartItems:CartItem[]=[];
  ionViewDidLoad() {
    this.cartItems=this.cartService.list();
  }


}



