import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import Button from '../Button';
import Styles from './styles';
import Colors from '../../theme';

export const NewsItem = (props) => {
  const { image, children } = props;

  return (
    <View style={Styles.ticketStyles}>
      <Image style={Styles.newsItemImageBlockStyles} resizeMode="contain"
        source={{ uri: image }} />
      <View style={Styles.newsItemInfoBlockStyles}>
        {children}
      </View>
    </View>
  );
};

export const SkeletonNewsItem = (props) => {
  const { buttonText } = props;

  return (
    <View style={Styles.skeletonStyles}>
      <View style={[Styles.newsItemImageBlockStyles, Styles.newsItemSkeletonImageBlockStyles]}>
        <Icon name="md-bicycle" size={50} color={Colors.inactiveIcon} />
      </View>
      <View style={Styles.skeletonTitle} />
      <View style={Styles.skeletonText} />
      <Button disabled>
        {buttonText}
      </Button>
    </View>
  );
};

NewsItem.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};

NewsItem.defaultProps = {
  children: '',
  image: ''
}; 

SkeletonNewsItem.propTypes = {
  buttonText: PropTypes.string.isRequired,
};

export default NewsItem;