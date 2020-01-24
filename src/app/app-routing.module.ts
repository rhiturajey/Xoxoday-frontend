import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeVerifyComponent } from './code-verify/code-verify.component';
import { BeginComponent } from './begin/begin.component';
import { componentFactoryName } from '@angular/compiler';
import { SetPwdComponent } from './set-pwd/set-pwd.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AddTeamComponent } from './add-team/add-team.component'
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FrontComponent } from './front/front.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GroupsComponent } from './groups/groups.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ErrorComponent } from './error/error.component';
import { GiveAwardComponent } from './give-award/give-award.component';
import { AddAwardsComponent } from './add-awards/add-awards.component';
import { AwardRecipientComponent } from './award-recipient/award-recipient.component';
import { ManageBudgetComponent } from './manage-budget/manage-budget.component';
import { AutomatedGreetingsComponent } from './automated-greetings/automated-greetings.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { SiteInfoComponent } from './site-info/site-info.component';


const routes: Routes = [
  { path: '', redirectTo: 'front', pathMatch: 'full' },
  { path: 'front', component: FrontComponent },
  { path: 'nav-bar', component: NavBarComponent,
    children: [
      { path: '', component: BeginComponent },
      { path: 'begin', component: BeginComponent},
      { path: 'code-verify', component: CodeVerifyComponent },
      { path: 'begin', component: BeginComponent },
      { path: 'set-pwd', component: SetPwdComponent },
      { path: 'company-details', component: CompanyDetailsComponent },
      { path: 'add-team', component: AddTeamComponent }
    ]
  },
  { path: 'sign-in', component: SignInComponent },
  { path: 'side-nav', component: SideNavComponent,
    children: [
      { path: '', component: GroupsComponent },
      { path: 'groups', component: GroupsComponent },
      { path: 'user', component: UserComponent },
      { path: 'add-user', component: AddUserComponent },
      { path: 'give-award', component: GiveAwardComponent },
      { path: 'add-awards', component: AddAwardsComponent },
      { path: 'award-recipient', component: AwardRecipientComponent },
      { path: 'automated-greetings', component: AutomatedGreetingsComponent },
      { path: 'business-info', component: BusinessInfoComponent,
        children: [
          { path: '', component:BusinessFormComponent},
          { path: 'business-form', component:BusinessFormComponent},
          { path: 'site-info', component: SiteInfoComponent }
        ]
      },
      { path: 'manage-budget', component: ManageBudgetComponent }
    ]
  },
  { path: 'error', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}