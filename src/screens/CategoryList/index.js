import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, LayoutAnimation, TouchableOpacity, Modal } from 'react-native';
import { useAsyncStorage } from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Colors from '../../theme/index';
import CatalogCardsItem, { GridCatalogCardsItem } from '../../components/CatalogCards';
import { ActivePrice, OldPrice } from '../../components/Price';
import { BuyButton, DetailsButton } from '../../components/CatalogCardButtons';
import SkeletonCatalogCards, { GridSkeletonCards } from './SkeletonCatalogCards';
import { SwitchField } from '../../components/SwitchField';
import I18n from 'react-native-i18n';
import styles from './styles';
import Constant from '../../Constant';

// потом эти данные будут приходить из БД
// const items = [
//   { 
//     id: 1, 
//     name: 'Falafel Salad', 
//     description: 'We will pick it up and deliver it after 2:00 p.m.',
//     //discountPrice: '$2879.99',
//     originalPrice:5,
//     image: 'https://simple-veganista.com/wp-content/uploads/2016/05/baked-falafel-salad-two-creamy-dressings.jpg',
//     gender: 'Unisex',
//     material: 'Carbon',
//     speed: '12 Speed'
//   },
//   { 
//     id: 2, 
//     name: 'Nukeproof Mega 275 Alloy Pro Bike GX Eagle 2019', 
//     description: 'We will pick it up and deliver it after 2:00 p.m.',
//     //discountPrice: '$2399.99',
//     originalPrice:5,
//     image: 'https://assets.bonappetit.com/photos/57ad266cf1c801a1038bc9d8/master/w_2000,h_1781,c_limit/roasted-and-charred-broccoli-with-peanuts.jpg',
//     gender: 'Unisex',
//     material: 'Carbon',
//     speed: '12 Speed'
//   },
//   { 
//     id: 3, 
//     name: 'Nukeproof Mega 290 Alloy Pro Bike GX Eagle 2019', 
//     description: 'We will pick it up and deliver it after 2:00 p.m.',
//     //discountPrice: '$2499.99',
//     originalPrice:5,
//     image: 'https://assets.bonappetit.com/photos/57ad266cf1c801a1038bc9d8/master/w_2000,h_1781,c_limit/roasted-and-charred-broccoli-with-peanuts.jpg',
//     gender: 'Unisex',
//     material: 'Carbon',
//     speed: '12 Speed'
//   },
//   { 
//     id: 4, 
//     name: 'Nukeproof Dissent 290 RS DH Bike (XO1) 2020', 
//     description: 'We will pick it up and deliver it after 2:00 p.m.',
//     // discountPrice: '$3200.99',
//     originalPrice:5,
//     image: 'https://assets.bonappetit.com/photos/57ad266cf1c801a1038bc9d8/master/w_2000,h_1781,c_limit/roasted-and-charred-broccoli-with-peanuts.jpg',
//     gender: 'Unisex',
//     material: 'Carbon',
//     speed: '12 Speed'
//   },
// ];

