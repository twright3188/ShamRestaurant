import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TextInput } from 'react-native';
import Button from '../../components/Button';
import Colors from '../../theme';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import EmptyCart from './EmptyCart';
import  FooterBottom from '../../components/Footer';
import I18n from 'react-native-i18n';
import { ButtonIcon } from '../../components/ButtonIcon';
import { CartItem } from '../../components/Cartitem';
import styles from './styles';
import { CartListItem } from '../../components/CartListItem';
import ImageCarousel from '../../components/ImageCarousel';
import Language from '../../Language';
const items = [
  {
    id: 0,
    image: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg',
    price: '$2399.99',
    title: 'Nukeproof Mega 275 Alloy Pro Bike GX Eagle',
    // size: 'S'
  },
  {
    id: 1,
    image: 'https://eatforum.org/content/uploads/2018/05/table_with_food_top_view_900x700.jpg',
    price: '$2879.99',
    title: 'Nukeproof Mega 275 Carbon Pro Bike GX Eagle',
    // size: 'L'
  },
];

function CartContainer(props) 
{
  const { navigation } = props;
  const [value, onChangeText] = React.useState('');
  const [amount, setAmount] = useState([1, 1]);
  const [Reloading, setReloading] = React.useState(false);
  props.navigation.addListener('didFocus', (playload)=>{
    setReloading(!Reloading)
 });

  /* useState(''.padEnd(items.length, '1').split('').map(item => Number(item))); */
  const sum = items.map(item => Number((item.price.slice(1)) * amount[item.id]));
  let result = sum.reduce((res, current) => res + current);

  function promocodeField(promocode) {
    let str = '';
    switch(promocode) {
      case 'WELCOME20':
        str = ` (${result.toFixed(2)} - 20%)`;
        result = <Paragraph style={styles.promocodeFieldStyles}>{result.toFixed(0) * 0.8}<Paragraph style={styles.totalFieldStyles}>{str}</Paragraph></Paragraph>;
        return result;
      default:
        result = `$${result.toFixed(2)}`;
        return result;
    }
  }

  const amountCheck = (element) => element === 0;

  return (
      <View style={{width:'100%', height:'100%'}}>
      {amount.every(amountCheck)
        ?
        <EmptyCart navigation={navigation} />
        :
        <ScrollView style={styles.cartPageStyles}>
          <Header style={styles.captionHeaderStyles}>
      <Title fontSize={35} style={styles.defaultHeaderStyles}>{I18n.t("Cart")}</Title>
            {/* <ButtonIcon name="ios-chatbubbles" size={30} color={Colors.activeIcon} /> */}
          </Header>
          <View>
            {items.map(item => (
              <CartItem key={item.id} id={item.id} image={item.image} price={item.price} size={item.size} title={item.title} amount={amount} setAmount={setAmount} {...items} />
            ))}
          </View>
          {/* <CartListItem>
            <Paragraph fontSize={14} style={styles.cartListItemText}>Delivery</Paragraph>
            <TextInput value="Free" style={styles.textInputStyles} editable={false}/>
          </CartListItem> */}
          <CartListItem style={styles.promocodeStyles}>
        <Paragraph fontSize={14} style={styles.cartListItemText}>{I18n.t("promo_code")}</Paragraph>
            <TextInput onChangeText={onChangeText} value={value} style={styles.textInputStyles} />
          </CartListItem>
          <CartListItem>
            <Paragraph fontSize={16} style={styles.cartListItemText}>{I18n.t("subtotal")}</Paragraph>
            <Paragraph style={styles.promocodeFieldStyles}>{promocodeField(value)}</Paragraph>
          </CartListItem>
          <CartListItem>
            <Paragraph fontSize={16} style={styles.cartListItemText}>{I18n.t("tax")}</Paragraph>

          </CartListItem>
          <CartListItem>
            <Paragraph fontSize={16}  style={styles.promocodeFieldStyles}>{I18n.t("total")}</Paragraph>

          </CartListItem>

          <View style={styles.bottomButtonBlockStyles}>
            <Button fontSize={16} style={styles.buttonStyles} color={Colors.coloredButtonText} onPress={() => props.navigation.push('RecipientSplit', { result, items })}>
              {I18n.t("next")}
            </Button>
          </View>
        </ScrollView>
      }
       <FooterBottom 
       nav={navigation}
       screen={"Cart"}
      />
    </View>
  );
}

CartContainer.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    push: PropTypes.func
  }).isRequired
};

export default CartContainer;
