import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Image, TouchableOpacity,StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Title from '../../components/Title';
import { InformationInput } from '../../components/InformationInput';
import Colors from '../../theme';
import styles from './styles';
import I18n from 'react-native-i18n';
import { SwitchField } from '../../components/SwitchField';
import Button from '../../components/Button';

function OrderPayment(props) {
    const { navigation: { state: { params: { result, email } } }  } = props;
    const [cardNumber, setCardNumberValue] = useState('');
    const [isCheckSelect, setCheckStatus] = useState(true);


    return (
        <View style={styles.pageStyles}>
            <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content'/>
            <View style={styles.headerBlockStyles}>
                <Title style={styles.titleStyles}>{I18n.t("order_payment")}</Title>
                <TouchableOpacity>
                    <Icon name='ios-chatbubbles' size={30} color={Colors.activeIcon}/>
                </TouchableOpacity>
            </View>
            <View style={styles.paypalProfileStyles}>
                <FontAwesome name='cc-visa' size={40} color={Colors.activeIcon}/>
                <Image source={{ uri: 'https://cs9.pikabu.ru/post_img/big/2016/12/07/5/1481095225187216067.jpg' }} style={styles.paypalImage} />
            </View>
            <InformationInput value={result} attributeName={I18n.t("project_name")} />
            <InformationInput value={cardNumber} attributeName={I18n.t("card_number")}  maxLength = {12}  onChangeText={setCardNumberValue} iconName='ios-card' phoneIcon disabledIcon />
            <SwitchField text={I18n.t("get_check")} value={isCheckSelect} onChange={() => setCheckStatus(!isCheckSelect)} />
            {isCheckSelect ? <InformationInput value={email} attributeName={I18n.t("email")} disabled /> : null}
            <View style={styles.payButtonBlockStyles}>
                <Button style={styles.payButtonStyles} onPress={()=>{}}>{I18n.t("pay")} {result}</Button>
            </View>
            <View style={styles.bottomBlockStyles}>
                <FontAwesome name='cc-visa' size={40} color={Colors.inactiveIcon}/>
                <FontAwesome name='cc-mastercard' size={40} color={Colors.inactiveIcon}/>
            </View>
        </View>
    );
}

OrderPayment.propTypes = {
    navigation: PropTypes.instanceOf(Object).isRequired,
};

export default OrderPayment;