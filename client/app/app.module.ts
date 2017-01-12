import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }       from './app.routing';

import { PuppiesComponent }      from './components/Puppies/Puppies.component';
import { DashboardComponent }   from './components/dashboard/dashboard.component';
import { PuppyDetailComponent }  from './components/PuppyDetail/Puppy-detail.component';

import { PuppyService }  from './services/Puppy.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    PuppiesComponent,
    DashboardComponent,
    PuppyDetailComponent
  ],
  providers: [
    PuppyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
