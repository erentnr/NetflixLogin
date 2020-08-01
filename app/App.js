import React from 'react';
import Header from './Header';
import Login from './Login';
import Footer from './Footer';

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="black-content" />
      <SafeAreaView style={{flex:1, backgroundColor:"black"}}>
      <ScrollView
        contentContainerStyle={{
          flex: 1,
          justifyContent: 'space-between'}}>
        <Header />
        <Login />
        <Footer />
      </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: "black",
  },
});

export default App;
