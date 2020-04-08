import React from 'react';
import {activeStyle, inactiveStyle} from './style';

class PlaySound extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      panelStyle: inactiveStyle
    }
  this.handleKeyPress = this.handleKeyPress.bind(this);
  this.playSound = this.playSound.bind(this);
  this.activatePad = this.activatePad.bind(this);
  }

componentDidMount() {
  document.addEventListener('keydown', this.handleKeyPress);
}
componentWillUnmount() {
  document.removeEventListener('keydown', this.handleKeyPress);
}

handleKeyPress(e){
  if (e.keyCode === this.props.keyCode){
    this.playSound();
  }
}
activatePad(){
  this.state.panelStyle.boxShadow === '0 3px orange' ?
  this.setState ({panelStyle: inactiveStyle}) : this.setState({panelStyle: activeStyle})
}
playSound(e) {
  const sound = document.getElementById(this.props.keyTrigger);
  sound.currentTime = 0;
  sound.play();
  this.activatePad();
  setTimeout(() => this.activatePad(), 100);
  this.props.updateDisplay(this.props.clipId.replace(/-/g, ' '));
}

render(){
  return(
    <div id={this.props.clipId}
    onClick={this.playSound}
    className='drum-pad'
    style={this.state.panelStyle}>
    <audio className='clip'
    id={this.props.keyTrigger}
    src={this.props.clip}></audio>
    {this.props.keyTrigger}
    </div>
  )
}
}

export default PlaySound;