import { Routes } from '@angular/router';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainContentComponent } from './main-content/main-content.component';
import { PrivacyPoliceComponent } from './privacy-police/privacy-police.component';

export const routes: Routes = [
  { path: '', component: MainContentComponent },
  { path: 'legalNotice', component: LegalNoticeComponent },
  { path: 'privacyPolice', component: PrivacyPoliceComponent }
];


