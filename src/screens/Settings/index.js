import React, { useCallback, Component } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, StyleSheet, View,Dimensions, Text } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import I18n from 'react-native-i18n';
import Language from '../../Language'
import Colors from '../../theme';
import Header from '../../components/Header';
import Title from '../../components/Title';
import { SettingsPersonalInfoItem, SettingsAppInfoItem, SettingsDeleteInfoItem } from '../../components/SettingsListItem';
import  FooterBottom from '../../components/Footer';
import { deleteUser } from '../../services/user';

const styles = StyleSheet.create({
  pageStyles: {
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: Colors.settingBackgroundColor
  },
  headerStyles: {
    padding: 15,
    paddingLeft: 15,
    paddingBottom: 0,
    marginBottom: 0,
  },
  sectionStyles: {
    height: 56,
    width: '100%',
    paddingHorizontal: 15,
    paddingBottom: 8,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  sectionCaptionStyles: {
    fontFamily: 'Helvetica',
    fontWeight: 'normal',
  },
  deleteStyles: {
    marginBottom: 24
  }

});

// function SettingsContainer(props) {
  export default class SettingsContainer extends Component {
 // const { navigation } = this.props;
  // eslint-disable-next-line no-console
  //console.log(props);
  
  // const memoizedDeletionCallback = useCallback(async () => {
  //   const { success } = await deleteUser();
  //   if (success) {
  //     props.navigation.navigate('News');
  //   }
  // });
  state = {
    language: '',
    languageData: []
  }
  componentDidMount() {
    var l_data = []
    for(var i=0;i<Language.languageList.length;i++)
    {
      l_data.push({
        value:Language.languageList[i]
      })
    }
    var lang = I18n.locale
    if(lang == "en")
    {
      Language.index = 0
    }
    if(lang == "fr")
    {
      Language.index = 1
    }
    this.setState({languageData:l_data, language:Language.languageList[Language.index]})                  
  }
changeLanguage(language)
{
  var index = -1
  for(var i=0;i<Language.languageList.length;i++)
  {
    if(language == Language.languageList[i])
    {
      index = i
    }
  }
  Language.index = index
  if(index == 0)
  {
    I18n.locale = "en"
  }
  if(index == 1)
  {
    I18n.locale = "fr"
  }
  this.setState({language:language})
}
  render() {
  return (
    <View style={{width:'100%', height:'100%'}}>
    <ScrollView style={styles.pageStyles}>
      <Header style={styles.headerStyles}>
      <Title>{I18n.t("setting")}</Title>
      </Header>
      <View style={styles.sectionStyles}>
        <Title fontSize={11} style={styles.sectionCaptionStyles}>{I18n.t("personal_information").toUpperCase()}</Title>
      </View>
      <SettingsPersonalInfoItem itemName={I18n.t("name_and_surname")} value="Khal Hak" />
      <SettingsPersonalInfoItem itemName={I18n.t("phone_number")} value="+1 123 000 00 00" />
      <SettingsPersonalInfoItem itemName={I18n.t("email")} value="khal.hak@hotmail.com" />
      <SettingsPersonalInfoItem itemName={I18n.t("city")}value="Montreal" />
      <SettingsPersonalInfoItem itemName={I18n.t("address")} value="2884 constable rd " last />
      <View style={styles.sectionStyles}>
        <Title fontSize={11} style={styles.sectionCaptionStyles}>{I18n.t("about_application").toUpperCase()}</Title>
      </View>
      <View style={{width:DEVICE_WIDTH, height:55, marginTop:1, backgroundColor:"#fff", borderTopWidth:0.3,borderColor:"#b0b0b0",
                      alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
                          <Text style={{width:100,fontSize:16, marginLeft:15,}}>{I18n.t("lang") + ":"}</Text>
                          <Dropdown
                                    containerStyle={{width:100, marginTop:-15, marginRight:15,}}
                                    label='' 
                                    pickerStyle={{marginTop:-32,}}
                                    style = {{color: '#a0a0a0', fontSize:16,}} 
                                    inputContainerStyle={{ borderBottomColor: 'transparent',}}
                                    baseColor={"#a0a0a0"}//indicator color
                                    textColor="#000"
                                    data={this.state.languageData}   
                                    onChangeText={(language) => this.changeLanguage(language)}
                                    value={this.state.language}            
                                    dropdownPosition={-4}
                           />
       </View>
      {/* <SettingsAppInfoItem itemName="About Your Shop" /> */}
      <SettingsAppInfoItem itemName={I18n.t("opening_hours_payment")} onPress={() => this.props.navigation.navigate('PaymentDelivery')} />
      {/* <SettingsAppInfoItem itemName="For corporate clients" /> */}
      <SettingsAppInfoItem itemName={I18n.t("contact_information")} last />
      <View style={styles.sectionStyles}>
        {/* <Title fontSize={11} style={styles.sectionCaptionStyles}>{'Delete name, phone number and email'.toUpperCase()}</Title> */}
      </View>
      {/* <SettingsDeleteInfoItem style={styles.deleteStyles}  itemName="Delete personal data" last onPress={memoizedDeletionCallback} /> */}
      <SettingsAppInfoItem itemName={I18n.t("showcase")} onPress={() => this.props.navigation.navigate('ShowCase') }/>

    </ScrollView>
    <FooterBottom 
        nav={this.props.navigation}
        screen={"Setting"}
    />
    </View>
  );
  }
}

// SettingsContainer.propTypes = {
//   navigation: PropTypes.instanceOf(Object).isRequired,
// };
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
//export default SettingsContainer;
