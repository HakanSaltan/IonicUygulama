import {Injectable, Inject} from "@angular/core";
import {Product} from '../entities/product'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'



@Injectable()
export class ProductService{

    constructor(private http: Http, @Inject('apiUrl') private apiUrl){}

    getProducts(seoUrl?: string): Observable<Product[]>{

        if(seoUrl){
            return this.http.get(this.apiUrl + "/products/" +seoUrl).map(response => response.json());
        } else {
            return this.http.get(this.apiUrl + "/products/").map(response => response.json());
        }

}


}