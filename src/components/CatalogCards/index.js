import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import styles from './styles';
import FastImage from 'react-native-fast-image'

export default function CatalogCardsItem(props) {
  const { image, children } = props;
  return (
    <View style={styles.catalogCardsItemStyles}>
      <FastImage style={styles.catalogCardsItemImageBlockStyles} resizeMode="stretch"
          source={{ uri: image }} />
      <View style={styles.catalogCardsItemInfoBlockStyles}>
        {children}
      </View>
    </View>
  );
};

export const GridCatalogCardsItem = (props) => {
  const { image, children } = props;

  return (
    <View style={styles.gridCatalogCardsItemStyles}>
      <Image style={styles.gridCatalogCardsItemImageBlockStyles} resizeMode="stretch"
          source={{ uri: image }} />
      <View style={styles.gridCatalogCardsItemInfoBlockStyles}>
        {children}
      </View>
    </View>
  );
};

GridCatalogCardsItem.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};

GridCatalogCardsItem.defaultProps = {
  children: '',
  image: '',
};

CatalogCardsItem.propTypes = {
  children: PropTypes.node,
  image: PropTypes.string,
};

CatalogCardsItem.defaultProps = {
  children: '',
  image: '',
};
