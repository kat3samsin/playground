import React, {Component} from 'react';
export default class DZController extends Component {
constructor(props) {
    super(props);
}

componentDidMount() {
    window.DZ.init({
        appId  : '341922',
        channelUrl : 'https://developers.deezer.com/examples/channel.php',
        player : {
			onload : function() { }
		}
    });
}

render() {
    return (<div id="dz-root"></div>);
  }
}