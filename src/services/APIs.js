import {Alert} from 'react-native'
import Constant from '../Constant'
import Global from '../Global'
export const SignInAPI = (body, done) => {
    fetch(Constant.api_url + 'login', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      }).then((response) => response.json())
          .then((responseJson) => {
           if(responseJson.status)
           {
                if(responseJson.status == '200')
                {
                  Global.token = responseJson.token
                  Global.email = responseJson.email
                  Global.fname = responseJson.fname
                  Global.lname = responseJson.lname
                  Global.phone_number = responseJson.phone_number
                  Global.address = responseJson.address
                  Global.province = responseJson.province
                  Global.postalcode = responseJson.postalcode,
                  Global.image_url = responseJson.image_url
                  done({
                    'status':true,
                    'message':'',
                    'result':null
                })
                }
                else
                {
                    done({
                        'status':false,
                        'message':responseJson.error,
                        'result':null
                    })
                }
           }
           else
           {
            done({
                'status':false,
                'message':'connection error',
                'result':null
            })
           }
          })
          .catch((error) => { 
            Alert.alert(error.message)
            done({
              'status':false,
              'message':error.message,
              'result':null
            })
            return
    }); 

};
export const SignUpAPI = (body, done) => {
    fetch(Constant.api_url + 'register', {
        method: "POST",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
      }).then((response) => response.json())
          .then((responseJson) => {
            if(responseJson.status)
            {
                 if(responseJson.status == '200')
                 {
                   Global.token = responseJson.token
                   Global.email = responseJson.email
                   Global.fname = responseJson.fname
                   Global.lname = responseJson.lname
                   Global.phone_number = responseJson.phone_number
                   Global.address = responseJson.address
                   Global.province = responseJson.province
                   Global.postalcode = responseJson.postalcode,
                   Global.image_url = responseJson.image_url
                   done({
                    'status':true,
                    'message':'',
                    'result':null
                })
                 }
                 else
                 {
                     done({
                         'status':false,
                         'message':responseJson.error,
                         'result':null
                     })
                 }
            }
            else
            {
             done({
                 'status':false,
                 'message':responseJson.error,
                 'result':null
             })
            }
          })
          .catch((error) => { 
            Alert.alert(error.message)
            return
    }); 
    
};

export const GetMenuAPI = (body,done) => {
    fetch(Constant.api_url + 'menus', {
        method: "GET",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'authorization':'Bearer ' + Global.token
        }
      }).then((response) => response.json())
          .then((responseJson) => {
             done(responseJson)
          })
          .catch((error) => { 
            Alert.alert(error.message)
            return
    });   
};
export const GetPlatesAPI = (id, body,done) => {
    fetch(Constant.api_url + 'plates?menu_id=' + id, {
        method: "GET",
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'authorization':'Bearer ' + Global.token
        }
      }).then((response) => response.json())
          .then((responseJson) => {
            if(responseJson.success)
            {
                done(responseJson.data)
            }
            else
            {
                done([])
            }
            
          })
          .catch((error) => { 
            Alert.alert(error.message)
            return
            }); 
};   