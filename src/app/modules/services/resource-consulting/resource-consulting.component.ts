import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resource-consulting',
  templateUrl: './resource-consulting.component.html',
  styleUrls: ['./resource-consulting.component.scss']
})
export class ResourceConsultingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
