import React from 'react';
import UserInput from './UserInput';
import CustomButton from './CustomButton';
import CheckBox from './CheckBox';

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

function Login (){
  return(
    <View style={styles.loginView}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.form}>
        <View style={styles.inputView}>
          <UserInput
            placeholder="Email or Phone number"
            type="email-address"
          />
          <UserInput
            placeholder="Password"
            isPassword={true}
          />
        </View>
        <CustomButton
          text='Sign In'
        />
        <View style={styles.helpContainer}>
          <View style={styles.rememberMeView}>
            <CheckBox />
            <Text style={{color:'white', fontSize:12}}> Remember me</Text>
          </View>
          <View style={styles.helpView}>
            <Text style={{color:'white', fontSize:12}}>Need help?</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  loginView: {
    flex: 4,
    justifyContent:'flex-start',
  },
  form:{
    alignItems:'center',
  },
  helpView:{
    flex:1,
    alignItems:'flex-end',
  },
  rememberMeView:{
    flex:1,
    alignItems:'center',
    flexDirection:'row',
  },
  helpContainer:{
    marginTop:height * 0.02,
    alignItems:'center',
    flexDirection:'row',

    width: width * 0.84,
  },
  inputView:{
    marginBottom: height * 0.03,
    marginTop: height * 0.03,
  },
  title: {
    fontSize:  36,
    fontWeight: '700',
    color: 'white',
    marginLeft: width * 0.08,
  },

});

export default Login;
