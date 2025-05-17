import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateEmail, updatePassword, User , EmailAuthProvider, reauthenticateWithCredential} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private auth: Auth) {}

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
