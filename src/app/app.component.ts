import { Component, OnInit } from '@angular/core';
import { GoogleAuthService } from './google-auth.service';
import { ChangeDetectorRef } from '@angular/core';

declare global {
  interface Window { onSignIn: (googleuser: any) => void; }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public isGSignedIn = false;
  public googleDisplay = 'block';
  currentUserInfo;

  constructor(public gdata: GoogleAuthService,
    private cd: ChangeDetectorRef) {
    window.onSignIn = (googleUser) => this.onSignIn(googleUser);
  }

  onSignIn(googleUser) {
    this.currentUserInfo = googleUser.Qt;
    console.log(this.currentUserInfo);
    this.gdata.onSignIn(googleUser);
    this.isGSignedIn = this.gdata.isSignedIn;
    this.googleDisplay = this.gdata.googleDisplay;
    this.cd.detectChanges();
  }

  public async signOut() {
    console.log('calling gdata signout...');
    await this.gdata.signOut();
    console.log('gdata signout finished');
    this.isGSignedIn = this.gdata.isSignedIn;
    this.googleDisplay = this.gdata.googleDisplay;
    this.cd.detectChanges();
  }

  ngOnInit() { }
}
