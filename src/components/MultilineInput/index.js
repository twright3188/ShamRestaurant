import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, TextInput, Keyboard } from 'react-native';
import Paragraph from '../Paragraph';
import styles from './styles';
import Colors from '../../theme';

export const MultilineInput = (props) => {
  const { autoFocus, value, onChangeText, style, placeholder, title } = props;

  const onKeyPress = ({ nativeEvent }) => {
    if (nativeEvent.key === 'Enter') {
      Keyboard.dismiss();
    }
  };

  return (
      <View style={[styles.blockStyles, style]}>
        <View style={styles.labelIconBlock}>
          <Paragraph>{title}</Paragraph>
          <Icon name="ios-information-circle-outline" size={24} color={Colors.activeIcon}/>
        </View>
        <View style={{ width: '100%', flexWrap: 'wrap', paddingRight: 32, }}>
          <TextInput 
            textAlignVertical="top" 
            multiline
            value={value}
            onChangeText={onChangeText}
            autoFocus={autoFocus}
            returnKeyType='done'
            onKeyPress={onKeyPress}
            placeholder={placeholder}
            style={{ width: '100%', fontSize: 14, color: Colors.text }}
          />
        </View>
      </View>
  );
};

MultilineInput.propTypes = {
  autoFocus: PropTypes.bool,
  value: PropTypes.string,
  onChangeText: PropTypes.func,
  style: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.objectOf(PropTypes.number),
    PropTypes.objectOf(PropTypes.string)
  ]),
  placeholder: PropTypes.string,
  title: PropTypes.string
};

MultilineInput.defaultProps = {
  value: '',
  autoFocus: false,
  onChangeText: null,
  style: {},
  placeholder: '',
  title: ''
};