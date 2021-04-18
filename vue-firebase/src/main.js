import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

require('./assets/scss/app.scss')

firebase.initializeApp(
  {
    apiKey: 'AIzaSyCgkS6ysINBHekyG0U3Z8650UPV7Fa76nA',
    authDomain: 'vue-firebase-auth-c312e.firebaseapp.com',
    projectId: 'vue-firebase-auth-c312e',
    storageBucket: 'vue-firebase-auth-c312e.appspot.com',
    messagingSenderId: '17572231236',
    appId: '1:17572231236:web:a0af1e7d19c1386577e411',
    measurementId: 'G-HHMXPK126X'
  }
)

createApp(App).use(store).use(router).mount('#app')
