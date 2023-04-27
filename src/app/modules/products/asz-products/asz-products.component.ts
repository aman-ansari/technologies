import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asz-products',
  templateUrl: './asz-products.component.html',
  styleUrls: ['./asz-products.component.scss']
})
export class ASZProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
