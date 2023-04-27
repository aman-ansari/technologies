import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../app/modules/home/home.component';
import { CompanyComponent } from '../app/modules/company/company.component';
import { SharepointConsultingComponent } from '../app/modules/services/sharepoint-consulting/sharepoint-consulting.component';
import { WebDevelopmentComponent } from '../app/modules/services/web-development/web-development.component';
import { MobileDevelopmentComponent } from '../app/modules/services/mobile-development/mobile-development.component';
import { BookKeepingComponent } from '../app/modules/services/book-keeping/book-keeping.component';
import { BpoServicesComponent } from '../app/modules/services/bpo-services/bpo-services.component';
import { ResourceConsultingComponent } from '../app/modules/services/resource-consulting/resource-consulting.component';
import { NicheSkillsTrainingComponent } from '../app/modules/services/niche-skills-training/niche-skills-training.component';
import { SentimentalAnalyticsComponent } from '../app/modules/data-analytics/sentimental-analytics/sentimental-analytics.component';
import { BIAnalyticsComponent } from '../app/modules/data-analytics/bi-analytics/bi-analytics.component';
import { ASZProductsComponent } from '../app/modules/products/asz-products/asz-products.component';
import { OpenSourceProductsComponent } from '../app/modules/products/open-source-products/open-source-products.component';
import { ContactUsComponent } from '../app/modules/contact-us/contact-us.component';
import { CareerComponent } from '../app/modules/career/career.component';
import { SolutionsComponent } from '../app/modules/solutions/solutions.component';
import { CareerDetailsComponent } from './modules/career-details/career-details.component';
import { PrivacyPolicyComponent } from './modules/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './modules/terms-conditions/terms-conditions.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'testing-&-QA',
    component: SharepointConsultingComponent,
    pathMatch: 'full'
  },
  {
    path: 'software-development',
    component: WebDevelopmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'mobile-development',
    component: MobileDevelopmentComponent,
    pathMatch: 'full'
  },
  {
    path: 'UX/UI-design',
    component: BpoServicesComponent,
    pathMatch: 'full'
  },
  {
    path: 'IT-consulting',
    component: BookKeepingComponent,
    pathMatch: 'full'
  },
  {
    path: 'data-analytics',
    component: ResourceConsultingComponent,
    pathMatch: 'full'
  },
  {
    path: 'cybersecurity-services',
    component: NicheSkillsTrainingComponent,
    pathMatch: 'full'
  },
  {
    path: 'sentimental-analytics',
    component: SentimentalAnalyticsComponent,
    pathMatch: 'full'
  },
  {
    path: 'BI-analytics',
    component: BIAnalyticsComponent,
    pathMatch: 'full'
  },
  {
    path: 'ASZ-products',
    component: ASZProductsComponent,
    pathMatch: 'full'
  },
  {
    path: 'open-source-products',
    component: OpenSourceProductsComponent,
    pathMatch: 'full'
  },
  {
    path: 'about-us',
    component: CompanyComponent,
    pathMatch: 'full'
  },
  {
    path: 'contact-us',
    component: ContactUsComponent,
    pathMatch: 'full'
  },
  {
    path: 'career',
    component: CareerComponent,
    pathMatch: 'full'
  },
  {
    path: 'solutions',
    component: SolutionsComponent,
    pathMatch: 'full'
  },
  {
    path: 'career-details',
    component: CareerDetailsComponent,
    pathMatch: 'full'
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    pathMatch: 'full'
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent,
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
