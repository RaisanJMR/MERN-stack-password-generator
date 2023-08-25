// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBS8hRqmg0DXwgAf_DOGRP080gam_zj5aQ',
  authDomain: 'password-generator-caf4c.firebaseapp.com',
  projectId: 'password-generator-caf4c',
  storageBucket: 'password-generator-caf4c.appspot.com',
  messagingSenderId: '50017248032',
  appId: '1:50017248032:web:2677de34c46f3746946d45',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)