import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PageNotFoundComponent } from './not-found.component';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle } from '@fortawesome/free-regular-svg-icons';
import { GoogleAuthService } from './google-auth.service';
import { JsLoaderService } from './js-loader.service';
import { SimpleComponent } from './simple/simple.component';
import { HooksComponent } from './hooks/hooks.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { SimpleRoutingModule } from './simple/simple-routing.module';
import { HooksRoutingModule } from './hooks/hooks-routing.module';
import { AboutRoutingModule } from './about/about-routing.module';

library.add(faExternalLinkAlt);
library.add(faUserCircle);
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    FontAwesomeModule,
    SimpleRoutingModule,
    HooksRoutingModule,
    AboutRoutingModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    SimpleComponent,
    HooksComponent,
    AboutComponent,
    PageNotFoundComponent
    ],
  bootstrap: [AppComponent],
  providers: [
    JsLoaderService,
    GoogleAuthService]
})
export class AppModule { }
