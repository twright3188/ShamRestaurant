import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { View, Modal } from 'react-native';
import ContactList from '../../components/ContactList';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import { InformationInput } from '../../components/InformationInput';
import I18n from 'react-native-i18n';
import Colors from '../../theme';
import styles from './styles';

function NewCustomer(props) {  
  const { navigation: { state: { params: { personPhone, postCard, personSwitcherText, switcherText, personName, personSwitcher, switcher, thirdPerson, result, items } } } } = props;
  const [name, setNameValue] = useState('');
  const [email, setEmailValue] = useState('');
  const [phone, setPhoneValue] = useState('');
  const [isModalOpen, setModalStatus] = useState(false);
  const memoizedSwitchoverToSmscheck = useCallback(
    () => {
      props.navigation.push('SMSCheck', { thirdPerson, switcherText, personPhone, personSwitcherText, personSwitcher, postCard, switcher, personName, phone, name, email, result, items });
    },
    [thirdPerson, switcherText, personPhone, personSwitcherText, personSwitcher, postCard, switcher, personName, phone, name, email, result, items],
  );
  
  return(
    
      <View style={styles.pageStyles}>        
        <Title fontSize={35} style={styles.headerStyles}>{I18n.t("your_information")}</Title>
        <View style={styles.inputsBlockStyles}>
          <InformationInput value={name} attributeName={I18n.t("name")} onChangeText={setNameValue} />
          <InformationInput value={email} attributeName={I18n.t("email")} onChangeText={setEmailValue} />
          <InformationInput phoneIcon iconName="ios-people" isModalOpen={isModalOpen} setModalStatus={setModalStatus} value={phone} attributeName={I18n.t("phone")} onChangeText={setPhoneValue} />
        </View>
        <View style={styles.infoStyles}>
          <Paragraph fontSize={14} style={styles.textColor}>
          {I18n.t("we_will_need")}
          </Paragraph>
        </View>
        <View style={styles.bottomButtonBlockStyles}>
          <Button fontSize={16} style={styles.buyButtonStyles} color={Colors.coloredButtonText} onPress={memoizedSwitchoverToSmscheck}>
            {I18n.t("next")}
          </Button>
        </View>
        {isModalOpen 
          ? 
          <Modal animationType="slide">
            <ContactList isModalOpen={isModalOpen} setModalStatus={setModalStatus} phone={phone} setPhoneValue={setPhoneValue} />
          </Modal>
          :
          null
        }
      </View>
  );
}

NewCustomer.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default NewCustomer;