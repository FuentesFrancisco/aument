import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import EditIcon from '@mui/icons-material/Edit';
import { deepOrange } from '@mui/material/colors';


const EditButton = ({setAction, action, ...props}) => {
    const isCreate = props.location?.pathname.includes('create')
  const editStyle = {
    position: 'absolute',
    bottom: 96,
    right: 16,
    color: 'common.white',
    bgcolor: deepOrange[500],
    '&:hover': {
        bgcolor: deepOrange[600],
    }
};    
    return  isCreate !== 'create' && <Link to={'/edit'} style={{ textDecoration: 'none' }} onClick={() => setAction('EDIT')}>
    <Fab sx={editStyle} aria-label={'Add'}>
        <EditIcon />
    </Fab>
    </Link>
}

export default EditButton;