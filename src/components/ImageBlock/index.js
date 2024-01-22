import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Paragraph from '../Paragraph';
import styles from './styles';

export const DeliveryImageBlock = (props) => {
  const { image, result, title } = props;

  return (
    <View style={styles.blockStyles}>
      <Image style={styles.imageStyles} source={{ uri: image }}  />
      <View style={styles.textBlockStyles}>
        <Paragraph fontSize={16} style={styles.attributeStyles}>{title}</Paragraph>
        <Paragraph fontSize={16} style={styles.resultStyles}>{result}</Paragraph>
      </View>
    </View>
  );
};

DeliveryImageBlock.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  result: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.object,
    PropTypes.string,
  ]).isRequired
};