import React from 'react';
import './App.css';

function App() {
  return (
    <div id='drum-machine' className='container'>
      <span className='left-sidebar'>
        <div id='display' className='screen'>display
        </div>
      </span>
      <span className='right-sidebar'>
        <div id='drum-panel' className='drum-set'>
          <div className='drum-pad'>q<audio src></audio></div>
          <div className='drum-pad'>w<audio src></audio></div>
          <div className='drum-pad'>e<audio src></audio></div>
          <div className='drum-pad'>a<audio src></audio></div>
          <div className='drum-pad'>s<audio src></audio></div>
          <div className='drum-pad'>d<audio src></audio></div>
          <div className='drum-pad'>z<audio src></audio></div>
          <div className='drum-pad'>x<audio src></audio></div>
          <div className='drum-pad'>c<audio src></audio></div>
        </div>
      </span>
    </div>
  );
}

export default App;
