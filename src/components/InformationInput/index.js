import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TextInput, TouchableOpacity } from 'react-native';
import Paragraph from '../Paragraph';
import styles from './styles';
import Colors from '../../theme';

export const InformationInput = (props) => {
  const { attributeName, isModalOpen, iconName, value, fontSize, phoneIcon, multiline, setModalStatus, disabledIcon } = props;
  const [focus, setFocucStatus] = useState(false);

  if (phoneIcon) {
    return (
      <View style={styles.inputBlockStyles}>
        <View style={styles.labelPlaceholderBlockStyles}>
          <Paragraph style={focus || value !== '' ? styles.labelStyle : styles.placeholderStyles}>
            {attributeName}
          </Paragraph>
          <TextInput {...props} style={[styles.inputStyles, { fontSize }]} onFocus={() => setFocucStatus(true)} returnKeyType="done" onBlur={() => value === '' ? setFocucStatus(false) : null} />
        </View>
        <TouchableOpacity onPress={() => {setModalStatus(!isModalOpen);}} style={styles.touchableOpacityBlockStyles} disabled={disabledIcon}>
          <View style={styles.iconBlockStyles}>
            <Icon name={iconName} size={32} color={Colors.inactiveIcon} style={styles.iconStyles}/>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    
    <View style={[styles.inputBlockStyles, multiline ? styles.inputMultilineStyles : null]}>
      <View style={styles.labelPlaceholderBlockStyles}>
        <Paragraph style={focus || value !== '' ? styles.labelStyle : styles.placeholderStyles}>
          {attributeName}
        </Paragraph>
        <TextInput multiline={multiline} {...props} style={[styles.inputStyles, { fontSize }]} onFocus={() => setFocucStatus(true)} onBlur={() => value === '' ? setFocucStatus(false) : null}  returnKeyType="done" />
      </View>
    </View>
  );
};

InformationInput.propTypes = {
  attributeName: PropTypes.string,
  setModalStatus: PropTypes.func,
  phoneIcon: PropTypes.bool,
  isModalOpen: PropTypes.bool,
  switcher: PropTypes.bool,
  options: PropTypes.instanceOf(Object),
  fontSize: PropTypes.number,
  value: PropTypes.string,
  iconName: PropTypes.string,
  multiline: PropTypes.bool,
  disabledIcon: PropTypes.bool
};

InformationInput.defaultProps = {
  isModalOpen: false,
  setModalStatus: null,
  switcher: false,
  options: {},
  fontSize: 20,
  attributeName: '',
  value: '',
  phoneIcon: false,
  iconName: '',
  multiline: false,
  disabledIcon: false
};


