import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, KeyboardAvoidingView } from 'react-native';
import I18n from 'react-native-i18n';
import { SwitcherSelector } from '../../components/SwitcherSelector';
import Title from '../../components/Title';
import styles from './styles';
import { InformationInput } from '../../components/InformationInput';
import Button from '../../components/Button';
import Colors from '../../theme';



function RecipientDetails(props) {
  const { navigation: { state: { params: { phone, name, result, items, email } } } } = props;
  const [switcher, setSwitcherValue] = useState(false);
  const [postCard, setPostCardValue] = useState('');
  const options = [
    { label: I18n.t("me"), value: 0 },
    { label: I18n.t("another_person"), value: 1 }
  ];
  return (
    <KeyboardAvoidingView behavior='position'>
    <View style={styles.pageStyles}>
        <Title style={styles.titleStyles}>{I18n.t("recipient")}</Title>
        <View style={styles.switcherBlockStyles}>
          <SwitcherSelector 
              options={options}
              disabled
            />
        </View>
        <InformationInput value={name} attributeName={I18n.t("name")} disabled />
        <InformationInput value={phone} icon attributeName={I18n.t("phone")} disabled />
        <View style={styles.bottomButtonBlockStyles}>
          <Button fontSize={16} style={styles.buttonStyles} color={Colors.coloredButtonText}
            onPress={() => props.navigation.push('Delivery', { options, name, phone, switcher, setSwitcherValue, postCard, setPostCardValue, result, items, email })}
          >
            {I18n.t("next")}
          </Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

RecipientDetails.propTypes = {
  navigation: PropTypes.instanceOf(Object).isRequired,
};

export default RecipientDetails;
