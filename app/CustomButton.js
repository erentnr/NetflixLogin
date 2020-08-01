import React from 'react';

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

function CustomButton(props){
  return(
    <View style={styles.customButtonView}>
      <TouchableOpacity
        style={styles.customButton}
      >
        <Text style={styles.buttonText}>{props.text}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  customButtonView:{
    alignItems:'center',
  },
  customButton:{
    justifyContent:'center',
    borderRadius:4,
    backgroundColor:'#E50914',
    width: width * 0.84,
    height: height * 0.07,

  },
  buttonText:{
    color:'white',
    fontSize:16,
    fontWeight:'700',
    textAlign:'center',
  },
});

export default CustomButton;
