import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeathertableComponent } from './weathertable/weathertable.component';
import { WeatherdataService } from './weatherdata/weatherdata.service';

const appRoutes: Routes = [
  { path: 'weathertable', component: WeathertableComponent },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    WeathertableComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    WeatherdataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
