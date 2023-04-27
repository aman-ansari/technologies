import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
  active = 1;
  members = [];
  teamMembers = [];
  newMembers = [];
  startIndex = 10
  endIndex = 14;
  isShowLoader: boolean = false;
  notEmptyMember: boolean = true;
  notScrolly: boolean = true

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);
    this.isShowLoader = true
    this.apiService.getAllMembers().subscribe(
      (data: any) => {
        this.isShowLoader = false
        this.teamMembers = data?.teamMembers
        for(let i = 0; i < this.teamMembers.length; i++){
          if(i < 10){
            this.members.push(this.teamMembers[i])
          }
        }
      },
      (err) => {
        this.isShowLoader = false;
      }
    );
  }

  onScroll(){
    if(this.notScrolly && this.notEmptyMember){
      this.isShowLoader = true;
      this.notScrolly = false;
      setTimeout(()=>{                           // <<<---using ()=> syntax
        this.loadNextMember();
    }, 2000);
     
    }
  }

  loadNextMember(){
    for(let i = this.startIndex; i < this.teamMembers.length; i++){
      if(i <= this.endIndex){
        this.members.push(this.teamMembers[i]);
      }
    }
    this.isShowLoader = false
    if(this.endIndex <= this.teamMembers.length){
      this.startIndex += 5;
      this.endIndex += 5;
      this.notScrolly = true;
    }else{
      this.notEmptyMember = false
    }
  }
}
