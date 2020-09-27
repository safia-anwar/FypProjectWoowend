import React , { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';


export default class SignupScreen extends React.Component{
    
  constructor(props){
    super(props);
    this.state={
      typing_email: false,
      typing_password: false,
      typing_cpassword:false,
      animation_login : new Animated.Value(width-40),
      enable:true
    }
  }

  _foucus(value){
    if(value=="email"){
      this.setState({
        typing_email: true,
        typing_password: false,
        typing_cpassword:false
      })
    }
    if (value=="password") {
         this.setState({
        typing_email: false,
        typing_password: true,
        typing_cpassword:false
      })
    }

      if (value=="cpassword") {
         this.setState({
        typing_email: false,
        typing_password: false,
        typing_cpassword:true
      })

      }
    
  }

  _typing(){
    return(
      <TypingAnimation 
        dotColor="#93278f"
        style={{marginRight:25}}
      />
    )
  }

  _animation(){
    Animated.timing(
      this.state.animation_login,
      {
        toValue: 40,
        duration: 250,
        useNativeDriver: false
        
      }
    ).start();

    setTimeout(() => {
      this.setState({
        enable:false,
        typing_email: false,
        typing_password: false,
        typing_cpassword:false
      })
    }, 150);
  }

  render(){
    const width = this.state.animation_login;
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          <View style={styles.header}>
              <ImageBackground
                source={require("../images/header.png")}
                style={styles.imageBackground}
              >
                <Text style={{
                  color:'white',
                  fontWeight:'bold',
                  fontSize:30,
                   marginTop:-100
                }}>Signup</Text>
               

              </ImageBackground>
          </View>
          <View style={styles.footer}>
                <Text style={[styles.title,{
                  marginTop:50
                }]}>Email</Text>
                <View style={styles.action}>
                    <TextInput 
                      placeholder="Enter Your Email"
                      style={styles.textInput}
                      onFocus={()=>this._foucus("email")}
                    />
                    {this.state.typing_email ?
                      this._typing()
                    : null}
                </View>

                <Text style={[styles.title,{
                  marginTop:20
                }]}>Password</Text>
                <View style={styles.action}>
                    <TextInput 
                      secureTextEntry
                      placeholder="Enter Your Password"
                      style={styles.textInput}
                      onFocus={()=>this._foucus("password")}
                    />
                    {this.state.typing_password ?
                      this._typing()
                    : null}
                </View>

                <Text style={[styles.title,{
                  marginTop:20
                }]}>Confirm Password</Text>
                <View style={styles.action}>
                    <TextInput 
                      secureTextEntry
                      placeholder="Confirm Your Password"
                      style={styles.textInput}
                      onFocus={()=>this._foucus("cpassword")}
                    />
                    {this.state.typing_password ?
                      this._typing()
                    : null}
                </View>
                
                <TouchableOpacity>
                  
                  <View>
                    <LinearGradient
                        colors={['#3E00B3','#6B00D7','#A230ED','#C364FA','#D391FA']}
                        style={styles.animation}>
                         <Animated.View style={[styles.textLogin,{
                          width
                        }]}>
                          {this.state.enable ?
                            <Text style={{ color:'white',
                                          fontWeight:'bold',
                                            fontSize:20,}}> Signup</Text>:
                            
                            <Animatable.View>
                             <FontAwesome 
                                name="check"
                                color="white"
                                size={20}
                              />
                            </Animatable.View>
                          
                          }
                      </Animated.View>
                        
                      </LinearGradient>
                  </View>
                  
                </TouchableOpacity>

                <View style={styles.signUp}>
                    <TouchableOpacity
                    onPress={()=>this.props.navigation.navigate("Login")}>
                      <Text style={{color:'purple'}}>Already have an account? Login</Text>
                    </TouchableOpacity> 
                </View>
          </View>
      </View>
    )
  }
}


const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    justifyContent:'center'
  },
  header: {
    flex:1,
  },
  footer: {
    flex:2,
    padding:20
  },
  imageBackground:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    height:'100%'
  },
  title: {
    color:'black',
    fontWeight:'bold'
  },
  action: {
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2'
  },
  textInput: {
    flex:1,
    marginTop:5,
    paddingBottom:5,
    color:'gray'
  },
  button_container: {
    alignItems: 'center',
    justifyContent:'center'
  },
  animation: {
    paddingVertical:10,
    marginTop:30,
    borderRadius:100,
  },
  textLogin: {
    justifyContent:'center',
    alignItems:'center'
  },
  signUp: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20
  }
});