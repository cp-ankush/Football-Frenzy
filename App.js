import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, StatusBar} from 'react-native';

import Header from './src/Header/components'
import Matches from './src/Matches/components'

export default class App extends Component<Props> {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar
            hidden={false}
            backgroundColor = "#130F0D"/>
          <Header />
          <Matches />
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130F0D',
  },
});
