import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import I18n from 'react-native-i18n';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Colors from '../../theme';
import {
    Container,
    Contenet,
    Footer,
    Button,
    FooterTab,   
  } from "native-base";
const styles = StyleSheet.create({
  selectText:{fontSize:12, color:Colors.activeIcon},
  unselectText:{fontSize:12, color:Colors.inactiveIcon}
});
const ICON_SET = Platform.select({
    ios: {
      newsIconName: 'home',
      catalogIconName: 'th-list',
      specialOfferIconName: 'ios-gift',
      cartIconName: 'shopping-cart',
      settingsIconName: 'cog',
      backButtonIconName: 'ios-arrow-back',
      iconSize: 26,
      backButtonIconSize: 18
    },
    android: {
      newsIconName: 'newspaper-o',
      catalogIconName: 'th-list',
      specialOfferIconName: 'ios-gift',
      cartIconName: 'shopping-cart',
      settingsIconName: 'cog',
      backButtonIconName: 'ios-arrow-back',
      iconSize: 26,
      backButtonIconSize: 18
    }
  });
  
  const renderTabBarIcon = (name, icon, Component, tintColor) => (
    <Component name={name} color={tintColor} size={icon} />
  );
function FooterBottom(props) {
  
  return (
    <Footer style={{
        backgroundColor:'#fff',
        borderTopColor:Platform.select({'android':'#808080', 'ios':'#808080'}) , 
        borderTopWidth:Platform.select({'android':2, 'ios':0}),
        height:Platform.select({'android':50, 'ios':50})
        }}>
    <FooterTab>
        <Button style={{backgroundColor:'#fff'}}  transparent onPress = {()=>props.nav.navigate("News")}>
          {renderTabBarIcon(ICON_SET.newsIconName ,ICON_SET.iconSize, FontAwesome,  (props.screen == "News")?Colors.activeIcon:Colors.inactiveIcon)}
          <Text style={(props.screen == "News")?styles.selectText:styles.unselectText}>{I18n.t("Home")}</Text>
        </Button>
        <Button style={{backgroundColor:'#fff'}}  transparent onPress = {()=>{props.nav.navigate("Catalog")}}>
          {renderTabBarIcon(ICON_SET.catalogIconName ,ICON_SET.iconSize, FontAwesome,  (props.screen == "Catalog")?Colors.activeIcon:Colors.inactiveIcon)}
          <Text style={(props.screen == "Catalog")?styles.selectText:styles.unselectText}>{I18n.t("Menu")}</Text>
        </Button>
        <Button style={{backgroundColor:'#fff'}}  transparent onPress = {()=>props.nav.navigate("SpecialOffer")}>
          {renderTabBarIcon(ICON_SET.specialOfferIconName ,ICON_SET.iconSize, Icon,  (props.screen == "SpecialOffer")?Colors.activeIcon:Colors.inactiveIcon)}
          <Text style={(props.screen == "SpecialOffer")?styles.selectText:styles.unselectText}>{I18n.t("Offers")}</Text>
        </Button>   
        <Button style={{backgroundColor:'#fff'}}  transparent onPress = {()=>props.nav.navigate("Cart")}>
          {renderTabBarIcon(ICON_SET.cartIconName ,ICON_SET.iconSize, FontAwesome,  (props.screen == "Cart")?Colors.activeIcon:Colors.inactiveIcon)}
          <Text style={(props.screen == "Cart")?styles.selectText:styles.unselectText}>{I18n.t("Cart")}</Text>
        </Button>   
        <Button style={{backgroundColor:'#fff'}}  transparent onPress = {()=>props.nav.navigate("Settings")}>
          {renderTabBarIcon(ICON_SET.settingsIconName ,ICON_SET.iconSize, FontAwesome,  (props.screen == "Setting")?Colors.activeIcon:Colors.inactiveIcon)}
          <Text style={(props.screen == "Setting")?styles.selectText:styles.unselectText}>{I18n.t("Setting")}</Text>
        </Button>         
    </FooterTab>
    </Footer>
  );
}


export default FooterBottom;