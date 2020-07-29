import React from 'react';
import UserInput from './UserInput';

import {
  Button,
  Image,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

class Login extends React.Component{
  render(){
    return(
      <View>
        <Text style={styles.title}>Sign In</Text>
        <UserInput />
        <UserInput />
        <Button
          title="Sign In"
          color="#E50914"
        />
        <Text style={{color:'white'}}>Remember me</Text>
        <Text style={{color:'white'}}>Need help?</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize:32,
    color: 'white',
  },


});

export default Login;
