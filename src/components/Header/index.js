import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  headerStyles: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 24
  }
});

function Header(props) {
  const { children, style } = props;

  return (
    <View style={[styles.headerStyles, style]}>
      {children}
    </View>
  );
}

Header.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({ root: PropTypes.string })
};

Header.defaultProps = {
  children: '',
  style: {}
};

export default Header;