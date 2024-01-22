import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import PropTypes from 'prop-types';
import { Text, View, TouchableOpacity } from 'react-native';
import Colors from '../../theme';
import Title from '../Title';
import styles from './styles';


const changeLength = (value) => {
  return (value.length > 16) ? value.slice(0, 15) + '...'.toString() : value;
};

export const SettingsPersonalInfoItem = (props) => {
  const { itemName, value, last } = props;

  return (
    <TouchableOpacity style={[styles.blockStyles, { borderBottomWidth: last ? 1 : 0 }]}>
      <Title fontSize={16} style={styles.itemNameStyles}>{itemName}</Title>
      <View style={styles.valueBlockStyles}>
        <Text style={styles.valueStyles}>{changeLength(value)}</Text>
      </View>
      <Icon name="ios-arrow-forward" size={20} color={Colors.inactiveIcon} />
    </TouchableOpacity>
  );
};

export const SettingsAppInfoItem = (props) => {
  const { itemName, last, onPress } = props;

  return (
    <TouchableOpacity style={[styles.appBlockStyles, { borderBottomWidth: last ? 1 : 0 }]} onPress={onPress} >
      <Title fontSize={16} style={styles.appItemsStyles}>{itemName}</Title>
      <Icon name="ios-arrow-forward" size={20} color={Colors.inactiveIcon}/>
    </TouchableOpacity>
  );
};

export const SettingsDeleteInfoItem = (props) => {
  const { itemName, onPress, style } = props;

  return (
    <TouchableOpacity style={[styles.deleteBlockStyles, style]} onPress={onPress}>
      <Text fontSize={16} style={styles.deleteItemsStyles}>{itemName}</Text>
    </TouchableOpacity>
  );
};

SettingsPersonalInfoItem.propTypes = {
  itemName: PropTypes.string,
  value: PropTypes.string,
  last: PropTypes.bool,
};

SettingsPersonalInfoItem.defaultProps = {
  itemName: '',
  value: '',
  last: false,
};

SettingsAppInfoItem.propTypes = {
  itemName: PropTypes.string,
  last: PropTypes.bool,
  onPress: PropTypes.func
};

SettingsAppInfoItem.defaultProps = {
  itemName: '',
  last: false,
  onPress: null
};

SettingsDeleteInfoItem.propTypes = {
  itemName: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.objectOf(PropTypes.string),
    PropTypes.objectOf(PropTypes.number)
  ])
};

SettingsDeleteInfoItem.defaultProps = {
  itemName: '',
  onPress: () => null,
  style: ''
};