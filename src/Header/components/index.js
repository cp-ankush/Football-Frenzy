import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Header extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity >
          <Image
           style={{width: 27, height: 20}}
           source={require('../../../assets/menu-icon.png')}
         />
        </TouchableOpacity>
        <View style={{justifyContent: 'center'}}>
          <Text style={[styles.userName, {alignSelf: 'center'}]}>Welcome, John</Text>
        </View>
        <TouchableOpacity>
          <Image
           style={{width: 35, height: 35}}
           source={require('../../../assets/profile-user.png')}
         />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '5%',
    paddingTop: '7%',
    marginBottom: '0%',
    backgroundColor: '#130F0D',
  },
  userName: {
  	color: "#FFF",
  	fontSize: 22,
  	fontWeight: "500"
  },
  menu: {
    backgroundColor: 'black'
  }
});
