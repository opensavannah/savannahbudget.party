import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyCwHHaRREHQLfS0jtZ_5BN_pj_NdIJujcg',
  authDomain: 'savannah-budget-party.firebaseapp.com',
  databaseURL: 'https://savannah-budget-party.firebaseio.com',
  projectId: 'savannah-budget-party',
  storageBucket: 'savannah-budget-party.appspot.com',
  messagingSenderId: '346523636973',
};

export const constants = {
  LAST_YEAR: 2016,
}

export const firebaseApp = firebase.initializeApp(config)

export const database = firebase.database()
export const firebaseAuth = firebase.auth
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
