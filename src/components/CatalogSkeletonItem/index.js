import React from 'react';
import { View, StyleSheet } from 'react-native';
import Colors from '../../theme';

const styles = StyleSheet.create({
  catalogItemStyles: {
    width: '100%',
    height: 72,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textHeight: {
    width: '100%',
    height: 24,
    backgroundColor: Colors.skeleton
  }
});

export const CatalogSkeletonItem = () => {
  return (
    <View style={styles.catalogItemStyles}>
      <View style={styles.textHeight} />
    </View>
  );
};