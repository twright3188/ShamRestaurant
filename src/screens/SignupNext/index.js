import React, {Component} from 'react';
import {
    Content,
  } from "native-base";
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
    Platform,
    Alert
  } from 'react-native';
import I18n from 'react-native-i18n';
import {SignUpAPI} from '../../services/APIs'
export default class SignupView extends Component {

  state = {
    firstname: '',
    lastname:'',
    phonenumber:'',
    address:'',
    city:'',
    email:'',
    province:'',
    postalCode:'',
    dob:'',
    password: ''
  }
  onSignIn()
  {
   this.props.navigation.goBack()
  }
  componentDidMount()
  {
    var firstname = this.props.navigation.state.params.fname
    var lastname = this.props.navigation.state.params.lname
    var phonenumber  = this.props.navigation.state.params.phonenumber
    var email  = this.props.navigation.state.params.email
    var dob  = this.props.navigation.state.params.dob
    this.setState({firstname:firstname, lastname:lastname, phonenumber:phonenumber, email:email, dob:dob})
  }
  signUp()
  {
    if(this.state.address == "")
    {
      Alert.alert("The address is not inputed")
      return
    }
    if(this.state.city == "")
    {
      Alert.alert("The city is not inputed")
      return
    }
    if(this.state.province == "")
    {
      Alert.alert("The province is not inputed")
      return
    }
  
    if(this.state.postalCode == "")
    {
      Alert.alert("The postal code is not inputed")
      return
    }
    if(this.state.password == "")
    {
      Alert.alert("The password is not inputed")
      return
    }
    SignUpAPI({
      fname:this.state.firstname,
      lname:this.state.lastname,
      email:this.state.email,
      password:this.state.password,
      phone_number:this.state.phonenumber,
      address:this.state.address,
      postalcode:this.state.postalCode,
      province:this.state.province
    },
    (result)=>{
      if(result.status)
      {
        this.props.navigation.navigate("News")
      }
      else
      {
        var msg = ""
        Object.keys(result.message).map(index=>{
          msg = msg + result.message[index][0] + "\n"
        })
        Alert.alert(msg)
      }
    }
    )
  }
  static navigationOptions = {
    header : null
  };
  render() {
    return (
        <View style={styles.contentContainer}>

       
              
                <ImageBackground resizeMode="stretch" source={require('../../img/background.png')} style={styles.container}>
                <StatusBar translucent={true} backgroundColor='transparent' barStyle='light-content'/>
                    <View style={styles.animatedV}>
                    <Text style={styles.welcome}>{I18n.t("signup")}</Text>
                    </View>
                    <Content>
                    <View style={styles.txtContainer}>
                       
                            <TextInput
                            style={styles.txtInput}
                            placeholder={I18n.t("address") + ":"}
                            placeholderTextColor="#c52323"
                            onChangeText={(address) => this.setState({address})}
                            value={this.state.address}
                            maxLength={30}
                            />
                            <TextInput
                            style={styles.txtInput}
                            placeholder={I18n.t("city") + ":"}
                            placeholderTextColor="#c52323"
                            onChangeText={(city) => this.setState({city})}
                            value={this.state.city}
                            maxLength={30}
                            />

                             <TextInput
                            style={styles.txtInput}
                            placeholder={I18n.t("province") + ":"}
                            placeholderTextColor="#c52323"
                            onChangeText={(province) => this.setState({province})}
                            value={this.state.province}
                            maxLength={30}
                            />
                            <TextInput
                            style={styles.txtInput}
                            placeholder={I18n.t("postal_code") + ":"}
                            keyboardType="decimal-pad"
                            placeholderTextColor="#c52323"
                            onChangeText={(postalCode) => this.setState({postalCode})}
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
                    <View style={styles.botoneraCont}>
                        <TouchableHighlight onPress={()=> this.signUp()} style={styles.button}>
                        <Text style={styles.txtButton}>{I18n.t("Create_Account")}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=> this.onSignIn()} style={styles.singButton}>
                        <Text style={styles.txtButton}>{I18n.t("back")}</Text>
                        </TouchableHighlight>
                    </View>
                    </Content>
                   
                </ImageBackground>

     </View>
    );
  }
}
const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;
const styles = StyleSheet.create({
    contentContainer:{
        width: '100%',
        height:'100%',
    },
  container: {
    width: '100%',
    height:'100%',
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  },
  safeContainer:{

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
   marginTop:200,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20
  },
  botoneraCont: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
    marginTop:10,
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
    width: '100%',
    alignItems: 'center',
  },
  singButton:{
    width: '45%',
    height: 55,
    marginTop:10,
    backgroundColor: "#743c3c",
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtContainer:{

    justifyContent:'center',
    alignItems: 'center',
    width: DEVICE_WIDTH
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
