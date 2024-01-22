import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Paragraph from '../Paragraph';
import styles from './styles';

export const DeliveryInput = (props) => {
  const { attributeName, value } = props;

  return (
    <View style={styles.blockStyles}>
      <Paragraph fontSize={16}>
        {attributeName}
      </Paragraph>
      <Paragraph fontSize={16} style={styles.valueStyles}>
        {value}
      </Paragraph>
    </View>
  );
};

DeliveryInput.propTypes = {
  attributeName: PropTypes.string,
  value: PropTypes.string
};

DeliveryInput.defaultProps = {
  attributeName: 'default',
  value: '22 auguse 2019'
};