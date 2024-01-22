import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import I18n from 'react-native-i18n';
import styles from './styles';

function Confirmation(props) {
  const { navigation, navigation: { state: { params: { result, email } } } } = props;
  const [payment, setPaymentStatus] = useState(false);  

  const memoizedOrderPayment = useCallback(
    () => props.navigation.navigate('OrderPayment', { result, email }) , 
    [result]
  );

  useEffect(() => {
    if (!payment) {
      setTimeout(() => {
        setPaymentStatus(true);
        memoizedOrderPayment();
      }, 1000);
    }
  }, [payment]);

  return (
    <View style={styles.pageStyles}>
      <View style={styles.messageStyles}>
        <Title>{I18n.t("confirmText1")}</Title>
        <Paragraph style={styles.textStyles}>
            {I18n.t("confirmText2")}
        </Paragraph>
      </View>
       <Button style={styles.buttonStyles} onPress={() => navigation.navigate('Catalog')}>{I18n.t("go_to_catalogue")}</Button>
    </View>
  );
};

Confirmation.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Confirmation;