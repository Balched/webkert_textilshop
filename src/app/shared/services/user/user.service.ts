import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable, of } from 'rxjs';
import { switchMap, map} from 'rxjs/operators';

export interface UserData {
  email: string;
  billingAddress?: string;
  shippingAddress?: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore
  ) {}

  getUserData(): Observable<UserData | null> {
    return this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<UserData>(`users/${user.uid}`).valueChanges().pipe(
            map((data: UserData | undefined) => data ?? null)
          );
        } else {
          return of(null);
        }
      })
    );
  }

  async updateUserData(data: Partial<UserData>): Promise<void> {
    const user = await this.afAuth.currentUser;
    if (user) {
      const ref = this.afs.doc(`users/${user.uid}`);
      return ref.set(data, { merge: true });
    } else {
      throw new Error('Nincs bejelentkezett felhasználó.');
    }
  }
}
