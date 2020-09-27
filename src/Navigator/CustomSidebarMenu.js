//This is an example code for Navigation Drawer with Custom Side bar//
import React, { Component } from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
import { Icon } from 'react-native-elements';

export default class CustomSidebarMenu extends Component {
  constructor() {
    super();
    //Setting up the Main Top Large Image of the Custom Sidebar
    this.proileImage = 'https://lh3.googleusercontent.com/pw/ACtC-3dyvE0dG8M0McoV6KE8vjPmOkDIR0ReEVNliiWkwBE-ehuju3lP_lOfHAcnXIWCwGauZO4h1HGB-t98uIM4byh5JGNw6jv135dByZ8O8UENuuHj9gj6ndcjkcdEN2kSNq7VZpPG03sX31qCiYNJ0rc=s200-no?authuser=0';
   
    //Array of the sidebar navigation option with icon and screen to navigate
    //This screens can be any screen defined in Drawer Navigator in App.js
    //You can find the Icons from here https://material.io/tools/icons/
    this.items = [
      {
        navOptionThumb: 'dashboard',
        navOptionName: 'Dashboard',
        screenToNavigate: 'NavScreen1',
        
      },
      {
        navOptionThumb: 'account-circle',
        navOptionName: 'Profile',
        screenToNavigate: 'NavScreen2',
      },
      {
        navOptionThumb: 'swap-horiz',
        navOptionName: 'Previous Rides',
        screenToNavigate: 'NavScreen3',
      },
      {
        navOptionThumb: 'settings',
        navOptionName: 'Settings',
        screenToNavigate: 'NavScreen4',
      },
      {
        navOptionThumb: 'exit-to-app',
        navOptionName: 'Logout',
        screenToNavigate: 'NavScreen5',
      },
    ];
  }
  render() {
    return (
      <View style={styles.sideMenuContainer}>
        {/*Top Large Image */}
        <Image
          source={{ uri: this.proileImage }}
          style={styles.sideMenuProfileIcon}
        />
        {/*Divider between Top Image and Sidebar Option*/}
        <View
          style={{
            width: '100%',
            height: 1,
            backgroundColor: '#e2e2e2',
            marginTop: 15,
          }}
        />
        {/*Setting up Navigation Options from option array using loop*/}
        <View style={{ width: '100%' }}>
          {this.items.map((item, key) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingTop: 10,
                paddingBottom: 10,
                backgroundColor: global.currentScreenIndex === key ? '#e0dbdb' : '#ffffff',
              }}
              key={key}>
              <View style={{ marginRight: 10, marginLeft: 20 }}>
                <Icon name={item.navOptionThumb} size={25} color="#808080" />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  color: global.currentScreenIndex === key ? 'red' : 'black',
                }}
                onPress={() => {
                  global.currentScreenIndex = key;
                  this.props.navigation.navigate(item.screenToNavigate);
                }}>
                {item.navOptionName}
              </Text>
            </View>
          ))}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  sideMenuContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 20,
  },
  sideMenuProfileIcon: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    marginTop: 20,
    borderRadius: 150 / 2,
  },
});