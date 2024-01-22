import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, StyleSheet, TouchableOpacity, LayoutAnimation } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Colors from '../../theme';
import CatalogBlock from '../../components/CatalogBlock';
import CatalogSkeleton from './CatalogSkeleton';
import I18n from 'react-native-i18n';
import  FooterBottom from '../../components/Footer';
import {GetPlatesAPI} from '../../services/APIs'
import Global from '../../Global'
import Constant from '../../Constant';
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

function CategoryListContainer(props) {
  const { navigation } = props;
  const [loaded, setLoadedStatus] = useState(false);
  const [Reloading, setReloading] = React.useState(false);
  props.navigation.addListener('didFocus', (playload)=>{
    setReloading(!Reloading)
 });
  // useEffect(() => {
  //   if (!loaded) {
  //     setTimeout(() => {
  //       setLoadedStatus(true);
  //       LayoutAnimation.easeInEaseOut();
  //     }, 500);
  //   }
  // }, [loaded]);

  // if (!loaded) {
  //   return <CatalogSkeleton />;
  // }

  return (
   <View style={{width:'100%', height:'100%'}}>
    <ScrollView style={styles.pageStyles}>
      <View style={styles.headerStyles}>
        <Header style={styles.headerBlockStyles}>
           <Title style={styles.headerTitleStyles} >{I18n.t("Menu")}</Title>
          <TouchableOpacity>
            {/* <Icon name="ios-chatbubbles" size={30} color={Colors.activeIcon} /> */}
          </TouchableOpacity>
        </Header>
      </View>
      {Global.categories.map((category) => (
        <CatalogBlock
          key={category.id}
          image = {Constant.base_url + category.image_url}
          onPress={() =>
            GetPlatesAPI(category.id, {}, (result)=>{
              navigation.push('CategoryList', {...category, items:result });
            })}>
            {category.name}
          </CatalogBlock>
      ))}
    </ScrollView>
     <FooterBottom 
     nav={navigation}
     screen={"Catalog"}
    />
    </View>
  );
}

CategoryListContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    push: PropTypes.func
  }).isRequired
};

export default CategoryListContainer;
