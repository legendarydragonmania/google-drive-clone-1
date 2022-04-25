import './App.css'

// import Header from './components/header'
// import Sidebar from './components/sidebar'
// import FilesView from './components/filesView/FilesView'
// import SideIcons from './components/sideIcons'

import Header from './components/header/index'
import Sidebar from './components/sidebar/index'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons/index'

import GDriveLogo from './media/google-drive-logo.png'

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, provider } from './firebase'
import { useState, useCallback } from 'react'

function App() {
  const [user, setUser] = useState()
  const [userData, setUserData] = useState()
  // const [user, setUser] = useState({
  //   displayName: 'David Rakosi',
  //   email: 'david@cleverprogrammer.com',
  //   emailVerified: true,
  //   phoneNumber: null,
  //   photoURL:
  //     'https://lh6.googleusercontent.com/-KyLTWqvDIHQ/AAAAAAAAAAI/AAAAAAAAAAA/AMZuuclcWGWqkt6YUAan32YO4CSR07Y2jw/s96-c/photo.jpg',
  // })

  const handleLogin = useCallback(async () => {
    if (!user) {
      // Sign in using a popup.
      const provider = new GoogleAuthProvider()
      provider.addScope('profile')
      provider.addScope('email')
      const result = await signInWithPopup(auth, provider)

      // The signed-in user info.
      const user = result.user
      // This gives you a Google Access Token.
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      setUser(user)
      setUserData(user.photoURL)
      console.log(token)
    }
  }, [user])

  console.log(userData)

  return (
    <div className='app'>
      {user ? (
        <>
          <Header userPhoto={userData} />
          <div className='app__main'>
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
        </>
      ) : (
        <div className='app__login'>
          <img src={GDriveLogo} alt='Google Drive' />
          <button onClick={handleLogin}>Log in to Google Drive</button>
        </div>
      )}
    </div>
  )
}

export default App
