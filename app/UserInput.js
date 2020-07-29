import React from 'react';

import {
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

class UserInput extends React.Component{
  render(){
    return(
      <View>
        <TextInput style={styles.input}/>
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

export default UserInput;
