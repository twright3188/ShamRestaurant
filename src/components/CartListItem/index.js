import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  inputBlockStyles: {
    flexDirection:'row', 
    width: '100%', 
    height: 52, 
    borderBottomColor: 'rgba(34, 38, 36, 0.15)',
    paddingHorizontal: 15,
    borderBottomWidth: 1, 
    backgroundColor: Colors.cartItemBackgroundColor, 
    alignItems: 'center' 
  }
});

export const CartListItem = (props) => {
  const { children, style } = props;

  return(
    <View style={[styles.inputBlockStyles, style]}>
      {children}
    </View>
  );
};

CartListItem.propTypes = {
  style: PropTypes.shape({ root: PropTypes.string }),
  children: PropTypes.node.isRequired
};

CartListItem.defaultProps = {
  style: {}
};