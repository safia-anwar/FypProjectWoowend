import React, { Component } from 'react';
import { Text, View, StyleSheet, Button , TouchableOpacity } from 'react-native';
import Dashboard from 'react-native-dashboard';

const items = [

  { name: 'Friends & Family', background: '#D0B3D0', icon: 'users' },
  { name: 'Organization', background: '#D0B3D0', icon: 'building' },

];

export default class Screen1 extends Component {
  _card = el => {
    console.log('Card: ' + el.name)
    this.props.navigation.navigate("MainApp");
  };
  render() {
    return (
      <View style={styles.container}>
      
        <Dashboard items={items} background={true} card={this._card} column={2} />
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 140,
    backgroundColor: '#ecf0f1',
  },
});