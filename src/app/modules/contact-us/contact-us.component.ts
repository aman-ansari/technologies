import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/services/api.service';
import { EMAIL_REGEXP } from 'src/app/shared/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  modalReference: NgbModalRef;
  addForm: FormGroup;
  formErrors = {
    apierror: null
  };
  isShowLoader: boolean = false;
  googleReCaptchaSitekey = environment.GoogleReCaptchaSitekey;
  isShow: boolean = false;
  text='';
  success: boolean = false
  constructor(
    private fBuilder: FormBuilder,
    private apiService: ApiService,
    private r:Router
  ) {

    this.addForm = this.fBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      name: [null, Validators.compose([Validators.required])],
      subject: [null, Validators.compose([Validators.required])],
      phone: [null, Validators.compose([Validators.required])],
      message: [null, Validators.compose([Validators.required])],
      reCaptcha: [null, Validators.compose([Validators.required])],
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  closemodal() {
    this.modalReference.close();
  }
  resolved(captchaResponse: string) {
    this.addForm.patchValue({ reCaptcha: captchaResponse })
  }

  // showAlert() {
  //   this.simpleModalService.addModal(AlertComponent, {
  //     title: "Alert title!",
  //     message: "Alert message!!!"
  //   });
  // }

  submitForm() {
    this.addForm.markAllAsTouched();
    if (this.addForm.valid) {
      this.isShowLoader = true;
      this.apiService.sendMessage(this.addForm.value).subscribe((res) => {
        this.text=res?.message
        this.isShow=true
        this.success = true
        this.isShowLoader = false;
      }, (err) => {
        this.text=err?.error?.message
        this.isShow=true;
        this.success = false;
        this.isShowLoader = false;
      })
    }
  }
  closepopup(){
    if(this.success){
      this.isShow=false;
      this.r.navigateByUrl('/home')
    }else{
      this.isShow=false;
    }
  }
}
