import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CareerFormComponent } from '../career-form/career-form.component';

@Component({
  selector: 'app-career-details',
  templateUrl: './career-details.component.html',
  styleUrls: ['./career-details.component.scss']
})
export class CareerDetailsComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }
  careerForm(){
    this.modalService
    .open(CareerFormComponent, { 
      ariaLabelledBy: 'modal-basic-title' ,
      windowClass: 'career_details'
    })
  }
}
