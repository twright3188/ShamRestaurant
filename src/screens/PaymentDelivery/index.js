import React from 'react';
import { ScrollView, View } from 'react-native';
import Header from '../../components/Header';
import Title from '../../components/Title';
import Paragraph from '../../components/Paragraph';
import I18n from 'react-native-i18n';
import styles from './styles';

export const PaymentDelivery = () => {
  
    return (
        <ScrollView style={styles.pageStyles}>
            <Header style={styles.headerStyles}>
            <Title>{I18n.t("setting")}</Title>
            </Header>
            <View style={styles.ticketStyles}>
                <View style={styles.textBlockStyles}>
                   <View style={styles.captionBlockStyles}>
                        <Title fontSize={20}>{I18n.t("opening_hours")}</Title>
                   </View>
                    <View style={styles.paragraphStyles}>
                        <Title fontSize={16} style={styles.titleStyles}>{I18n.t("office_work")}</Title>
                        <Paragraph>
                        {I18n.t("office_workText")}
                        </Paragraph>
                    </View>
                    <View>
                        <Title fontSize={16} style={styles.titleStyles}>{I18n.t("delivery_service")}</Title>
                        <Paragraph>
                        {I18n.t("delivery_serviceText")}
                        </Paragraph>
                        {/* <Paragraph>
                            If you need delivery early in the morning or late in the evening, place an order for the right time, try to help.    
                        </Paragraph> */}
                    </View>
                </View>
                <View style={styles.textBlockStyles}>
                    <View style={styles.captionBlockStyles}>
                        <Title fontSize={20}>{I18n.t("payment")}</Title>
                   </View>
                   <View style={styles.paragraphStyles}>
                        <Paragraph>
                        {I18n.t("paymentText")}
                        </Paragraph>
                    </View>
                </View>
                <View>
                    <View style={styles.captionBlockStyles}>
                        <Title fontSize={20}>{I18n.t("delivery_region")}</Title>
                   </View>
                   <View>
                        <Paragraph>
                        {I18n.t("delivery_regionText")}
                        </Paragraph>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};