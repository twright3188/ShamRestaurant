import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';

export const ButtonIcon = (props) => {
  const { name, size, color } = props;

  return (
    <TouchableOpacity>
      <Icon name={name} size={size} color={color} />
    </TouchableOpacity>
  );
};

ButtonIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired
};

