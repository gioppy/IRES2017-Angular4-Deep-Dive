import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id: number;

  ngOnInit() {
    this.route.params
      .subscribe(
        (param: Params) => this.id = param['id']
      );
  }

}
