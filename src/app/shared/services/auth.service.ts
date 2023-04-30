import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  register(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  addDisplayName(name: string) {
    return this.auth.currentUser.then((user) => {
      user?.updateProfile({
        displayName: name
      });
    });
  }

  getloggedInUser() {
    return this.auth.user;
  }

  logout() {
    return this.auth.signOut();
  }

}
