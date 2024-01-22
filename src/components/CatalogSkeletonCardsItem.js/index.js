import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import { BuyButton, DetailsButton } from '../CatalogCardButtons';
import Colors from '../../theme';

const styles = StyleSheet.create({
  skeletonStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    shadowColor: Colors.skeletShadowColor,
    borderRadius: 16,
    backgroundColor: Colors.catalogBackground,
    padding: 15,
    marginBottom: 16,
  },
  gridSkeletonStyles: {
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '46%',
    maxWidth: '50%',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 1,
    shadowOpacity: 0.2,
    shadowColor: Colors.skeletShadowColor,
    borderRadius: 16,
    backgroundColor: Colors.catalogBackground,
    padding: 15,
    marginBottom: 16,
    marginHorizontal: 5,
  },
  skeletonTitle: {
    backgroundColor: Colors.skeletonBackgroundColor,
    width: '100%',
    height: 24,
    marginBottom: 8
  },
  skeletonDeliveryText: {
    backgroundColor: Colors.skeletonBackgroundColor,
    width: '100%',
    height: 20,
    marginBottom: 8
  },
  skeletonPricesText: {
    backgroundColor: Colors.skeletonBackgroundColor,
    width: '100%',
    height: 40,
    marginBottom: 16
  },  
  newsItemImageBlockStyles: {
    width: '100%',
    height: 345,
    borderTopRightRadius: 16, 
    borderTopLeftRadius: 16, 
    overflow: 'hidden'
  },
  newsItemSkeletonImageBlockStyles: {
    alignItems: 'center', 
    justifyContent: 'center', 
    borderBottomColor: Colors.skeletonBorderBottomColor
  },
  gridSkeletonImageBlockStyles: {
    width: '100%',
    height: 168,
    borderTopRightRadius: 16, 
    borderTopLeftRadius: 16, 
    overflow: 'hidden'
  },
  newsItemSkeletonImageStyles: {
    width: 50, 
    height: 50, 
  },
  buttonStyles: {
    flexDirection: 'row', 
    alignItems: 'flex-end'
  }
});

export const CatalogSkeletonCardsItem = () => {
  return (
    <View style={styles.skeletonStyles}>
      <View style={[styles.newsItemImageBlockStyles, styles.newsItemSkeletonImageBlockStyles]}>
        <Icon name="ios-bicycle" size={50} color={Colors.inactiveIcon} />
      </View>
      <View style={styles.skeletonTitle} />
      <View style={styles.skeletonDeliveryText} />
      <View style={styles.skeletonPricesText} />
      <View style={styles.buttonStyles}>
        <BuyButton disabled>
          Buy
        </BuyButton>
        <DetailsButton disabled>
          More details
        </DetailsButton>
      </View>
    </View>
  );
};

export const GridCatalogSkeletonCardsItem = () => {
  return (
    <View style={[styles.gridSkeletonStyles]}>
      <View style={[styles.gridSkeletonImageBlockStyles, styles.newsItemSkeletonImageBlockStyles]}>
        <Icon name="ios-restaurant" size={50} color={Colors.inactiveIcon} />
      </View>
      <View style={styles.skeletonTitle} />
      <View style={styles.skeletonPricesText} />
    </View>
  );
};
