import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
    lists: any = [
        {
            listheader: "Grocery List",
            Items: [
                {
                    item: "milk",
                    price: "$3.99",
                    size: "1 gallon"
                },
                {
                    item: "bag of oranges",
                    price: "$2.29",
                    size: "15/bag"
                },
                {
                    item: "American Cheese",
                    price: "$1.58",
                    size: "24 pack"
                },
                {
                    item: "brown sugar",
                    price: "$2.94",
                    size: "2 lbs."
                },
                {
                    item: "roses",
                    price: "$5.99",
                    size: "1 dozen"
                },
            ]
        }
    ];

    constructor() {
        // console.log('Hello DataProvider Provider');
    }

}
