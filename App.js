import React, {Component} from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView} from 'react-native';

import Header from './src/Header/components'
import Matches from './src/Matches/components'

export default class App extends Component {
  render() {
    return (
        <View style={styles.container}>
          <StatusBar
            hidden={false}
            backgroundColor = "#130F0D"/>
            <SafeAreaView style={styles.statusBarStyle}>
              <View style={styles.container}>
                <Header />
                <Matches />
              </View>
           </SafeAreaView>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130F0D',
  },
  statusBarStyle: {
    flex: 1, 
    backgroundColor: "transparent"
  },
});
