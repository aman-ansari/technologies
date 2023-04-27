import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-open-source-products',
  templateUrl: './open-source-products.component.html',
  styleUrls: ['./open-source-products.component.scss']
})
export class OpenSourceProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
