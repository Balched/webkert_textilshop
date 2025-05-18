import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, User , EmailAuthProvider, reauthenticateWithCredential, onAuthStateChanged} from '@angular/fire/auth';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private userSubject = new BehaviorSubject<User | null>(null);
  user$ = this.userSubject.asObservable();

  constructor(private auth: Auth) {
    onAuthStateChanged(this.auth, (user) => {
      this.userSubject.next(user);
    });
  }

  register(email: string, password: string) {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }

  login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  logout() {
    return signOut(this.auth);
  }

  get user() {
    return this.auth.currentUser;
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  
updateUserEmail(newEmail: string) {
  const user = this.auth.currentUser;
  if (user) {
    return updateEmail(user, newEmail);
  } else {
    return Promise.reject('Nincs bejelentkezett felhasználó.');
  }
}

updateUserPassword(newPassword: string) {
  const user = this.auth.currentUser;
  if (user) {
    return updatePassword(user, newPassword);
  } else {
    return Promise.reject('Nincs bejelentkezett felhasználó.');
  }
}

reauthenticate(currentPassword: string) {
  const user = this.auth.currentUser;
  if (!user || !user.email) {
    return Promise.reject('Nincs bejelentkezett felhasználó.');
  }
  const credential = EmailAuthProvider.credential(user.email, currentPassword);
  return reauthenticateWithCredential(user, credential);
}

}
