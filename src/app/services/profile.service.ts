import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IProfile } from '../core/types';

/**
 * A sample service that simuates the profile api services
 */
@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private _profiles: IProfile[] = [{
    id: 1,
    name: 'Trisha',
    age: 39,
    dpUrl: './assets/img/trisha01.jpg',
    code: "M1234561",
    details: "MBBS, Poosam",
    religion: "Hindu",
    location: "Chennai, TN",
    isVerified: true,
    isNRI: true,
    isShortlisted: true,
    gallery: [
      './assets/img/trisha02.jpg',
      './assets/img/trisha03.jpg',
      './assets/img/trisha04.jpg',
      './assets/img/trisha05.jpg',
    ]
  }, {
    id: 2,
    name: 'Nivetha',
    age: 26,
    dpUrl: './assets/img/nivetha01.jpg',
    code: "M1234562",
    details: "Model, Poosam",
    religion: "Muslim",
    location: "Chennai, TN",
    isVerified: false,
    isNRI: true,
    isShortlisted: false,
  }, {
    id: 3,
    name: 'Samantha',
    age: 35,
    dpUrl: './assets/img/samatha01.png',
    code: "M1234563",
    details: "QA, Poosam",
    religion: "Christian",
    location: "Chennai, TN",
    isVerified: true,
    isNRI: false,
    isShortlisted: false,
  }, {
    id: 4,
    name: 'Malavika M',
    age: 29,
    dpUrl: './assets/img/malavika01.png',
    code: "M1234564",
    details: "Actor, Poosam",
    religion: "Buddhist",
    location: "Chennai, TN",
    isVerified: false,
    isNRI: false,
    isShortlisted: false,
  }, {
    id: 5,
    name: 'Priyanka Mohan',
    age: 27,
    dpUrl: './assets/img/priyanka01.jpg',
    code: "M1234565",
    details: "Dev, Poosam",
    religion: "Jain",
    location: "Chennai, TN",
    isVerified: false,
    isNRI: false,
    isShortlisted: false,
  }, {
    id: 6,
    name: 'Rakul',
    age: 29,
    dpUrl: './assets/img/rakul01.jpg',
    code: "M1234566",
    details: "MBBS, Poosam",
    religion: "Hindu",
    location: "Chennai, TN",
    isVerified: true,
    isNRI: true,
    isShortlisted: true,
    gallery: []
  }, {
    id: 7,
    name: 'Rashmika',
    age: 26,
    dpUrl: './assets/img/rashmika01.png',
    code: "M1234567",
    details: "Model, Poosam",
    religion: "Muslim",
    location: "Chennai, TN",
    isVerified: false,
    isNRI: true,
    isShortlisted: false,
  }, {
    id: 8,
    name: 'Anupama',
    age: 35,
    dpUrl: './assets/img/anupama01.jpg',
    code: "M1234568",
    details: "QA, Poosam",
    religion: "Christian",
    location: "Chennai, TN",
    isVerified: true,
    isNRI: false,
    isShortlisted: false,
  }/* , {
    id: 9,
    name: 'Malavika M',
    age: 29,
    dpUrl: './assets/img/malavika01.png',
    code: "M1234569",
    details: "Actor, Poosam",
    religion: "Buddhist",
    location: "Chennai, TN",
    isVerified: false,
    isNRI: false,
    isShortlisted: false,
  }, {
    id: 10,
    name: 'Priyanka Mohan',
    age: 27,
    dpUrl: './assets/img/priyanka02.png',
    code: "M1234570",
    details: "Dev, Poosam",
    religion: "Jain",
    location: "Chennai, TN",
    isVerified: false,
    isNRI: false,
    isShortlisted: false,
  } */];

  constructor(
    private http: HttpClient
  ) {
    // this.loadProfiles();
  }

  private async loadProfiles() {
    //
    this._profiles = await this.http.get<IProfile[]>('./assets/profiles.json').toPromise();
  }

  /**
   * Returns an observable for fetching profiles
   *
   * @returns List of profiles
   *
   */
  getProfiles(): Observable<IProfile[]> {
    return of(this._profiles);
  }

  /**
   * Returns observable of a profile matched to the id
   * 
   * @param id primary key of the profile
   * 
   * @returns 
   */
  getProfileById(id: number): Observable<IProfile | undefined> {

    const profile = this._profiles.find(f => f.id === id);

    return of(profile);
  }

  postShortlistProfile(id: number, shortlist: boolean): Observable<boolean | number> {

    const profile = this._profiles.find(f => f.id === id);

    if (profile) {
      profile.isShortlisted = shortlist;

      this._profiles = [
        ...this._profiles.filter(f => f.id !== id),
        profile
      ];

      return of(shortlist);
    }

    return of(-1);
  }
}
