import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  ActivityIndicator
}
  from 'react-native';

import LinearGradient from 'react-native-linear-gradient';


import woologo from '../images/woologo.png';


export default class SplashScreen extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate("Login")
    }, 3000);
  }


  render() {
    return (
      <View style={styles.container}>
        <LinearGradient colors={['#3E00B3', '#6B00D7', '#A230ED', '#C364FA', '#D391FA']}
          style={styles.gradient}>
          <View>
            <Image source={woologo} />
          </View>

          <ActivityIndicator size="large" color="white" style={{ margin: 10 }} />
        </LinearGradient>


      </View>

    );


  }

}



var styles = StyleSheet.create({
  container:
  {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  gradient:
  {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: '100%',
    width: '100%',
  }

}); 