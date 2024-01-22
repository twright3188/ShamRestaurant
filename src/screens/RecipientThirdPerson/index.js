import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal, View } from 'react-native';
import I18n from 'react-native-i18n';
import { SwitcherSelector } from '../../components/SwitcherSelector';
import Title from '../../components/Title';
import ContactList from '../../components/ContactList';
import styles from './styles';
import { InformationInput } from '../../components/InformationInput';
import Paragraph from '../../components/Paragraph';
import Button from '../../components/Button';
import Colors from '../../theme';



function RecipientThirdPerson(props) {
  const { navigation: { state: { params: { result, items } } } } = props;
  const [personName, setPersonName] = useState('');
  const [personPhone, setPersonPhone] = useState('');
  const [isModalOpen, setModalStatus] = useState(false);
  const thirdPerson = true;
  const options = [
    { label: I18n.t("me"), value: 0 },
    { label: I18n.t("another_person"), value: 1 }
  ];
  return (
    <View style={styles.pageStyles}>
        <Title style={styles.titleStyles}>{I18n.t("recipient")}</Title>
        <View style={styles.switcherBlockStyles}>
          <SwitcherSelector 
            options={options}
            thirdPerson
            disabled
          />
        </View>
        <InformationInput value={personName} attributeName={I18n.t("name")} onChangeText={setPersonName} />
        <InformationInput phoneIcon iconName="ios-people" isModalOpen={isModalOpen} setModalStatus={setModalStatus} value={personPhone} attributeName={I18n.t("phone")} onChangeText={setPersonPhone} />
        <View style={styles.infoStyles}>
          <Paragraph fontSize={14} style={styles.textColor}>
             {I18n.t("all_order_details")}
          </Paragraph>
        </View>        
        {
          isModalOpen 
            ? 
          <Modal animationType="slide">
            <ContactList isModalOpen={isModalOpen} setModalStatus={setModalStatus} phone={personPhone} setPhoneValue={setPersonPhone} />
          </Modal>
            :
          null
        }
        <View style={styles.bottomButtonBlockStyles}>
          <Button fontSize={16} style={styles.buttonStyles} color={Colors.coloredButtonText} onPress={() => props.navigation.push('NewCustomer', { thirdPerson, personPhone, personName, options, result, items })}>
            {I18n.t("next")}
          </Button>
        </View>
      </View>
  );
}

RecipientThirdPerson.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default RecipientThirdPerson;