import React, { Component , PropTypes} from 'react';
import { requireNativeComponent} from 'react-native';
var ShareBt = requireNativeComponent('shareBt', ZKShareBt);


var ShareBt = requireNativeComponent('shareBt', ZKShareBt);

export default class ZKShareBt extends Component {
  render() {
    return (
      <ShareBt {...this.props} />
    );
  }
}














