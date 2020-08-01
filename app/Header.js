import React from 'react';

import {
  Dimensions,
  Image,
  StyleSheet,
  View,
} from 'react-native';

const { width, height } = Dimensions.get('window');

function Header(){
  return(
    <View style={styles.headerView}>
      <Image
        style={styles.img}
        source={require('./images/netflix-logo.png')}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  headerView: {
    flex:1.5,
    justifyContent:'center'
  },
  img:{
    width: width * 0.3,
    height: '100%',
    resizeMode: 'contain',
    marginLeft: width * 0.08,
  }
});

export default Header;
