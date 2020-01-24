import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeginComponent } from './begin/begin.component';
import { CodeVerifyComponent } from './code-verify/code-verify.component';
import { SetPwdComponent } from './set-pwd/set-pwd.component';
import { CompanyDetailsComponent } from './company-details/company-details.component';
import { AddTeamComponent } from './add-team/add-team.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { FrontComponent } from './front/front.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { GroupsComponent } from './groups/groups.component';
import { UserComponent } from './user/user.component';
import { AddUserComponent} from  './add-user/add-user.component';
import {ReactiveFormsModule} from  '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { ErrorComponent } from './error/error.component';
import { UserService } from './user.service';
import { GiveAwardComponent } from './give-award/give-award.component';
import { AddAwardsComponent } from './add-awards/add-awards.component';
import { AwardRecipientComponent } from './award-recipient/award-recipient.component';
import { ManageBudgetComponent } from './manage-budget/manage-budget.component';
import { AutomatedGreetingsComponent } from './automated-greetings/automated-greetings.component';
import { BusinessInfoComponent } from './business-info/business-info.component';
import { BusinessFormComponent } from './business-form/business-form.component';
import { SiteInfoComponent } from './site-info/site-info.component';

@NgModule({
  declarations: [
    AppComponent,
    BeginComponent,
    CodeVerifyComponent,
    SetPwdComponent,
    CompanyDetailsComponent,
    AddTeamComponent,
    AddUserComponent,
    NavBarComponent,
    SignInComponent,
    FrontComponent,
    SideNavComponent,
    GroupsComponent,
    UserComponent,
    ErrorComponent,
    GiveAwardComponent,
    AddAwardsComponent,
    AwardRecipientComponent,
    ManageBudgetComponent,
    AutomatedGreetingsComponent,
    BusinessInfoComponent,
    BusinessFormComponent,
    SiteInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  providers: [
    UserService,
    InMemoryDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
