import { ElementRef, Input, OnInit } from '@angular/core';
import { Component, VERSION } from '@angular/core';
import liff from '@line/liff';
import { ProfileService, ProfileData } from './app.service';
// type UnPromise<T> = T extends Promise<infer X> ? X : T;
// const doSomething = (step = 1, result: boolean = true) => {
//   return new Promise<string>((resolve, reject) => {
//     if (result) {
//       setTimeout(() => {
//         resolve(`do something complete: step: ${step}`);
//       }, 300);
//     } else {
//       reject('fail to do');
//     }
//   });
// };

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// const btnLogin: HTMLElement = document.getElementById('btnLogin');
export class AppComponent implements OnInit {
  //os: ReturnType<typeof liff.getOS>;
  //profile: UnPromise<ReturnType<typeof liff.getProfile>>;
  // profileLiFF: ProfileData;
  // constructor(private profileService: ProfileService) {}

  saida: any;
  pictureUrl = 'https://mokmoon.com/images/ic_liff.png';
  @Input() UserName: string;
  test: any;
  @Input() Password: string;
  liffID = '1656324042-7qlN1bgl';
  name = 'Angular ' + VERSION.major;

  ngOnInit(): void {
    liff.init({ liffId: this.liffID });
    type UnPromise<T> = T extends Promise<infer X> ? X : T;
    liff.ready.then(async () => {
      const isLoggedIn: boolean = liff.isLoggedIn();
      const isInClient: boolean = liff.isInClient();
      this.saida = isInClient;
      if (liff.isInClient()) {
        const profile: UnPromise<
          ReturnType<typeof liff.getProfile>
        > = await liff.getProfile();
        this.pictureUrl = profile.pictureUrl;
      }
    });

    // console.log('liff.isInClient()');
    // liff.init({ liffId: '1656324042-7qlN1bgl' });
    // liff.ready.then(() => {
    //   // if (liff.getOS() === 'android') {
    //   // }
    //   if (liff.isInClient()) {
    //     this.getUserProfile();
    //     console.log(this.profile);
    //   }
    // });
  }

  getUserProfile() {
    var profile;
    liff
      .init({ liffId: '1656324042-7qlN1bgl' })
      .then(async () => {
        this.test = liff.getProfile();
        // if (liff.isLoggedIn()) {
        profile = liff.getProfile();
        //console.log(profile);
        this.pictureUrl = profile.pictureUrl;

        // this.profileLiFF.pictureUrl = profile.pictureUrl;
        // this.profileLiFF.userid = profile.userId;
        // this.profileLiFF.displayName = profile.displayName;
        // this.profileLiFF.statusMessage = profile.statusMessage;
        // this.profileLiFF.platfrom = profile.platfrom;
        // this.profileLiFF.email = profile.email;
        // this.profileService.setData(this.profileLiFF);

        return profile;
      })
      .catch(err => {
        console.log(err);
        return undefined;
      });
  }

  onLogin() {}
  onOut() {}
}
