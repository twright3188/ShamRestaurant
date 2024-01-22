import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  buyButton: {
    minWidth: '50%',
    maxWidth: '51%',
    minHeight: 36,
    backgroundColor: Colors.coloredButtonBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  buyButtonText: {
    fontSize: 14,
    color: Colors.coloredButtonText,
    fontFamily: 'HelveticaNeue',
  },
  detailsButton: {
    minWidth: '50%',
    maxWidth: '51%',
    minHeight: 36,
    backgroundColor: Colors.transparentButtonBackgroundColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  detailsButtonText: {
    fontSize: 14,
    color: Colors.buttonText,
    fontFamily: 'HelveticaNeue',
  }
});

export const BuyButton = (props) => {
  const { children, disabled, text, ...otherProps } = props;

  return (
    <TouchableOpacity style={[styles.buyButton, { opacity: disabled ? 0.2 : 1 }]} {...otherProps}>
      <Text style={styles.buyButtonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export const DetailsButton = (props) => {
  const { children, disabled, text, ...otherProps } = props;

  return (
    <TouchableOpacity style={[styles.detailsButton, { opacity: disabled ? 0.2 : 1 }]} {...otherProps}>
      <Text style={styles.detailsButtonText}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

BuyButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

BuyButton.defaultProps = {
  children: '',
  disabled: false,
  text: ''
};

DetailsButton.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  text: PropTypes.string,
};

DetailsButton.defaultProps = {
  children: '',
  disabled: false,
  text: ''
};