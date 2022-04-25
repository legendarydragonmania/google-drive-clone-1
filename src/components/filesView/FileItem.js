import React from 'react'
import '../../styles/FileItem.css'

import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';

const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

const FileItem = ({ id, caption, timestamp, fileUrl }) => {
    const fileDate = `${timestamp?.toDate().getDate()} ${monthNames[timestamp?.toDate().getMonth()]} ${timestamp?.toDate().getFullYear()}`

    return (
        <div className='fileItem'>
            <a href={fileUrl} target="_blank" download>
                <div className="fileItem--left">
                    <InsertDriveFileIcon />
                    <p>{caption}</p>
                </div>
                <div className="fileItem--right">
                    <p>{fileDate}</p>
                    <p>size not found</p>
                </div>
            </a>
        </div>
    )
}

export default FileItem
