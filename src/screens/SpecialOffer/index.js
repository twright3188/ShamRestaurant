import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Colors from '../../theme';
import CatalogCardsItem from '../../components/CatalogCards';
import Paragraph from '../../components/Paragraph';
import { ActivePrice, OldPrice } from '../../components/Price';
import { BuyButton, DetailsButton } from '../../components/CatalogCardButtons';
import I18n from 'react-native-i18n';
import  FooterBottom from '../../components/Footer';
import styles from './styles';

const items = [
  {
    id: 1,
    name: 'Nader',
    description: 'We will pick it up and deliver it after 2:00 p.m.',
    discountPrice: '$2879.99',
    originalPrice: '$4199.99',
    image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/prod176527_Gloss%20Black-Rasta_NE_01?wid=960&hei=498',
  },
  {
    id: 2,
    name: 'Nukeproof Mega 275 Alloy Pro Bike GX Eagle 2019',
    description: 'We will pick it up and deliver it after 2:00 p.m.',
    discountPrice: '$2399.99',
    originalPrice: '$3699.99',
    image: 'https://media.chainreactioncycles.com/is/image/ChainReactionCycles/prod179053_Black%20-%20Grey_NE_01?wid=960&hei=498',
  },
];

function SpecialOfferContainer(props) {
    const {navigation} = props
    const [Reloading, setReloading] = React.useState(false);
    props.navigation.addListener('didFocus', (playload)=>{
      setReloading(!Reloading)
     });
    return (
      <View style={{width:'100%', height:'100%'}}>
      <ScrollView style={styles.pageStyles}>
        <Header style={styles.headerStyles}>
    <Title style={styles.headerTitleStyles}>{I18n.t("special_offer")}</Title>
          <View style={styles.headerIconsBlockStyles}>
            <TouchableOpacity><Icon name="ios-options" size={30} color={Colors.activeIcon} /></TouchableOpacity>
            <TouchableOpacity>
              {/* <Icon name="ios-chatbubbles" size={30} color={Colors.activeIcon} style={styles.chatsIconStyle} /> */}
            </TouchableOpacity>
          </View>
        </Header>
        {items.map(item => (
          <CatalogCardsItem key={item.id} image={item.image}>
            <View style={styles.titleBlockStyles}>
              <Title fontSize={20} style={styles.titleStyles}>{item.name}</Title>
            </View>
            <Paragraph fontSize={14} color={Colors.catalogCardsItemParagraphColor}>
              {item.description}
            </Paragraph>
            {/* <View style={styles.priceBlockStyles}>
              <ActivePrice fontSize={35} price={item.discountPrice ? item.discountPrice  : item.originalPrice} />
              {item.discountPrice ? <OldPrice fontSize={20} price={item.originalPrice} /> : null}
            </View>
            <View style={styles.buttonStyles}>
              <BuyButton onPress={() => props.navigation.navigate('Cart', { ...item })} text='Buy' />
              <DetailsButton onPress={() => props.navigation.navigate('CatalogCardDetails', { ...item })} text='More details' />
            </View> */}
          </CatalogCardsItem>
        ))}
        </ScrollView>
        <FooterBottom 
        nav={navigation}
        screen={"SpecialOffer"}
        />
      </View>
    );
}

SpecialOfferContainer.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};


export default SpecialOfferContainer;
