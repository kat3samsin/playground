import React, {Component} from 'react';
export default class Controls extends Component {
constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
}

handleClick() {
    console.log(this.props.title)
    switch(this.props.title.toLowerCase()) {
        case 'play':
            window.DZ.player.playTracks([3135556, 1152226]);
            break;
        case 'pause':
            window.DZ.player.pause();
            break;
        case 'next':
            window.DZ.player.next();
            break;
        case 'prev':
            window.DZ.player.prev();
            break;
    }
}
render() {
    return (
        <button onClick = {this.handleClick.bind(this)}>
            {this.props.title}
        </button>
    );
  }
}