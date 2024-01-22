import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  captionText: {
    position: 'relative',
    width: '100%',
    color: 'black',
    
    fontFamily: Colors.FontBaseBold,
    fontWeight: 'bold',
  }
});

function GreenTitle(props) {
  const { children, fontSize, style } = props;

  return (
    <Text style={[styles.captionText, { fontSize, lineHeight: fontSize * 1.2 }, style]}>{children}</Text>
  );
}

GreenTitle.propTypes = {
  children: PropTypes.node,
  fontSize: PropTypes.number,
  style: PropTypes.objectOf(PropTypes.object)
};

GreenTitle.defaultProps = {
  children: '',
  fontSize: 20,
  style: {}
};

export default GreenTitle;