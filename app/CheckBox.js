import React from 'react';

import {
  Dimensions,
  StyleSheet,
  Image,
  TouchableOpacity,
  View,
} from 'react-native';


class CheckBox extends React.Component {
  constructor(){
    super();
    this.state = {checked:false}
  }

  render(){
    return(
      <View style={styles.checkBoxView}>
        <TouchableOpacity
          style={styles.checkBox}
          onPress = {()=>{
            this.setState({checked: !this.state.checked});
          }}
        >
        {
          (this.state.checked)
          ?
          (
            <View>
              <Image
                source={require('./images/check.png')}
                style={styles.image}
              />
            </View>
          )
          :
          (
            <View />
          )
        }
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  checkBoxView:{
    alignItems:'center',
  },
  checkBox:{
    justifyContent:'center',
    alignItems:'center',
    borderRadius:2,
    backgroundColor:'#606060',
    width: 16,
    height: 16,

  },
  image:{
    width: 14,
    height: 14,
  },
});

export default CheckBox;
