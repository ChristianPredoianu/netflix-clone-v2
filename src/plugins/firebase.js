// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDPl3GP_htfIw7VautXnq0Zt9y222bPYN8',
  authDomain: 'netflix-clone-v2-53698.firebaseapp.com',
  projectId: 'netflix-clone-v2-53698',
  storageBucket: 'netflix-clone-v2-53698.appspot.com',
  messagingSenderId: '808796304455',
  appId: '1:808796304455:web:2f889159a055ce5ab32d62',
};

/* const app = initializeApp(firebaseConfig); */

// Import the functions you need from the SDKs you need
/* import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database'; */
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: 'AIzaSyDtmVd_dIvsTuydZY8SA3jCEUs_mwqyceA',
  authDomain: 'testing-vue-netclone.firebaseapp.com',
  projectId: 'testing-vue-netclone',
  storageBucket: 'testing-vue-netclone.appspot.com',
  messagingSenderId: '355730558209',
  appId: '1:355730558209:web:ff848e5b8001f41f34df00',
}; */

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);
