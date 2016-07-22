import React, {Component} from 'react';
import ReactDOM from 'react-dom';
require('./style.scss');

class Message extends Component {
  render(){
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

ReactDOM.render(<Message title="Hello Major Tom!" message="Take your protein pills and put your helmet on!" />, document.getElementById('react-mount'));
