import React from 'react';

import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');


function Footer(){
  return(
    <View style={styles.footerView}>
      <View style={styles.loginWithFacebook}>
        <Image
          style={{height:16, width:16}}
          source={require('./images/facebook-logo.png')}
        />
        <Text style={{color:'white', fontSize:12,}}>  Login wtih Facebook</Text>
      </View>
      <View style={styles.signUp}>
        <Text style={{color:'#606060'}}>New to Netflix?</Text>
        <Text style={{color:'white'}}> Sign up now.</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  footerView: {
    flex:2,
    justifyContent:'center',
  },
  signUp:{
    flexDirection: 'row',
    alignItems:'center',
    marginTop: height * 0.02,
    marginLeft: width * 0.08,

  },
  loginWithFacebook:{
    flexDirection: 'row',
    alignItems:'center',
    marginBottom: height * 0.02,
    marginLeft: width * 0.08,

  },
});

export default Footer;
