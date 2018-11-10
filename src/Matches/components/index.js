import React from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';
import { TabView, TabBar, SceneMap } from 'react-native-tab-view';
import UpcomingEvents from './upcoming-events';
import PastEvents from './past-events';
import LiveEvents from './live-events';

export default class MatchesTabs extends React.Component {
  
  state = {
    index: 0,
    routes: [
      { key: 'upcoming', title: 'UPCOMING' },
      { key: 'past', title: 'PAST' },
      { key: 'live', title: 'LIVE' },
    ],
  };

  _renderTabBar = props => {
    return (
      <TabBar
        {...props}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBarStyle}
        labelStyle={styles.labelStyle}
      />
    );
  };

  _renderScene = () => (
    SceneMap({
      upcoming: UpcomingEvents,
      past: PastEvents,
      live: LiveEvents
    })
  )

  render() {
    return (
      <TabView
        navigationState={this.state}
        renderTabBar={this._renderTabBar}
        renderScene={this._renderScene()}
        onIndexChange={index => this.setState({ index })}
      />
    );
  }
}

const styles = StyleSheet.create({
  indicatorStyle: { 
    backgroundColor: '#FFF' 
  },
  tabBarStyle: {
    backgroundColor: '#130F0D',
    borderBottomWidth: 0.5,
    borderColor: '#FFF'
  },
  labelStyle: {
    color: "#FFF"
  },
});
