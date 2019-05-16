import React from 'react';
import './App.css';
import PostList from './PostList';

const App: React.FC = () => {
  return (
    <div className="App ui container">
      <PostList></PostList>
    </div>
  );
}

export default App;
