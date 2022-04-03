import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Containers/Home';
import ShowPost from './Containers/ShowPost';
import EditPost from './Containers/EditPost';
import CreatePost from './Containers/CreatePost';
import DeleteButton from './Containers/buttons/delelteButton';
import EditButton from './Containers/buttons/editButton';

const Routes = () => {
  return (
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/view">
    <ShowPost />
    <DeleteButton />
    <EditButton />  
    </Route>
    <Route exact path="/edit" >
    <EditPost />
    <DeleteButton />
    </Route>
    <Route exact path="/create" component={CreatePost} />
  </Switch>
  );
};

export default Routes;
