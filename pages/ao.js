import React from 'react';
import Router from 'next/router';
import { Text } from 'react-native-web';

// https://github.com/zeit/next.js#imperatively
export default Link extends React.Component {
  static propTypes = Text.propTypes;
  
  blur() {
    this._textRef.blur();
  }
  
  focus() {
    this._textRef.focus();
  }
  
  setNativeProps(props) {
    this._textRef.setNativeProps(props)
  }
  
  _handlePress = () => {
    Router.push(this.props.href);
  }

  _setRef = (c) => {
    this._textRef = c;
  }
  
  render() {
    return (
      <Text
        accessibilityRole='link'
        onPress={this._handlePress}
        ref={this._setRef}
        {...rest}
      />
    )
  }
}
