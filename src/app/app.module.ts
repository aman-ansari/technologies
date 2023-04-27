import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { HomeComponent } from './modules/home/home.component';
import { CompanyComponent } from './modules/company/company.component';
import { SharepointConsultingComponent } from './modules/services/sharepoint-consulting/sharepoint-consulting.component';
import { WebDevelopmentComponent } from './modules/services/web-development/web-development.component';
import { ContactUsComponent } from './modules/contact-us/contact-us.component';
import { MobileDevelopmentComponent } from './modules/services/mobile-development/mobile-development.component';
import { BpoServicesComponent } from './modules/services/bpo-services/bpo-services.component';
import { BookKeepingComponent } from './modules/services/book-keeping/book-keeping.component';
import { ResourceConsultingComponent } from './modules/services/resource-consulting/resource-consulting.component';
import { NicheSkillsTrainingComponent } from './modules/services/niche-skills-training/niche-skills-training.component';
import { SentimentalAnalyticsComponent } from './modules/data-analytics/sentimental-analytics/sentimental-analytics.component';
import { BIAnalyticsComponent } from './modules/data-analytics/bi-analytics/bi-analytics.component';
import { ASZProductsComponent } from './modules/products/asz-products/asz-products.component';
import { OpenSourceProductsComponent } from './modules/products/open-source-products/open-source-products.component';
import { CareerComponent } from './modules/career/career.component';
import { SolutionsComponent } from './modules/solutions/solutions.component';
import { CareerDetailsComponent } from './modules/career-details/career-details.component';
import { PrivacyPolicyComponent } from './modules/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './modules/terms-conditions/terms-conditions.component';
import { CareerFormComponent } from './modules/career-form/career-form.component';
import { ScrollTopComponent } from './core/scroll-top/scroll-top.component';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormValidationModule } from './shared/form-validation/form-validation.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './core/loading/loading.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import { ConfirmationPopupComponent } from './modules/confirmation-popup/confirmation-popup.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CompanyComponent,
    SharepointConsultingComponent,
    WebDevelopmentComponent,
    ContactUsComponent,
    MobileDevelopmentComponent,
    BpoServicesComponent,
    BookKeepingComponent,
    ResourceConsultingComponent,
    NicheSkillsTrainingComponent,
    SentimentalAnalyticsComponent,
    BIAnalyticsComponent,
    ASZProductsComponent,
    OpenSourceProductsComponent,
    CareerComponent,
    SolutionsComponent,
    CareerDetailsComponent,
    PrivacyPolicyComponent,
    TermsConditionsComponent,
    CareerFormComponent,
    ScrollTopComponent,
    LoadingComponent,
    ConfirmationPopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    IvyCarouselModule,
    FormsModule,
    FormValidationModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    SimpleModalModule,
    InfiniteScrollModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
