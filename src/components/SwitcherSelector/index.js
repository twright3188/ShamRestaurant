import React from 'react';
import PropTypes from 'prop-types';
import SwitchSelector from 'react-native-switch-selector';
import styles from './styles';
import Colors from '../../theme';

export const SwitcherSelector = (props) => {
  const { options, disabled, thirdPerson } = props;
  return (
    <SwitchSelector
      options={options}
      initial={thirdPerson ? 1 : 0}
      borderRadius={5}
      buttonColor={Colors.switcherColor}
      borderColor={Colors.switcherColor}
      textColor={Colors.switcherColor}
      height={32}
      style={styles.switcherStyles}
      disabled={disabled}
    />
  );
};

SwitcherSelector.propTypes = {
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
  disabled: PropTypes.bool,
  thirdPerson: PropTypes.bool,
};

SwitcherSelector.defaultProps = {
  disabled: false,
  thirdPerson: false
};