function CatalogCard(props) {
  
  const { navigation: { state: { params: { name } } } } = props;
  const { navigation: { state: { params: { items } } } } = props;
  const [loaded, setLoadedStatus] = useState(false);
  const [isModalOpen, setModalStatus] = useState(false);
  const { getItem, setItem } = useAsyncStorage('@storage_key');
  const [isLargePhoto, setLargePhotoStatus] = useState(async () => {
    const item = await getItem();
    setLargePhotoStatus(JSON.parse(item));
    return item || true; 
  });

  const readItemFromStorage = async () => {
      const item = await getItem();
      setLargePhotoStatus(JSON.parse(item));
  };


  const writeItemToStorage = async newValue => {
      await setItem(newValue.toString());
      setLargePhotoStatus(JSON.parse(newValue));
  }; 

  // useEffect(() => {
  //   if (!loaded) {
  //     // call firebase loading by categoryId
  //     setTimeout(() => {
  //       readItemFromStorage();
  //       setLoadedStatus(true);
  //       LayoutAnimation.easeInEaseOut();
  //     }, 500);
  //   }
  // }, [loaded]);

  // if (!loaded && !isLargePhoto) {
  //   return <GridSkeletonCards name={name} />;
  // }
  // if (!loaded && isLargePhoto) {
  //   return <SkeletonCatalogCards name={name} />;
  // }


  return (
    <ScrollView style={styles.pageStyles}>
      <Header style={styles.headerStyles}>
        <Title fontSize={name.length > 13 ? 25 : 35} style={styles.headerTitleStyles}>{name}</Title>
        <View style={styles.headerIconsBlockStyles}>
            <TouchableOpacity><Icon name="ios-options" size={30} color={Colors.activeIcon} onPress={() => setModalStatus(true)}/></TouchableOpacity>
            <TouchableOpacity>
              <Icon name="ios-chatbubbles" size={30} color={Colors.activeIcon} style={styles.chatIconStyles} />
            </TouchableOpacity>
        </View>
      </Header>
      <View style={isLargePhoto ? styles.listView : styles.gridView }>
        {isLargePhoto 
          ? 
          items.map(item => (
          <CatalogCardsItem key={item.id} image={Constant.base_url + item.image_url}>
            <View style={styles.titleBlockStyles}>
              <Title fontSize={20} style={styles.titleStyles}>{item.name}</Title>
            </View>
            <View style={styles.priceBlockStyles}>
              <ActivePrice fontSize={35} price={item.discountPrice ? item.discountPrice  : item.originalPrice} style={{ marginRight: 24 }} />
              {item.discountPrice ? <OldPrice fontSize={20} price={item.originalPrice} /> : null}
            </View>
            <View style={styles.buttonStyles}>
              <BuyButton onPress={() => props.navigation.push('Cart', { ...item })} text='Buy' />
              <DetailsButton onPress={() => props.navigation.push('CatalogCardDetails', { ...item })} text='More details' />
            </View>
          </CatalogCardsItem>
          ))
        :
        items.map(item => (
          <GridCatalogCardsItem key={item.id} image={Constant.base_url +item.image_url}>
            <TouchableOpacity onPress={() => props.navigation.push('CatalogCardDetails', { ...item })}>
              <View style={styles.titleBlockStyles}>
                <Title fontSize={16} style={styles.titleStyles}>{item.name}</Title>
              </View>
              <View style={styles.gridPriceBlockStyles}>
                <ActivePrice fontSize={20} price={item.discountPrice ? item.discountPrice  : item.originalPrice} />
                {/* {item.discountPrice ? <OldPrice fontSize={14} price={item.originalPrice} /> : null} */}
              </View>
            </TouchableOpacity>
          </GridCatalogCardsItem>
        ))
        }
      </View>
      {isModalOpen 
        ?
        <Modal animationType="fade" transparent>
          <View style={styles.modalStyles}>
              <View />
          </View>
          <View style={styles.modalBlockStyles}>
                <View style={styles.settingsBlockStyles}>
                  <Paragraph style={styles.settingsParagraphStyles} fontSize={20}>{I18n.t("list_setting")}</Paragraph>
                  <TouchableOpacity onPress={() => { setModalStatus(false);  }}>
                    <Paragraph style={styles.settingsCancelStyles} fontSize={16}>{I18n.t("cancel")}</Paragraph>
                  </TouchableOpacity>
                </View>
               <SwitchField text={I18n.t("large_photos")} value={Boolean(isLargePhoto)} onChange={() => { setLargePhotoStatus(!isLargePhoto); writeItemToStorage(JSON.parse(!isLargePhoto)); }}/>
              <View style={styles.modalBottomStyles} /> 
            </View>
        </Modal>
        : 
        null
      }
    </ScrollView>
  );

  
}

CatalogCard.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default CatalogCard;
