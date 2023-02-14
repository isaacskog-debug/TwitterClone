import './App.css';
import Sidebar from './Sidebar';
import React from 'react';
import Feed from './Feed';
import Widgets from './Widgets';

function App() {
  return (
    <div className="app">
    <Sidebar/>
    <Feed/>
    <Widgets/>
    </div>
  );
}

export default App;
