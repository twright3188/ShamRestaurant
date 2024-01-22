import React from 'react';
import PropTypes from 'prop-types';
import { View, Switch, Platform } from 'react-native';
import Paragraph from '../Paragraph';
import Colors from '../../theme';
import styles from './styles';

export const SwitchField = (props) => {
  const { text, value, onChange, style } = props;

  return (
    <View style={[styles.blockStyles, style]}>
      <Paragraph style={styles.textStyles}>{text}</Paragraph>
      <Switch value={value} onChange={onChange} trackColor={{ false: Colors.inactiveSwitchBackgroundColor, true: Colors.activeSwitchBackgroundColor }} thumbColor={Platform.OS === 'android' ? '#fff' : ''} ios_backgroundColor={Colors.inactiveSwitchBackgroundColor} style={value ? [styles.switcherStyles, { borderWidth: 0 }] : styles.switcherStyles} />
    </View>
  );
};

SwitchField.propTypes = {
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func,
  text:  PropTypes.string,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number),
    PropTypes.objectOf(PropTypes.string)
  ])
};

SwitchField.defaultProps = {
  onChange: null,
  text: '',
  style: {}
};

