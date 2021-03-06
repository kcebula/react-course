import React from 'react';
import './App.css';

import { Route, Router, Switch } from 'react-router-dom'
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';

import history from './../history'

const App: React.FC = () => {
  return (
    <div className="App ui container">
      <Router history={history}>
        <Header/>
        <Switch>
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' exact component={StreamCreate} />
          <Route path='/streams/edit/:id' exact component={StreamEdit} />
          <Route path='/streams/delete/:id' exact component={StreamDelete} />
          <Route path='/streams/:id' exact component={StreamShow} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
