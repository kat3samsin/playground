import React, {Component} from 'react';
export default class Controls extends Component {
constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.getProperties = this.getProperties.bind(this);
}

handleClick() {
    switch(this.props.title.toLowerCase()) {
        case 'login':
            window.open('https://connect.deezer.com/oauth/auth.php?app_id=341922&redirect_uri=https%3A//kat3samsin.github.io/playground/&perms=basic_access,email')
            break;
        case 'play':
            window.DZ.player.playRadio(169, 'artist');
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
   this.getProperties();
}

getProperties() {
    fetch('https://api.deezer.com/options')
        .then(response => response.json())
        .then(data => console.log(data))
}

render() {
    return (
        <button onClick = {this.handleClick.bind(this)}>
            {this.props.title}
        </button>
    );
  }
}