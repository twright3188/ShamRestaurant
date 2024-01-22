import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Colors from '../../theme';
import { SkeletonNewsItem } from '../../components/News';

const styles = StyleSheet.create({
  pageStyles: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.background,
    padding: 15,
  },
  headerStyles: {
    paddingLeft: 0,
    paddingRight: 0,
    flexDirection: 'row', 
    justifyContent: 'space-around',
  },
  headerTitleStyles: {
    flex: 1,
  },
  titleStyles: {
    backgroundColor: Colors.skeleton,
    width: '100%',
    height: 24
  }
});

function NewsSkeleton() {

  return (
    <ScrollView style={styles.pageStyles}>
      <Header style={styles.headerStyles}>
        <Title style={styles.headerTitleStyles}>News</Title>
        <Icon name="ios-chatbubbles" size={30} color={Colors.activeIcon} />
      </Header>
      <SkeletonNewsItem buttonText='View products' />
      <SkeletonNewsItem buttonText='View products' />
      <SkeletonNewsItem buttonText='View products' />
    </ScrollView>
  );
}

export default NewsSkeleton;