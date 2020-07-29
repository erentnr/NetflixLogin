import React from 'react';

import {
  Image,
  Text,
  View,
} from 'react-native';

class Header extends React.Component{
  render(){
    return(
      <View>
        <Image
          style={{height:80, width:150}}
          source={require('./images/netflix-logo.png')}
        />
      </View>
    )
  }

}

export default Header;
