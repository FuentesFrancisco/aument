import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CreateButton from '../../Containers/buttons/createButton';


export default function DenseAppBar({action, setAction, history, location}) {
  const isHome = location.pathname === '/';
  
  const goBack = () => {
    setAction('')
    history.push('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{marginBottom: '20px'}} position="static">
        <Toolbar variant="dense">          
        {!isHome && <Button color="inherit" onClick={()=> goBack()}><ArrowBackIcon /></Button>}
          <Typography variant="h4" m={'auto'} color="inherit" component="div">
            {action}
          </Typography>
          <CreateButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
