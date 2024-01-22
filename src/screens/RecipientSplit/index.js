import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Title from '../../components/Title';
import I18n from 'react-native-i18n';
import styles from './styles';

function RecipientSplit(props) {
  const { navigation: { state: { params: { result, items } } } } = props;

  return (
    <View style={styles.pageStyles}>
      <View style={styles.headerBlockStyles}>
        <Header style={styles.headerStyles}>
        <Title fontSize={35}>{I18n.t("product_recpient")}</Title>
        </Header>
      </View>
        <Button style={styles.buttonStyles} onPress={() => props.navigation.push('NewCustomer', { result, items })}>{I18n.t("to_deliver")}</Button>
        <Button style={styles.buttonStyles} onPress={() => props.navigation.push('RecipientThirdPerson', { result, items })}>{I18n.t("send_product")}</Button>
    </View>
  );
}

RecipientSplit.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default RecipientSplit;