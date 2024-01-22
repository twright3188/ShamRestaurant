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
import DatePicker from 'react-native-datepicker';
import I18n from 'react-native-i18n';
export default class SignupView extends Component {

  state = {
    firstname: '',
    lastname:'',
    phonenumber:'',
    email:'',
    dob:'',
  }
  onSignIn()
  {
   this.props.navigation.navigate("Signin")
  }
  static navigationOptions = {
    header : null
  };
  onNext()
  {
    if(this.state.firstname == "")
    {
      Alert.alert("The first name is not inputed")
      return
    }
    if(this.state.lastname == "")
    {
      Alert.alert("The last name is not inputed")
      return
    }
    if(this.state.phonenumber == "")
    {
      Alert.alert("The phone number is not inputed")
      return
    }
    if(this.state.email == "")
    {
      Alert.alert("The email is not inputed")
      return
    }
    if(this.state.dob == "")
    {
      Alert.alert("The birthday is not inputed")
      return
    }
    this.props.navigation.navigate("SignupNext", 
    { fname:this.state.firstname,
      lname:this.state.lastname,
      phonenumber:this.state.phonenumber,
      email:this.state.email,
      dob:this.state.dob
    })
  }
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
                            placeholder={I18n.t("first_name") + ":"}
                            placeholderTextColor="#c52323"
                            onChangeText={(firstname) => this.setState({firstname})}
                            value={this.state.firstname}
                            maxLength={30}
                            />
                            <TextInput
                            style={styles.txtInput}
                            placeholder={I18n.t("last_name") + ":"}
                            placeholderTextColor="#c52323"
                            onChangeText={(lastname) => this.setState({lastname})}
                            value={this.state.lastname}
                            maxLength={30}
                            />
                            <TextInput
                            style={styles.txtInput}
                            placeholder={I18n.t("phone_number") + ":"}
                            keyboardType="phone-pad"
                            placeholderTextColor="#c52323"
                            onChangeText={(phonenumber) => this.setState({phonenumber})}
                            value={this.state.phonenumber}
                            maxLength={30}
                            />
                             <TextInput
                            style={styles.txtInput}
                            placeholder={I18n.t("email") + ":"}
                            placeholderTextColor="#c52323"
                            onChangeText={(email) => this.setState({email})}
                            value={this.state.text}
                            maxLength={30}
                            />
                          
                            <DatePicker 
                                style={styles.txtInput}
                                date={this.state.dob}
                                mode="date"
                                placeholder={I18n.t("birthday") + ":"}
                                format="DD MMMM YYYY"
                                placeholderTextColor = "#c52323"
                                confirmBtnText="Confirm"
                                cancelBtnText="Cancel"
                                showIcon={false}
                                customStyles={{
                                dateInput: {
                                    borderWidth: 0,
                                    alignItems: 'flex-start',
                                    height: 'auto',
                                    fontSize: 19,
                                    color: '#c52323'
                                  
                                },
                                placeholderText:{
                                    fontSize: 19,
                                    color: '#c52323'
                                },
                                dateText: {
                                    fontSize: 19,
                                    alignSelf:'flex-start',
                                    color: '#c52323'
                                },
                                }}
                                onDateChange={dob => {
                                this.setState({dob})
                                }}
                            />
                          
                    </View>
                    <View style={styles.botoneraCont}>
                        <TouchableHighlight onPress={()=> this.onNext()} style={styles.button}>
                              <Text style={styles.txtButton}>{I18n.t("next")}</Text>
                        </TouchableHighlight>
                        <TouchableHighlight onPress={()=> this.onSignIn()} style={styles.singButton}>
                              <Text style={styles.txtButton}>{I18n.t("Signin")}</Text>
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
