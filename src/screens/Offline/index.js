import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { StyleSheet, View } from 'react-native';
import I18n from 'react-native-i18n';
import Colors from '../../theme';
import Paragraph from '../../components/Paragraph';

const styles = StyleSheet.create({
    pageStyles: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 150,
        padding: 15
      },
      textStyles: {
        textAlign: 'center'
      },
      iconStyles: {
          position: 'absolute'
      }
});

export const Offline = () => {
    return (
        <View style={styles.pageStyles}>
            <Icon name="ios-cloud-outline" size={112} color={Colors.inactiveIcon} />
            <Icon name="md-close" size={150} color={Colors.inactiveIcon} style={styles.iconStyles} />
            <Paragraph style={styles.textStyles} fontSize={16}>{I18n.t("looks_like")}</Paragraph>
        </View>
    );
};