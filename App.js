import * as React from 'react';
import {Text, View, StyleSheet,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component{
  render(){
    return(
      <AppContainer/>
    )
  }
}
const switchNavigator = createSwitchNavigator({
  ReadStoryScreen:{screen: ReadStoryScreen},
  WriteStoryScreen:{screen: WriteStoryScreen}
})

const AppContainer =  createAppContainer(switchNavigator);
