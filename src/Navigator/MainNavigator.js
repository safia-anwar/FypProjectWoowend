
import React, { Component } from "react";


import { createSwitchNavigator, createAppContainer } from 'react-navigation'

import { createStackNavigator } from 'react-navigation-stack'



import LoginScreen from '../Screens/LoginScreen'
import SignUpScreen from "../Screens/SignUpScreen";
import SplashScreen from '../Screens/SplashScreen'


import DashBoardNavigator from '../Navigator/DashBoardNavigator'

import App from "../../App";



const loginStack = createStackNavigator({


    Login: {

        screen: LoginScreen,
        navigationOptions: () => {

            return {

                headerShown: false
            }
        }
    },
    SignUp: {
        screen: SignUpScreen,
        navigationOptions: () => {

            return {

                headerShown: false
            }
        }
    }

})


const AppStack = createStackNavigator({

    DashBoard: {

        screen: DashBoardNavigator,
        navigationOptions: () => {

            return {

                headerShown: false
            }
        }
    },

    MainApp: {

        screen: App,
        navigationOptions: () => {

            return {

                headerShown: false
            }
        }
    }

})


const AuthStack = createSwitchNavigator({


    Splash: {

        screen: SplashScreen
    },

    LoginStack: {

        screen: loginStack
    },
    AppStack: {

        screen: AppStack
    }


})

const AppContainer = createAppContainer(AuthStack)



export default AppContainer;