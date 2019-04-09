/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
//import Demo02 from "./src/demo/Demo02";
import ChatList from './src/demo/chat_list'
import type {State} from "react-native/Libraries/Components/ScrollResponder";
var orm = require("reflect-metadata");
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props,State> {
  render() {
    return (
      <ChatList/>
    );
  }
}