import { Injectable } from '@angular/core';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

export interface ProfileData {
  pictureUrl: string;
  userid: string;
  displayName: string;
  statusMessage: string;
  platfrom: string;
  email: string;
}

@Injectable()
export class ProfileService {
  private profileData: ProfileData;
  //sharedData$: Observable<any> = this.profileData.asObservable();

  // pictureUrl: string;
  // userid: string;
  // displayName: string;
  // statusMessage: string;
  // platfrom: string;
  // email: string;

  constructor() {}

  setData(updatedData: ProfileData) {
    this.profileData.pictureUrl = updatedData.pictureUrl;
    this.profileData.userid = updatedData.userid;
    this.profileData.displayName = updatedData.displayName;
    this.profileData.statusMessage = updatedData.statusMessage;
    this.profileData.platfrom = updatedData.platfrom;
    this.profileData.email = updatedData.email;
  }
}
