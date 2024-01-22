import React, {Component} from 'react';
import {
    StyleSheet, 
    Text, 
    ImageBackground, 
    SafeAreaView,
    View,
    TouchableHighlight,
    TextInput,
    StatusBar,
    Dimensions,
    Alert,
    Platform
  } from 'react-native';
import {SignInAPI} from '../../services/APIs'
import { Dropdown } from 'react-native-material-dropdown';
import I18n from 'react-native-i18n';
import Language from '../../Language'
import Global from '../../Global';
export default class SignView extends Component {

  state = {
    text: '',
    password: ''
  }
  onSignIn()
  {
    if(this.state.text == "")
    {
      Alert.alert("The email is not inputed")
      return
    }
    if(this.state.password == "")
    {
      Alert.alert("The password is not inputed")
      return
    }
    SignInAPI(
    {
      'email':this.state.text,
      'password':this.state.password
    }, 
    (result)=>{
      if(result.status)
      {
        this.props.navigation.navigate("News")
      }
      else
      {
        Alert.alert(result.message)
      }
    })
 
  }
  static navigationOptions = {
    header : null
  };
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
        <ImageBackground resizeMode="stretch" source={require('../../img/background.png')} style={styles.container}>
            <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content'/>
            <View style={styles.animatedV}>
              <Text style={styles.welcome}>Welcome!!</Text>
            </View>
            <View style={styles.txtContainer}>
            <TextInput
              style={styles.txtInput}
              placeholder={I18n.t("email") + ":"}
              placeholderTextColor="#c52323"
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
              maxLength={30}
            />
            <TextInput
              style={styles.txtInput}
              placeholder={I18n.t("password") + ":"}
              placeholderTextColor="#c52323"
              onChangeText={(password) => this.setState({password})}
              value={this.state.password}
              secureTextEntry={true}
              maxLength={30}
            />
            </View>
            <View style={{width:DEVICE_WIDTH - 20, height:40,  marginLeft:10, marginTop:1, 
                      alignItems:'center', flexDirection:'row', justifyContent:'space-between'}}>
                          <Text style={{width:100,fontSize:19, marginLeft:20, color:'#c52323'}}>{I18n.t("lang") + ":"}</Text>
                          <Dropdown
                                    containerStyle={{width:160, marginTop:-15, marginRight:15,}}
                                    label='' 
                                    pickerStyle={{marginTop:-32,}}
                                    style = {{color: '#c52323', fontSize:19,}} 
                                    inputContainerStyle={{ borderBottomColor: 'transparent',}}
                                    baseColor={"#fff"}//indicator color
                                    textColor="#000"
                                    data={this.state.languageData}   
                                    onChangeText={(language) => this.changeLanguage(language)}
                                    value={this.state.language}            
                                    dropdownPosition={-4}
                           />
           </View>
            <View style={styles.botoneraCont}>
                <TouchableHighlight onPress={()=> this.props.navigation.navigate("Signup")} style={styles.button}>
                  <Text style={styles.txtButton}>{I18n.t("Create_Account")}</Text>
                </TouchableHighlight>
                <TouchableHighlight onPress={()=> {}} style={styles.buttonForgot}>
                  <Text style={styles.txtButton}>{I18n.t("Forgot_Password")}</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.singButtonContainer}>
                <TouchableHighlight onPress={()=> this.onSignIn()} style={styles.singButton}>
            <Text style={styles.txtButton}>{I18n.t("Signin")}</Text>
                </TouchableHighlight>
            </View>
        </ImageBackground>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height:'100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  safeContainer:{
    flex: 1,
    backgroundColor: 'transparent',
  },
  welcome: {
    fontSize: 25,
    color: 'white',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10,
    textAlign: 'center'
  },
  animatedV: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },
  botoneraCont: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    width: '45%',
    height: 55,
    backgroundColor: "#c52323",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 5,
  },
  txtButton: {
    fontSize: 20,
    color: 'white',
  },
  buttonForgot:{
    width: '45%',
    height: 55,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#7c6b6b",
    marginLeft: 5,    
  },
  singButtonContainer: {
    flex: 2,
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
  },
  singButton:{
    width: '45%',
    height: 55,
    backgroundColor: "#743c3c",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtContainer:{
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    width: '100%'
  },
  txtInput:{
    fontSize: 19,
    color: '#c52323',
    backgroundColor: 'white',
    borderRadius: 8,
    width: '90%',
    height: 50,
    borderColor: 'black',
    marginBottom: 5,
    padding: 6,
  }
});
