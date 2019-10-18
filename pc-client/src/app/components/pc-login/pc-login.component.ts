import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var Msal: any;

@Component({
  selector: 'pc-login',
  templateUrl: './pc-login.component.html',
  styleUrls: ['./pc-login.component.scss']
})
export class PcLoginComponent implements OnInit {
  button: any;
  msalConfig: any;
  myMSALObj: any;
  requestObj: { scopes: string[]; };
  graphConfig: any;

  constructor(private router: Router) { }

  ngOnInit() {
    this.msalConfig = {
      auth: {
        clientId: "d30afd18-9c2a-4040-8188-fac05ccf477c",
        authority: "https://login.microsoftonline.com/cee9dfa6-646a-4f09-86a8-ba4203711d65",
        redirectUri: "http://localhost:4200/login", //defaults to application start page
        // postLogoutRedirectUri: "http://localhost:4200"
      },
      cache: {
        cacheLocation: "localStorage",
        storeAuthStateInCookie: true
      }
    }
    this.myMSALObj = new Msal.UserAgentApplication(this.msalConfig);
    this.requestObj = {
      scopes: ['user.read']
    };
    this.graphConfig = {
      graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
      graphMeEndpointPhoto: "https://graph.microsoft.com/v1.0/me/photo"
    };
  }

  signIn() {
    let self = this
    this.myMSALObj.loginPopup(this.requestObj)
      .then(function (loginResponse: any) {
        if (loginResponse !== null) {
          self.acquireTokenPopupAndCallMSGraph();
        }
      }).catch(function (error) {
        //Please check the console for errors
        console.log(error);
      });
  }

  acquireTokenPopupAndCallMSGraph() {
    let self = this
    //Always start with acquireTokenSilent to obtain a token in the signed in user from cache
    this.myMSALObj.acquireTokenSilent(this.requestObj).then(function (tokenResponse) {
      self.router.navigateByUrl('/dashboard')
      self.callMSGraph(self.graphConfig.graphMeEndpoint, tokenResponse.accessToken, self.graphAPICallback);
      self.callMSGraph(self.graphConfig.graphMeEndpointPhoto, tokenResponse.accessToken, self.graphAPICallback);
    }).catch(function (error) {
      console.log(error);
      // Upon acquireTokenSilent failure (due to consent or interaction or login required ONLY)
      // Call acquireTokenPopup(popup window)
      if (self.requiresInteraction(error.errorCode)) {
        this.myMSALObj.acquireTokenPopup(this.requestObj).then(function (tokenResponse) {
          self.callMSGraph(self.graphConfig.graphMeEndpoint, tokenResponse.accessToken, self.graphAPICallback);
          self.callMSGraph(self.graphConfig.graphMeEndpointPhoto, tokenResponse.accessToken, self.graphAPICallback);
        }).catch(function (error) {
          console.log(error);
        });
      }
    });
  }

  callMSGraph(theUrl, accessToken, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200)
        callback(JSON.parse(this.responseText));
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xmlHttp.send();
  }

  requiresInteraction(errorCode) {
    if (!errorCode || !errorCode.length) {
      return false;
    }
    return errorCode === "consent_required" ||
      errorCode === "interaction_required" ||
      errorCode === "login_required";
  }

  graphAPICallback(data: any) {
    let self = this;
    if (data && data !== null) {
      console.log(data)
    }

  }


}
