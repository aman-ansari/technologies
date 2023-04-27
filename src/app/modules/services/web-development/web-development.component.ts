import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-web-development',
  templateUrl: './web-development.component.html',
  styleUrls: ['./web-development.component.scss']
})
export class WebDevelopmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }


  changeValue = 'Software Development';
  techValue = 'Software Consulting';
  leftsec = [
    {
      "text":"Software Development",
      "value":"Software Development"
    },
    {
      "text":"Testing & QA",
      "value":"Testing & QA"
    },
    {
      "text":"Application Services",
      "value":"Application Services"
    },
    {
      "text":"UX/UI Design",
      "value":"UX/UI Design"
    },
    {
      "text":"IT Consulting",
      "value":"IT Consulting"
    },
    {
      "text":"Data Analytics",
      "value":"Data Analytics"
    },
    {
      "text":"Cybersecurity Services",
      "value":"Cybersecurity Services"
    }
  ]

  techsec = [
    {
      "text":"Software Consulting",
      "value":"Software Consulting"
    },
    {
      "text":"Custom Software Development",
      "value":"Custom Software Development"
    },
    {
      "text":"Software Development Outsourcing",
      "value":"Software Development Outsourcing"
    },
    {
      "text":"Software Product Development",
      "value":"Software Product Development"
    },
    {
      "text":"Secure Software Development",
      "value":"Secure Software Development"
    },
    {
      "text":"Software Development Automation",
      "value":"Software Development Automation"
    }
  ]
  techItem(techval){
    this.techValue = techval;
  }
  changeItem(val){
    this.changeValue = val;
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
}

}
