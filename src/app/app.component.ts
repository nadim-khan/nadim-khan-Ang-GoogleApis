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
  public output: Array<string> = new Array<string>();
  public isGSignedIn = false;
  public isMSignedIn = false;
  public googleDisplay = 'block';
  currentUserInfo;

  constructor(public gdata: GoogleAuthService,
    private cd: ChangeDetectorRef) {
    window.onSignIn = (googleUser) => this.onSignIn(googleUser);
    if (this.gdata.isSignedIn) {
      this.showData();
  }
  // Listen for the signin
  this.gdata.signIn.subscribe(() => {
      this.showData();
  });
  // Listen for signout
  this.gdata.signedOut.subscribe(() => {
      this.clearData();
  });
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

  msSignIn() {
    this.isMSignedIn = true;
  }
  msSignOut() {
    this.isMSignedIn = false;
  }

  showData() {
    // Useful data for your client-side scripts:
    const profile = this.gdata.googleUser.getBasicProfile();
    this.output.length = 0;
    this.output.push('ID: ' + profile.getId());
    // Don't send this directly to your server!
    this.output.push('Full Name: ' + profile.getName());
    // this.output.push('Given Name: ' + profile.getGivenName());
    // this.output.push('Family Name: ' + profile.getFamilyName());
    // this.output.push('Image URL: ' + profile.getImageUrl());
    this.output.push('Email: ' + profile.getEmail());

    // The ID token you need to pass to your backend:
    // const id_token = this.gdata.googleUser.getAuthResponse().id_token;
    // this.output.push('ID Token: ' + id_token);
}

clearData() {
    this.output.length = 0;
    this.output.push('Sign in to see what information it provides.');
}

  ngOnInit() {

   }
}
