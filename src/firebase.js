import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCe60H1lcVS-CkL0LVzBYqq6d_W3mtEsjs",
  authDomain: "drive-5001e.firebaseapp.com",
  projectId: "drive-5001e",
  storageBucket: "drive-5001e.appspot.com",
  messagingSenderId: "572094210017",
  appId: "1:572094210017:web:dba82eef0a7dfdeb4abca0"
};


const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth()
const provider = new GoogleAuthProvider()
const storage = getStorage(firebaseApp)
const db = getFirestore()

export { auth, provider, db, storage }
