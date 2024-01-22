import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, StyleSheet, View } from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Colors from '../../theme/index';
import { CatalogSkeletonCardsItem, GridCatalogSkeletonCardsItem } from '../../components/CatalogSkeletonCardsItem.js'; 

const styles = StyleSheet.create({
  pageStyles: {
    width: '100%',
    height: '100%',
    backgroundColor: Colors.catalogCardsBackgroundColor,
    padding: 15,
    paddingTop: 8
  },
  gridPageStyles: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.catalogCardsBackgroundColor,
  },
  gridView: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  headerStyles: {
    paddingLeft: 0,
    paddingRight: 0,
    alignItems: 'flex-start',
  },
  gridHeaderStyles: {
    paddingLeft: 5,
    paddingRight: 5,
    alignItems: 'flex-start',
  },
  headerTitleStyles: {
    flex: 4,
    height: '100%',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  titleStyles: {
    backgroundColor: Colors.skeleton,
    width: '100%',
    height: 24
  }
});

export default function SkeletonCatalogCards(props) {
  const { name } = props;

  return (
    <ScrollView style={styles.pageStyles}>
      <Header style={styles.headerStyles}>
        <Title fontSize={name.length > 13 ? 25 : 35} style={styles.headerTitleStyles}>{name}</Title>
        <Icon name="ios-chatbubbles" size={30} color={Colors.activeIcon} />
      </Header>
      <CatalogSkeletonCardsItem />
    </ScrollView>
  );
}

export const GridSkeletonCards = (props) => {
  const { name } = props;

  return (
    <ScrollView style={styles.gridPageStyles}>
      <Header style={styles.gridHeaderStyles}>
        <Title fontSize={name.length > 13 ? 25 : 35} style={styles.headerTitleStyles}>{name}</Title>
        <Icon name="ios-chatbubbles" size={30} color={Colors.activeIcon} />
      </Header>
      <View style={styles.gridView}>
        <GridCatalogSkeletonCardsItem />
        <GridCatalogSkeletonCardsItem />
        <GridCatalogSkeletonCardsItem />
        <GridCatalogSkeletonCardsItem />
      </View>
      
    </ScrollView>
  );
};

SkeletonCatalogCards.propTypes = {
  name: PropTypes.string.isRequired
};

GridSkeletonCards.propTypes = {
  name: PropTypes.string.isRequired
};
