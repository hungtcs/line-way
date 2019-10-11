import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutesModule } from './routes/routes.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  imports: [
    RouterModule,
    RoutesModule,
    BrowserModule,
    HttpClientModule,
  ],
  bootstrap: [
    AppComponent,
  ],
  declarations: [
    AppComponent,
  ],
})
export class AppModule {

}
