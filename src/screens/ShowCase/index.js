import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import Button from '../../components/Button';
import { DeliveryDateInput } from '../../components/DateInput';
import { DeliveryTimeInput } from '../../components/TimeInput';
import { InformationInput } from '../../components/InformationInput';
import { SwitchField } from '../../components/SwitchField';
import { BuyButton, DetailsButton } from '../../components/CatalogCardButtons';
import { MultilineInput } from '../../components/MultilineInput';
import { SettingsPersonalInfoItem, SettingsAppInfoItem, SettingsDeleteInfoItem } from '../../components/SettingsListItem';
import { ZoomBlock } from '../../components/ZoomBlock';
import I18n from 'react-native-i18n';
import Colors from '../../theme';

function ShowCase() {
    const [date, setDate] = useState(new Date());
    const [fromTime, setFromTime] = useState('10:00');
    const [untilTime, setUntilTime] = useState('11:00');
    const [switchValue, setSwitchValue] = useState(false);
    const [multilineInputValue, setMultilineInputValue] = useState('');
    const [informationInputValue, setInformationInputValue] = useState('');
    const [isModalOpen, setModalStatus] = useState(false);
    const [personPhone, setPersonPhone] = useState('');
    const [zoomButton, setZoomButtonValue] = useState(false);

    return(
        <ScrollView style={{ flex: 1, backgroundColor: Colors.background }}>
            <View style={{ padding: 10 }}>
                <View style={{ marginVertical: 5 }}>
                <Button>{I18n.t("button_fullwidth")}</Button>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <Button style={{ backgroundColor: Colors.coloredButtonBackgroundColor }} color={Colors.coloredButtonText}>{I18n.t("colored_button_fullwidth")}</Button>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <Button disabled style={{ backgroundColor: Colors.coloredButtonBackgroundColor }} color={Colors.coloredButtonText}>{I18n.t("colored_button_disabled")}</Button>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <Button style={{ backgroundColor: Colors.coloredButtonBackgroundColor, borderRadius: 0 }} color={Colors.coloredButtonText}>{I18n.t("colored_fullwidth")}</Button>
                </View>
                <View style={{ marginVertical: 5, alignItems: 'center' }}>
                    <BuyButton text={I18n.t("buy_button")} />
                </View>
                <View style={{ marginVertical: 5,  alignItems: 'center' }}>
                    <DetailsButton text={I18n.t("details_button")}  />
                </View>
                <View style={{ marginVertical: 5,  alignItems: 'center' }}>
                    <SettingsPersonalInfoItem itemName={I18n.t("list_item_with_info")} value="Jake Doe"/>
                </View>
                <View style={{ marginVertical: 5,  alignItems: 'center' }}>
                    <SettingsAppInfoItem itemName={I18n.t("list_item")}  />
                </View>
                <View style={{ marginVertical: 5,  alignItems: 'center' }}>
                    <SettingsDeleteInfoItem itemName={I18n.t("delete_info_button")}  />
                </View>
                <View style={{ marginVertical: 5,  alignItems: 'center' }}>
                    <ZoomBlock value={I18n.t("zoom_value")} isPressed={zoomButton} onPress={() => setZoomButtonValue(!zoomButton)} />
                </View>
            </View>
            <View>
                <View style={{ marginVertical: 5 }}>
                    <DeliveryDateInput date={date} setDate={setDate} text={I18n.t("date_input")} />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <DeliveryTimeInput fromTime={fromTime} setFromTime={setFromTime} untilTime={untilTime} setUntilTime={setUntilTime} text={I18n.t("time_input")} />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <InformationInput attributeName={I18n.t("information_input")} value={informationInputValue} onChangeText={setInformationInputValue} />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <SwitchField text={I18n.t("switcher")} value={switchValue} onChange={() => setSwitchValue(!switchValue)}/>
                </View>
                <View style={{ marginVertical: 5 }}>
                    <MultilineInput value={multilineInputValue} onChangeText={setMultilineInputValue} title={I18n.t("multiline_input")} placeholder={I18n.t("placeholer_multiline_input")} />
                </View>
                <View style={{ marginVertical: 5 }}>
                    <InformationInput phoneIcon iconName="ios-people" isModalOpen={isModalOpen} setModalStatus={setModalStatus} value={personPhone} attributeName={I18n.t("phone_input_with_icon")} onChangeText={setPersonPhone} />
                </View>
            </View>

        </ScrollView>
    );
}

export default ShowCase;
