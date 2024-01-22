import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  buttonBody: {
    minWidth: '100%',
    minHeight: 36,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: Colors.coloredButtonBackgroundColor,
  },
  buttonText: {
    color: Colors.buttonText,
    fontFamily: Colors.FontBaseMedium,
    fontWeight: '500',
    textAlign: 'center'
  }
});

function Button(props) {
  const { children, style, color, onPress, disabled, fontSize, ...otherProps } = props;

  return (
    <TouchableOpacity style={[styles.buttonBody, style, { opacity: disabled ? 0.2 : 1 }]} onPress={onPress} {...otherProps}>
      <Text
        style={[styles.buttonText, { color, fontSize }]} 
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  style: PropTypes.shape({ root: PropTypes.string }),
  color: PropTypes.string,
  onPress: PropTypes.func,
  disabled: PropTypes.bool,
  fontSize: PropTypes.number,
};

Button.defaultProps = {
  children: '',
  style: {},
  color: Colors.buttonText,
  onPress: null,
  disabled: false,
  fontSize: 16
};

export default Button;