import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, TouchableOpacity, Alert } from 'react-native';
import I18n from 'react-native-i18n';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import styles from './styles';
import Colors from '../../theme';

function SMSCheck(props) {
  const { navigation, navigation: { state: { params: { thirdPerson, switcherText, personSwitcherText, personSwitcher, personPhone, postCard, personName, switcher, phone, name, email, result, items } } } } = props;
  const [firstInput, setFirstInputValue] = useState('');
  const [secondInput, setSecondInputValue] = useState('');
  const [thirdInput, setThirdnputValue] = useState('');
  const [fourthInput, setFourthInputValue] = useState('');
  const check = '1234';
  const secondTextInput = React.createRef();
  const thirdTextInput = React.createRef();
  const fourthTextInput = React.createRef();

  function textInputFocus(textInputRef) {
    textInputRef.current.focus();
  }

  function textInputBlur(textInputRef) {
    textInputRef.current.blur();
  }

  function handleSubmit() {
    if (check === (firstInput + secondInput + thirdInput + fourthInput) && !thirdPerson) {
      props.navigation.push('RecipientDetails', { phone, name, email, result, items });
    } else if (check === (firstInput + secondInput + thirdInput + fourthInput) && thirdPerson) {
      props.navigation.push('Delivery', { thirdPerson, personSwitcherText, switcherText, personPhone, postCard, personName, personSwitcher, switcher, phone, name, email, result, items });
    } else {
      Alert.alert('Incorrect code', 'The confirmation code entered has not been verified.');
    } 
  }

  return(
    <View style={styles.pageStyles}>
      <View style={styles.bodyStyles}>
        <Title fontSize={35} style={styles.titleStyles}>{I18n.t("sms_check")}</Title>
        <Paragraph fontSize={14} style={styles.infoTextStyles}>{I18n.t("we_sent")}</Paragraph>
        <View style={styles.phoneBlockStyles}>
          <Paragraph fontSize={14} style={styles.phoneTextStyles}>{I18n.t("verification_number") + " "}</Paragraph>
          <Paragraph fontSize={14} style={styles.phoneValueStyles}>{phone}</Paragraph>
        </View>
        <View style={styles.phoneCheckInputsBlockStyles}>
          <View style={styles.inputsMarkup}>
            <TextInput 
              maxLength={1}
              style={styles.inputStyles}
              value={firstInput}
              onFocus={() => setFirstInputValue('')}
              keyboardType="numeric"
              onChangeText={text => {setFirstInputValue(text); textInputFocus(secondTextInput);}}
              autoFocus
            />
            <TextInput 
              maxLength={1}
              value={secondInput}
              onChangeText={text => {setSecondInputValue(text); textInputFocus(thirdTextInput);}}
              style={styles.inputStyles}
              onFocus={() =>  setSecondInputValue('')}
              keyboardType="numeric"
              ref={secondTextInput}
            />
            <TextInput 
              maxLength={1}
              value={thirdInput}
              onChangeText={text => {setThirdnputValue(text); textInputFocus(fourthTextInput);}}
              style={styles.inputStyles}
              onFocus={() => setThirdnputValue('')}
              keyboardType="numeric"
              ref={thirdTextInput}
            />
            <TextInput 
              maxLength={1}
              value={fourthInput}
              keyboardType="numeric"
              onChangeText={text => {setFourthInputValue(text); textInputBlur(fourthTextInput);}}
              style={styles.inputStyles}
              ref={fourthTextInput}
              returnKeyType="done"
              onFocus={() => setFourthInputValue('')}
              onBlur={() => handleSubmit()}
            />
          </View>
        </View>
        <View style={styles.buttonsBlockStyles}>
          <TouchableOpacity onPress={() => navigation.navigate('NewCustomer')}>
            <Paragraph fontSize={14} style={styles.changePhoneNumberStyles}>{I18n.t("change_phone_number")}</Paragraph>
          </TouchableOpacity>
          <TouchableOpacity>
            <Paragraph fontSize={14} style={styles.sendCodeStyles}>{I18n.t("send_code_again")}</Paragraph>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.bottomButtonBlockStyles}>
        <Button fontSize={16} style={styles.buyButtonStyles} color={Colors.coloredButtonText}
         onPress={() => handleSubmit()}>
          {I18n.t("next")}
        </Button>
      </View>
    </View>
  );
}


SMSCheck.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default SMSCheck;