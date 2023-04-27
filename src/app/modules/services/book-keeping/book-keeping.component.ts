import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-keeping',
  templateUrl: './book-keeping.component.html',
  styleUrls: ['./book-keeping.component.scss']
})
export class BookKeepingComponent implements OnInit {
  selectedValue : string = 'Budget'
  slectedCountry : string ='Country'
  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  ChangeValue(value, val){
    if(val == 'budget'){
      this.selectedValue = value
    }
    if(val == 'country'){
      this.slectedCountry = value
    }
  }
}
