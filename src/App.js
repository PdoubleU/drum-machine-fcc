import React from 'react';
import './App.min.css';
import PadData from './components/padbank';
import {bankOne, bankTwo} from './components/data';
import ReactFCCTest from 'react-fcctest';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: String.fromCharCode(160),
      currentPadData: bankOne,
      currentPadDataId: 'data one',
      sliderVal: .3
    }
  this.displayClipName = this.displayClipName.bind(this);
  this.selectBank = this.selectBank.bind(this);
  this.adjustVolume = this.adjustVolume.bind(this);
  this.clearDisplay = this.clearDisplay.bind(this);
  }
  selectBank(){
    this.state.currentPadDataId === 'data one' ?
    this.setState({
      currentPadData: bankTwo,
      display: 'data two',
      currentPadDataId: 'data two'
    }) :
    this.setState({
      currentPadData: bankOne,
      display: 'data one',
      currentPadDataId: 'data one'
    });
  }
  displayClipName(name){
    this.setState({
      display: name
    })
  }
  adjustVolume(e){
    this.setState({
      sliderVal: e.target.value,
      display: "Volume: " + Math.round(e.target.value * 100)
    });
    setTimeout(()=>this.clearDisplay(), 100);
  }
clearDisplay(){
  this.setState({
    display: String.fromCharCode(160)
  });
}
render(){
  const bankSlider = this.state.currentPadData === bankOne ? {float: 'left'} : {float: 'right'};
  const clips = [].slice.call(document.getElementsByClassName('clip'));
  clips.forEach(sound => {sound.volume = this.state.sliderVal});

return (
<div id='drum-machine' className='inner-container'>
  <ReactFCCTest/>
  <PadData  updateDisplay={this.displayClipName}
            clipVolumee={this.state.sliderVal}
            currentPadData={this.state.currentPadData} />

        <div className="controls-container">
            <p id="display">
              {this.state.display}
            </p>
					  <div className="volume-slider">
						    <input type="range" min="0" max="1" step="0.01" value={this.state.sliderVal} onChange={this.adjustVolume} />
					  </div>
					  <div className="control">
						  <p>Bank</p>
						  <div onClick={this.selectBank} className="select">
							  <div style={bankSlider} className="inner" />
						  </div>
					  </div>
        </div>
</div>
)
}
}

export default App;
