import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  private user = new BehaviorSubject<any>(null);
  user$ = this.user.asObservable();

  constructor() {}
}
