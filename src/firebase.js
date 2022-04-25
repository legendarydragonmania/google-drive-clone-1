import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyDLSGzNZq6Qzo6BPrcusnlwkA7CP4s-XAo',
  authDomain: 'drive-clone-5bbb1.firebaseapp.com',
  projectId: 'drive-clone-5bbb1',
  storageBucket: 'drive-clone-5bbb1.appspot.com',
  messagingSenderId: '434466152595',
  appId: '1:434466152595:web:16d78c8a0f50904ae26d66',
}

const firebaseApp = initializeApp(firebaseConfig)

const auth = getAuth()
const provider = new GoogleAuthProvider()
const storage = getStorage(firebaseApp)
const db = getFirestore()

export { auth, provider, db, storage }
