import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { InputComponent } from './input/input.component';
import { ResultComponent } from './result/result.component';
import { TrustedComponent } from './trusted/trusted.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { FakeComponent } from './fake/fake.component';
import { RealComponent } from './real/real.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    InputComponent,
    ResultComponent,
    TrustedComponent,
    AboutusComponent,
    HomeComponent,
    FakeComponent,
    RealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
