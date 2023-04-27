import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  selectedValue: string = 'Budget';
  slectedCountry: string = 'Country';
  constructor() {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }
  ChangeValue(value, val) {
    if (val == 'budget') {
      this.selectedValue = value;
    }
    if (val == 'country') {
      this.slectedCountry = value;
    }
  }

  // width: number = 100;
  // height: number = 100;
  // myStyle: Object = {
  //   position: 'fixed',
  //   width: '100%',
  //   height: '100%',
  //   'z-index': 0,
  //   top: 0,
  //   left: 0,
  //   right: 0,
  //   bottom: 0,
  // };
  // myParams: object = {
  //   particles: {
  //     number: {
  //       value: 80,
  //       density: {
  //         enable: true,
  //         value_area: 800,
  //       },
  //     },
  //     color: {
  //       value: '#000',
  //     },
  //     shape: {
  //       type: 'circle',
  //       polygon: {
  //         nb_sides: 7,
  //       },
  //       image: {
  //         src: 'img/github.svg',
  //         width: 100,
  //         height: 100,
  //       },
  //     },
  //     opacity: {
  //       value: 0.6,
  //       random: false,
  //       anim: {
  //         enable: false,
  //         speed: 1,
  //         opacity_min: 0.1,
  //         sync: false,
  //       },
  //     },
  //     size: {
  //       value: 3,
  //       random: true,
  //       anim: {
  //         enable: false,
  //         speed: 40,
  //         size_min: 0.1,
  //         sync: false,
  //       },
  //     },
  //     line_linked: {
  //       enable: true,
  //       distance: 150,
  //       color: '#000',
  //       opacity: 0.4,
  //       width: 1.5,
  //     },
  //     move: {
  //       enable: true,
  //       speed: 4,
  //       direction: 'none',
  //       random: false,
  //       straight: false,
  //       out_mode: 'out',
  //       bounce: false,
  //       attract: {
  //         enable: false,
  //         rotateX: 600,
  //         rotateY: 1200,
  //       },
  //     },
  //   },
  //   interactivity: {
  //     detect_on: 'canvas',
  //     events: {
  //       onhover: {
  //         enable: true,
  //         mode: 'repulse',
  //       },
  //       onclick: {
  //         enable: true,
  //         mode: 'push',
  //       },
  //       resize: true,
  //     },
  //     modes: {
  //       grab: {
  //         distance: 400,
  //         line_linked: {
  //           opacity: 1,
  //         },
  //       },
  //       bubble: {
  //         distance: 400,
  //         size: 40,
  //         duration: 2,
  //         opacity: 8,
  //         speed: 3,
  //       },
  //       repulse: {
  //         distance: 200,
  //         duration: 0.4,
  //       },
  //       push: {
  //         particles_nb: 4,
  //       },
  //       remove: {
  //         particles_nb: 2,
  //       },
  //     },
  //   },
  //   retina_detect: true,
  // };

  changeValue = 'Software Development';
  techValue = 'Web';
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
      "text":"Web",
      "value":"Web"
    },
    {
      "text":"Mobile",
      "value":"Mobile"
    },
    {
      "text":"Desktop",
      "value":"Desktop"
    },
    {
      "text":"Database",
      "value":"Database"
    },
    {
      "text":"DevOps",
      "value":"DevOps"
    },
    {
      "text":"Cloud Services",
      "value":"Cloud Services"
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
