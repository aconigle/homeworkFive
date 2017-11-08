import {Component} from '@angular/core';
import {DataProvider} from "../../providers/data/data";
import {NavController} from "ionic-angular";
import {InfoPage} from "../../pages/info/info";

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    lists: any;

    constructor(public dataService: DataProvider, public navCtrl: NavController) {

    }

    ionViewDidLoad() {
        this.lists = this.dataService.lists;
    }

    itemClicked(item) {
        console.log(item);

        this.navCtrl.push(InfoPage, item);
    }
}

