import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { NavComponent } from './nav/nav.component';
import { SearchComponent } from './search/search.component';
import { HighlightDirectiveDirective } from './directives/highlight-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    MyProfileComponent,
    NavComponent,
    SearchComponent,
    HighlightDirectiveDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
