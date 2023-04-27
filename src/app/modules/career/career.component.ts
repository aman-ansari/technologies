import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { EMAIL_REGEXP, LINKEDIN_REGEXP } from 'src/app/shared/common';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.scss']
})
export class CareerComponent implements OnInit {

  public isCollapsed = false;
  public isCollapsed2 = false;
  addForm: FormGroup;
  formErrors = {
    apierror: null
  };
  selectedFile: File;
  isShowLoader: boolean = false;
  googleReCaptchaSitekey = environment.GoogleReCaptchaSitekey;
  isShow: boolean = false;
  text = '';
  success: boolean = false
  constructor(
    private fBuilder: FormBuilder,
    private apiService: ApiService,
    private r:Router
  ) {

    this.addForm = this.fBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.pattern(EMAIL_REGEXP)])],
      name: [null, Validators.compose([Validators.required])],
      role: [null, Validators.compose([Validators.required])],
      linkedIn: [null, Validators.compose([Validators.required, Validators.pattern(LINKEDIN_REGEXP)])],
      file: [null, Validators.compose([Validators.required])],
      reCaptcha: [null, Validators.compose([Validators.required])]
    });
  }

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  submitForm() {
    this.addForm.markAllAsTouched();
    if (this.addForm.valid) {
      const data = new FormData();
      data.append('file', this.selectedFile);
      data.append('email', this.addForm.value.email);
      data.append('name', this.addForm.value.name);
      data.append('role', this.addForm.value.role);
      data.append('linkedIn', this.addForm.value.linkedIn);
      data.append('reCaptcha', this.addForm.value.reCaptcha);
      this.isShowLoader = true;

      this.apiService.jobApplyNow(data).subscribe((res) => {
        this.text = res?.message
        this.isShow=true
        this.success = true
        this.isShowLoader = false;
      }, (err) => {
        this.text = err?.error?.message
        this.isShow=true
        this.success = false
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

  fileChangeEvent(fileInputFile: any) {
    const reg = /(.*?)\.(pdf|PDF|doc|docx|txt|odt|rtf|tex|wpd )$/;
    if (!fileInputFile.target.files[0].name.match(reg)) {
      alert('Please select valid file');
      this.removeFile();
      return false;
    } else {
      this.removeFile();
      this.selectedFile = fileInputFile.target.files[0];
      this.addForm.get('file').setValue(this.selectedFile);
    }
  }

  removeFile() { this.selectedFile = null; }

  resolved(captchaResponse: string) {
    this.addForm.patchValue({ reCaptcha: captchaResponse })
  }
}
