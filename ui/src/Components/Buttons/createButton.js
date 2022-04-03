import React from 'react';
import { Link } from 'react-router-dom';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';


const createButton = ({setAction, action, ...props}) => {
    const fabStyle = {
        margin: 'left',
      };

      
    return  <Link to={'/create'} style={{ textDecoration: 'none', marginTop: '5px', marginBottom: '5px' }} onClick={() => setAction('CREATE')}>
    <Fab sx={fabStyle} aria-label={'Add'} color={'white'}>
      <AddIcon />
    </Fab>
    </Link>
}

export default createButton;