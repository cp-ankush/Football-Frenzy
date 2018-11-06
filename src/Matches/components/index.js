import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, FlatList, ImageBackground} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import Card from '../Card'
import {data} from '../data'

const _keyExtractor = (item, index) => item.id;

const FirstRoute = () => (
  <View style={[styles.container]}>
    <ImageBackground
      source={require('../../../assets/background.png')}
      style={styles.backgroundImage}
      >
      <View style={{
        paddingHorizontal: '3%'
      }}>
        <Text styles={{marginTop: '5%'}}/>
        <FlatList
          contentContainerStyle={{paddingBottom: 20}}
          data={data}
          renderItem={({item}) => <Card data={item} />}
          keyExtractor={_keyExtractor}
        />
      </View>
    </ImageBackground>
  </View>
);
const SecondRoute = () => (
  <View style={[styles.container, { alignItems: 'center', justifyContent: 'center' }]}>
    <Text style={{color: 'white'}}>Coming Soon</Text>
  </View>
);

export default class MatchesTabs extends React.Component {

  _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={{ backgroundColor: '#FFF' }}
        style={{
          backgroundColor: '#130F0D',
          borderBottomWidth: 0.5,
          borderColor: '#FFF'
        }}
        labelStyle={{
          color: "#FFF"
        }}
      />
    );
  };

  state = {
    index: 0,
    routes: [
      { key: 'upcoming', title: 'UPCOMING' },
      { key: 'past', title: 'PAST' },
      { key: 'live', title: 'LIVE' },
    ],
  };

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderTabBar={this._renderTabBar}
        renderScene={SceneMap({
          upcoming: FirstRoute,
          past: SecondRoute,
          live: SecondRoute
        })}
        onIndexChange={index => this.setState({ index })}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#130F0D',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  }
});
