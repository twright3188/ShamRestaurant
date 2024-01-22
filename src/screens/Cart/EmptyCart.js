import React from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import Colors from '../../theme';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import styles from './styles';

function EmptyCart(props) {
  const { navigation } = props;
  return (
    <View style={styles.wrapper}>
      <ScrollView style={styles.pageStyles}>
        <Header style={styles.headerStyles}>
          <Title style={styles.headerTitleStyles}>Cart</Title>
          <TouchableOpacity>
            <Icon name="ios-chatbubbles" size={30} color={Colors.activeIcon} />
          </TouchableOpacity>
        </Header>
        <View style={styles.imageBlockStyles}>
          <FontAwesomeIcon name="shopping-cart" size={100} color={Colors.activeIcon} />
        </View>
        <View style={styles.textBlockStyles}>
          <Paragraph>
            So far, the cart is empty.
          </Paragraph>
        </View>
      </ScrollView>
      <View style={styles.buttonBlockStyles}>
        <Button fontSize={16} style={styles.buttonStyles} color={Colors.coloredButtonText} onPress={() => navigation.navigate('Catalog')}>
          Back in the catalog
        </Button>
      </View>
    </View>
  );
}

EmptyCart.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    push: PropTypes.func
  }).isRequired
};

export default EmptyCart;
