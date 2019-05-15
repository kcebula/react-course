import React from 'react';
import './App.css';
import SongDetail from './SongDetail';
import SongList from './SongList';

const App: React.FC = () => {
  return (
    <div className="App ui container grid">
      <div className="ui row">
        <div className="six wide column">
          <SongList />
        </div>
        <div className="ten wide column">
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App;
