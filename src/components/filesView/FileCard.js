import React from 'react'
import '../../styles/FileCard.css'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile'
import MoreVerticalOutlinedIcon from '@material-ui/icons/MoreVertOutlined'

const FileCard = ({ name }) => {
  return (
    <div className='fileCard'>
      <div className='fileCard--top'>
        <InsertDriveFileIcon style={{ fontSize: 130 }} />
      </div>

      <div className='fileCard--bottom'>
        <p>{name}</p>
        <MoreVerticalOutlinedIcon />
      </div>
    </div>
  )
}

export default FileCard
