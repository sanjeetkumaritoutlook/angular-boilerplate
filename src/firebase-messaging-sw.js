importScripts('https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.2/firebase-messaging.js');
firebase.initializeApp({
  apiKey: 'AIzaSyBUIXjo7q96Ou6ZGrgDiC3xXL_aTsV3-VA',
  authDomain: 'angular-bolierplate.firebaseapp.com',
  projectId: 'angular-bolierplate',
  storageBucket: 'angular-bolierplate.appspot.com',
  messagingSenderId: '605311314148',
  appId: '1:605311314148:web:8eeba0b23f09da16a0e4f1',
  measurementId: 'G-RJTVS2P95F',
});
const messaging = firebase.messaging();
