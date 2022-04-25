import React from 'react'
import '../../styles/Header.css'

import GDriveLogo from '../../media/google-drive-logo.png'

import SearchIcon from '@material-ui/icons/Search'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import HelpOutlineIcon from '@material-ui/icons/HelpOutline'
import SettingsIcon from '@material-ui/icons/Settings'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AppsIcon from '@material-ui/icons/Apps'
import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import {
  query,
  collection,
  onSnapshot,
  orderBy,
  where,
} from 'firebase/firestore'
import FileItem from '../filesView/FileItem'

const Index = ({ userPhoto }) => {
  const [inputValue, setInputValue] = useState('')

  const colref = collection(db, 'MyFiles')

  const search = query(
    colref,
    where('caption', '==', inputValue.toString())
    // orderBy('timestamp')
  )

  useEffect(() => {
    onSnapshot(search, (snapshot) => {
      snapshot.docs.map((doc) => {
        return (
          <FileItem
            key={doc.id}
            id={doc.id}
            caption={{ caption: doc.data() }}
            timestamp={{ timestamp: doc.data() }}
            fileUrl={{ fileUrl: doc.data() }}
          />
        )
      })
    })
  }, [inputValue])

  return (
    <div className='header'>
      <div className='header__logo'>
        <img src={GDriveLogo} alt='Google Drive' />
        <span>Drive</span>
      </div>
      <div className='header__searchContainer'>
        <div className='header__searchBar'>
          <SearchIcon />
          <input
            type='text'
            placeholder='Search in Drive'
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <ExpandMoreIcon />
        </div>
      </div>
      <div className='header__icons'>
        <span>
          <HelpOutlineIcon />
          <SettingsIcon />
        </span>
        <AppsIcon />
        <img
          src={
            'https://lh3.googleusercontent.com/a/AATXAJwHy4OPSMhCHt2aV9Qr-D9dzV4FNeAQAKdER7xu=s96-c'
          }
          alt='User Photo'
        />
      </div>
    </div>
  )
}

export default Index
