import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
} from '@angular/router';

import { AppComponent } from './app.component';
import { TransmittableComponent } from './transmittable/transmittable.component';
import { HomeComponent } from './home/home.component';
import { NontransmittableComponent } from './nontransmittable/nontransmittable.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
  path: 'transmittables', component: TransmittableComponent
  },
  { path: 'nontransmittable', component: NontransmittableComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TransmittableComponent,
    HomeComponent,
    NontransmittableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
