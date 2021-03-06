import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './view/home/home.component';
import { FetchDataComponent } from './view/fetch-data/fetch-data.component';

import { BodyComponent} from './components/body/body.component';
import { HeaderComponent} from './components/header/header.component';
import { HeaderMenuComponent} from './components/header-menu/header-menu.component';
import { NavLeftComponent} from './components/nav-left/nva-left.component';
import { NavRightComponent} from './components/nav-right/nav-right.component';
import { FooterComponent} from './components/footer/footer.component';
import { NavSideMenuComponent} from './components/navside-menu/navside-menu.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FetchDataComponent,
    BodyComponent,
    HeaderComponent,
    HeaderMenuComponent,
    NavLeftComponent,
    NavRightComponent,
    FooterComponent,
    NavSideMenuComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
