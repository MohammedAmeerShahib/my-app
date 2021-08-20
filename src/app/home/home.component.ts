import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  clickCounter = 0;
  name = 'Hey';
  constructor(    private route: ActivatedRoute,
    ) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  countClick(){
    this.clickCounter += 1;
  }

}
