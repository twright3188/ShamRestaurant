import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import Colors from '../../theme';
import Paragraph from '../../components/Paragraph';
import I18n from 'react-native-i18n';
const styles = StyleSheet.create({
  pageStyles: {
    flex: 1,
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 150,
    padding: 15
  },
  textStyles: {
    textAlign: 'center'
  }
});

const NetworkError = () => (
  <View style={styles.pageStyles}>
    <Icon name="ios-close-circle-outline" size={112} color={Colors.deleteColor} />
<Paragraph style={styles.textStyles} fontSize={16}>{I18n.t("networkErrorText")}</Paragraph>
  </View>
);

export default NetworkError;