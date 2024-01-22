import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  captionText: {
    position: 'relative',
    width: '100%',
    color: Colors.caption,
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: Colors.FontBaseBold,
    fontWeight: 'bold',
    flexWrap: 'wrap'
  }
});

function Title(props) {
  const { children, fontSize, style } = props;

  return (
    <Text style={[styles.captionText, { fontSize , lineHeight: fontSize * 1.142 }, style]} numberOfLines={1}>{children}</Text>
  );
}

Title.defaultProps = {
  fontSize: 35,
  children: '',
  
  style: {}
};

Title.propTypes = {
  fontSize: PropTypes.number,
  children: PropTypes.node,
  style: PropTypes.shape({ root: PropTypes.string })
};

export default Title;