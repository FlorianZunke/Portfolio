import { Routes } from '@angular/router';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { MainContentComponent } from './main-content/main-content.component';

export const routes: Routes = [

    {path: '', component: MainContentComponent},
    {path: 'legalNotice', component: LegalNoticeComponent},
];
