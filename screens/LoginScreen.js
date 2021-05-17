import * as React from 'react';
import {Text, View, TouchableOpacity, StyleSheet, TextInput, KeyboardAvoidingView, Image, ScrollView, FlatList} from 'react-native';
import * as Permissions from 'expo-permissions';
import {SearchBar} from 'react-native-elements';
import {BarCodeScanner} from 'expo-barcode-scanner';
import * as firebase from 'firebase';
import db from '../config.js';

export default class LoginScreen extends React.Component{
    constructor(){
        super();
        this.state={
            emailId:'',
            password:''
        }
    }
    userLogin = (emailId, password) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(emailId, password)
          .then(() => {
            this.props.navigation.navigate("ReadStoryScreen");
          })
          .catch(error => {
            var errorCode = error.code;
            var errorMessage = error.message;
            return Alert.alert(errorMessage);
          });
      };
      render(){
          return(
              <View>
                  <View>
                  <TextInput
              style={styles.loginBox}
              placeholder="abc@example.com"
              placeholderTextColor="gray"
              keyboardType="email-address"
              onChangeText={text => {
                this.setState({
                  emailId: text
                });
              }}
            />
            <TextInput
              style={[styles.loginBox, { marginTop: RFValue(15) }]}
              secureTextEntry={true}
              placeholder="Enter Password"
              placeholderTextColor="gray"
              onChangeText={text => {
                this.setState({
                  password: text
                });
              }}
            />
                  </View>
                  <View style={{ flex: 0.5, alignItems: "center" }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.userLogin(this.state.emailId, this.state.password);
              }}
            >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
                    </View>
              </View>
          )
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#6fc0b8"
    },
    loginBox: {
      width: "80%",
      height: RFValue(50),
      borderWidth: 1.5,
      borderColor: "#ffffff",
      fontSize: RFValue(20),
      paddingLeft: RFValue(10)
    },
    button: {
        width: "80%",
        height: RFValue(50),
        justifyContent: "center",
        alignItems: "center",
        borderRadius: RFValue(25),
        backgroundColor: "#ffff",
        shadowColor: "#000",
        marginBottom: RFValue(10),
        shadowOffset: {
          width: 0,
          height: 8
        },
        shadowOpacity: 0.3,
        shadowRadius: 10.32,
        elevation: 16
      },
      buttonText: {
        color: "#32867d",
        fontWeight: "200",
        fontSize: RFValue(20)
      }
})
