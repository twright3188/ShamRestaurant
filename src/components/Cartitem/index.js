import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons';
import { Image, View, TouchableOpacity } from 'react-native';
import Colors from '../../theme';
import Paragraph from '../Paragraph';
import styles from './styles';

export const CartItem = (props) => {
  const { image, title, id, amount, size, price, setAmount } = props;

  return (
    <View>
      {amount[id] !== 0
        ? 
        (<View style={styles.blockStyles}>
          <Image source={{ uri: image }} resizeMode="cover" style={styles.imageStyles} />
          <View style={styles.infoBlockStyles}>
            <View style={styles.titleBlockStyles}>
              <Paragraph fontSize={14} style={styles.titleStyles}>{title}</Paragraph>
            </View>
            <View style={styles.sizePriceBlock}>
              <View style={styles.sizePriceBlockStyles}>
                <View>
                  {/* <Paragraph fontSize={14} style={styles.sizeStyles}>Size: {size}</Paragraph> */}
                </View>
                <View>
                  <Paragraph fontSize={16} style={styles.priceTextStyles}>{price}</Paragraph>
                </View>
              </View>
              <View style={styles.amountIconsBlock}>
                <View style={styles.amountIconsStyles}>
                  <Paragraph fontSize={16} style={styles.amountTextStyles}>{amount[id]}</Paragraph>
                  <TouchableOpacity onPress={() => {amount[id] -= 1; setAmount([...amount]);}} >
                      <Icon name="ios-close-circle-outline" size={32} color={Colors.amountIconsColor} /> 
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>) 
      : 
      null
      }
    </View>
  );
};

CartItem.propTypes = {
  image: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  amount: PropTypes.arrayOf(PropTypes.number).isRequired,
  setAmount: PropTypes.func.isRequired,
  size: PropTypes.string.isRequired
};