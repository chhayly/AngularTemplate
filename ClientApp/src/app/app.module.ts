import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';

import { BodyComponent} from './components/body/body.component';
import { HeaderComponent} from './components/header/header.component';
import { HeaderMenuComponent} from './components/header-menu/header-menu.component';
import { NavLeftComponent} from './components/nav-left/nva-left.component';
import { NavRightComponent} from './components/nav-right/nav-right.component';
import { FooterComponent} from './components/footer/footer.component';
import { NavSideMenuComponent} from './components/navside-menu/navside-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
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
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
