import NextLink from 'next/link';
import React from 'react';
import { Text } from 'react-native-web';

// https://github.com/zeit/next.js#with-link
// Combines the Next.js <Link> with React Native's <Text> component.
// Enables use like this:
//
//    <Link
//      href={href}
//      prefetch
//      style={styles.enhance}
//     >
//       Link text
//    </Link>
//
export default Link extends React.Component {
  static propTypes = {
    ...NextLink.propTypes,
    ...Text.propTypes
  }
  
  blur() {
    this._textRef.blur();
  }
  
  focus() {
    this._textRef.focus();
  }
  
  setNativeProps(props) {
    this._textRef.setNativeProps(props)
  }
  
  _setRef = (c) => {
    this._textRef = c;
  }
  
  render() {
    const {
      as,
      passHref, // ignore
      scroll,
      shallow,
      replace,
      ...rest
    } = this.props;
    
    return (
      <NextLink
        href={href}
        passHref={true}
        prefetch={prefetch}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
      >
        <Text
          accessibilityRole='link'
          ref={this._setRef}
          {...rest}
        />
      </NextLink>
    )
  }
}
