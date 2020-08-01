import React from 'react';

import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

function UserInput(props){
  return(
    <View style={styles.userInputView}>
      <TextInput
        style={styles.input}
        placeholder={props.placeholder}
        placeholderTextColor = "grey"
        keyboardType={props.type}
        secureTextEntry={props.isPassword}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  userInputView:{
    alignItems:'center',
  },
  input:{
    color:'white',
    paddingLeft:width * 0.04,
    borderRadius:4,
    backgroundColor:'#606060',
    marginBottom: height * 0.01,
    marginTop: height * 0.01,
    width: width * 0.84,
    height: height * 0.07,

  },
});

export default UserInput;
