import React from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';

class Footer extends React.Component{
  render(){
    return(
      <View>
        <Image
          style={{height:20, width:20}}
          source={require('./images/facebook-logo.png')}
        />
        <Text style={{color:'white'}}>Login wtih Facebook</Text>
        <Text style={{color:'white'}}>New to Netflix?</Text>
        <Text style={{color:'white'}}>Sign up now.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input:{
    backgroundColor:'#565350',
    marginBottom:20,
  }
});

export default Footer;
