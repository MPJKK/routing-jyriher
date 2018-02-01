import {Component, OnInit} from '@angular/core';
import {DigitransitService} from '../services/digitransit.service';

@Component({
    selector: 'app-routes',
    templateUrl: './routes.component.html',
    styleUrls: ['./routes.component.scss']
})
export class RoutesComponent implements OnInit {

    //  pysakki: object;
    pysakkiNimi: string;
    tulos: any;
    lat: number;
    lon: number;
    // kaikkiPysakit: any;

    //  shortName: string;


    constructor(private digitransitService: DigitransitService) {
    }

    /*
    searchStop() {
        this.digitransitService.getRoutes(this.pysakki).subscribe(response => {
            console.log(response.data['stops']);
            //this.pysakki = response.data['stops'];
           // this.tulos = this.pysakki;
            this.tulos = response.data['stops']

            for (let i = 0; i < this.kaikkiPysakit; i++) {
                console.log('loop');

            }
        });
    }
*/

    ngOnInit() {


        this.digitransitService.getRoutes(this.pysakkiNimi).subscribe(response => {
            console.log(response.data['stops']);
            this.tulos = response.data['stops'];
           // this.lat = response.data['stops'][0].lat;
           // this.lon = response.data['stops'][0].lon;
        });
    }

}
