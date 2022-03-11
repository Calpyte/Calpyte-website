import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';
import { CounterComponent } from './counter/counter.component';
import { ForBoxComponent } from './for-box/for-box.component';
import { FooterComponent } from './footer/footer.component';
import { OurValueComponent } from './our-value/our-value.component';
import { FlipCardComponent } from './flip-card/flip-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    AboutComponent,
    ServicesComponent,
    ContactComponent,
    CounterComponent,
    ForBoxComponent,
    FooterComponent,
    OurValueComponent,
    FlipCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
