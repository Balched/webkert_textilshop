import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideFirebaseApp(() => 
      initializeApp({ 
        projectId: "webkert-textilshop", 
        appId: "1:177055489458:web:c12fa66626a026a5a058ab", 
        storageBucket: "webkert-textilshop.firebasestorage.app",
        apiKey: "AIzaSyAJxO7M7f-SgQZG5If-PiPEyEnS5n_8xzE", 
        authDomain: "webkert-textilshop.firebaseapp.com", 
        messagingSenderId: "177055489458" 
      })), 
    provideAuth(() => getAuth()), 
    provideFirestore(() => getFirestore())]
};
