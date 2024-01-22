import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  activePriceStyles: {
    color: Colors.discountPriceColor,
    fontFamily: Colors.FontBaseBold,
    fontWeight: 'bold',
    // marginRight: 22,
  },
  oldPriceStyles: {
    fontFamily: Colors.FontBaseBold,
    color: Colors.originalPriceColor, 
    textDecorationLine: 'line-through',
    marginBottom: 4
  }
});

export const ActivePrice = (props) => {
  const { fontSize, price, style } = props;

  return (
    <Text style={[styles.activePriceStyles, style, { fontSize , lineHeight: fontSize * 1.142 }]}>{price}</Text>
  );
};

export const OldPrice = (props) => {
  const { fontSize, price } = props;

  return (
    <Text style={[styles.oldPriceStyles, { fontSize , lineHeight: fontSize * 1.2 }]}>{price}</Text>
  );
};

ActivePrice.propTypes = {
  fontSize: PropTypes.number,
  price: PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.number)
  ])
};

ActivePrice.defaultProps = {
  fontSize: 35,
  price: 'Free',
  style: ''
};

OldPrice.propTypes = {
  fontSize: PropTypes.number,
  price: PropTypes.string
};

OldPrice.defaultProps = {
  fontSize: 20,
  price: null
};