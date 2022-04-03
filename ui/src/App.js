import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import Box from '@mui/material/Box';
import AppBar from './Containers/AppBar';
import Routes from './routes';
import {getPosts} from './store/actions'
import { compose, bindActionCreators } from 'redux';
import { connect} from 'react-redux';

function App({getPosts}) {
  useEffect(() => {getPosts()})
  return (
    <Box
      sx={{
        bgcolor: 'background.grey',
        width: '100%',
        height: 'min-content',
        position: 'relative',
        paddingBottom: '20px'
      }}
    >
      <Route path="/" component={AppBar} />
      <Routes />
    </Box>
  )
}

const mapDispatchToProps = (
  (dispatch) => bindActionCreators({
    getPosts: (data) => getPosts(data),
  }, dispatch)
);

export default compose(connect(null, mapDispatchToProps))(App)