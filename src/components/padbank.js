import React from 'react';
import PlaySound from './play';

class PadData extends React.Component{
  render() {
    var padData;
    padData = this.props.currentPadData.map((drumObj, i, padDataArr) => {
      return (
        <PlaySound clipId={padDataArr[i].id}
                   clip ={padDataArr[i].url}
                   keyTrigger ={padDataArr[i].keyTrigger}
                   keyCode={padDataArr[i].keyCode}
                   key={padDataArr[i].keyTrigger}
                   updateDisplay={this.props.updateDisplay} />
      )
    })
    return(
      <div className='pad-bank'>
        {padData}
      </div>
    )
  }
}
export default PadData;