import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
@Component({
  selector: 'app-lol',
  templateUrl: './lol.component.html',
  styleUrls: ['./lol.component.scss']
})
export class LolComponent implements OnInit {

  brews: any ;
  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.GetBeer().subscribe(data => {
    this.brews = data;
    console.log(this.brews);

    });
  }

}
