import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, ScrollView, Alert, KeyboardAvoidingView } from 'react-native';
import { SwitcherSelector } from '../../components/SwitcherSelector';
import { DeliveryDateInput } from '../../components/DateInput';
import { DeliveryTimeInput } from '../../components/TimeInput';
import Title from '../../components/Title';
import { InformationInput } from '../../components/InformationInput';
import { SwitchField } from '../../components/SwitchField';
import { DeliveryInput } from '../../components/DeliveryInput';
import styles from './styles';
import Colors from '../../theme';
import { DeliveryImageBlock } from '../../components/ImageBlock';
import I18n from 'react-native-i18n';
import Button from '../../components/Button';



function Delivery(props) {
  const options = [
    { label: I18n.t("me"), value: 0 },
    { label: I18n.t("another_person"), value: 1 }
  ];
  const { navigation: { state: { params: { thirdPerson, personSwitcher, personPhone, personName, name, phone, result, email } } } } = props;
  const [address, setAddressValue] = useState('');
  const [comment, setCommentValue] = useState('');

  const [date, setDate] = useState(new Date());
  const [fromTime, setFromTime] = useState('10:00');
  const [untilTime, setUntilTime] = useState('11:00');
  const [customerAddress, setCustomerAddress] = useState(false);
  const [commentSwitcher, setCommentSwitcherValue] = useState(false);
  const memoizedPlaceOrder = useCallback(
    () => address !== '' || customerAddress ? props.navigation.navigate('Confirmation', { result, email }) : Alert.alert('Address is empty', 'We can\'t deliver the product without an address'), 
    [address, customerAddress]
  );

  const recipientThirdPersonText = () => {
    if (personSwitcher) {
    return `${personName}, ${personPhone}, not to say who's giving the product`;
    }
    return `${personName}, ${personPhone}`;
  };

  const recipientMineText = () => {
    return `${name  }, ${  phone}`;
  };

  return (
    <KeyboardAvoidingView behavior="position">
      <ScrollView style={styles.pageStyles}>
  <Title fontSize={35} style={styles.titleStyles}>{I18n.t("delivery")}</Title>
        <View style={styles.switcherBlockStyles}>
          <SwitcherSelector 
            options={options}
            thirdPerson={thirdPerson}
            disabled
          />
        </View>
        <DeliveryImageBlock result={result} image="https://media.chainreactioncycles.com/is/image/ChainReactionCycles/template_sample?$detail$&$id=prod170259_Ron%20Burgundy%20-%20Black_NE_01&$offerhide=1&$promoflag=blackfriday&$promohide=0&locale=en" title={I18n.t("total_price")} />
        <InformationInput multiline value={thirdPerson ? recipientThirdPersonText() : recipientMineText()} attributeName={I18n.t("recipient")} disabled />
        <View style={styles.sectionStyles}>
          <Title fontSize={11} style={styles.sectionCaptionStyles}>{I18n.t("delivery_details").toUpperCase()}</Title>
        </View>
        {!customerAddress ? <InformationInput value={address} onChangeText={setAddressValue} attributeName={I18n.t("address")} /> : null}
        {thirdPerson ?  <SwitchField text={I18n.t("check_address")} value={customerAddress} onChange={() => setCustomerAddress(!customerAddress)}/> : null}
        {thirdPerson  
          ?
            <SwitchField text={I18n.t("commentary_to_order")}  value={commentSwitcher} onChange={() => setCommentSwitcherValue(!commentSwitcher)}/> 
          : 
          null
        }
        {commentSwitcher ? <InformationInput fontSize={14} value={comment} multiline onChangeText={setCommentValue} attributeName={I18n.t("commentary_to_order")} /> : null}
        {!thirdPerson ? <InformationInput fontSize={14} value={comment} onChangeText={setCommentValue} attributeName={I18n.t("commentary_to_order")} /> : null}
        <DeliveryDateInput date={date} setDate={setDate} text={I18n.t("date_of_delivery")} />
        <DeliveryTimeInput fromTime={fromTime} setFromTime={setFromTime} untilTime={untilTime} setUntilTime={setUntilTime} text={I18n.t("delivery_time")} />
        <DeliveryInput attributeName={I18n.t("payment_method")} value={I18n.t("bank_card")} />
        {thirdPerson ? <InformationInput value={`${name  }, ${  phone}`} attributeName={I18n.t("customer")} disabled /> : null}
        <View style={styles.bottomButtonBlockStyles}>
          <Button fontSize={16} style={styles.buttonStyles} color={Colors.coloredButtonText} onPress={memoizedPlaceOrder}>
          {I18n.t("place_order")}
          </Button>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

Delivery.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default Delivery;
