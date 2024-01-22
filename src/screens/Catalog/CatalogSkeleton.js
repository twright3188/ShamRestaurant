import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../../components/Header/index';
import Title from '../../components/Title/index';
import Colors from '../../theme/index';
import { CatalogSkeletonItem } from '../../components/CatalogSkeletonItem'; 

const styles = StyleSheet.create({
  pageStyles: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.catalogBackground,
  },
  headerStyles: {
    width: '100%',
    backgroundColor: Colors.catalogBackground,
    padding: 15,
    paddingBottom: 9
  },
  headerBlockStyles: {
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  headerTitleStyles: {
    flex: 1,
  },
});

function CatalogSkeleton() {

  return (
    <ScrollView style={styles.pageStyles}>
      <View style={styles.headerStyles}>
        <Header style={styles.headerBlockStyles}>
          <Title style={styles.headerTitleStyles} color={Colors.coloredButtonBackgroundColor}>Catalog</Title>
          <TouchableOpacity>
            <Icon name="ios-chatbubbles" size={30} color={Colors.activeIcon} />
          </TouchableOpacity>
        </Header>
      </View>
      <CatalogSkeletonItem />
      <CatalogSkeletonItem />
      <CatalogSkeletonItem />
      <CatalogSkeletonItem />
      <CatalogSkeletonItem />
      <CatalogSkeletonItem />
      <CatalogSkeletonItem />
    </ScrollView>
  );
}

export default CatalogSkeleton;