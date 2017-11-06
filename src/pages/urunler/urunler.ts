import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ProductService} from '../../providers/product.service';

import 'rxjs/add/operator/map';

@IonicPage()
@Component({
  selector: 'page-urunler',
  templateUrl: 'urunler.html',
    providers:[ProductService]
})
export class UrunlerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public productService:ProductService) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad UrunlerPage');
  }



}
