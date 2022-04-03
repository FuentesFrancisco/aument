import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';


const delteeButton = ({setAction, action,deleteAction,post, ...props}) => {
  const isCreate = props.location?.pathname.includes('create')
  const deleteStyle = {
    position: 'absolute',
    bottom: 26,
    right: 16,
    color: 'common.white',
    bgcolor: red[500],
    '&:hover': {
        bgcolor: red[600],
    }
}
const onClick = () =>{
    setAction('')
    deleteAction(post._id)
}

      
    return  isCreate !== 'create' && <Link to={'/'} onClick={() => onClick()} style={{ textDecoration: 'none' }}>
    <Fab sx={deleteStyle} aria-label={'Delete'} color={'inherit'} style={{ 'bgcolor': 'ff8000 !important' }}>
        <DeleteIcon />
    </Fab>
    </Link>
}

export default delteeButton;
