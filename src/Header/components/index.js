import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

export default class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity >
          <Image
           style={styles.menuIconStyle}
           source={require('../../../assets/menu-icon.png')}
         />
        </TouchableOpacity>
        <View style={styles.textView}>
          <Text style={styles.userName}>Welcome, John</Text>
        </View>
        <TouchableOpacity>
          <Image
           style={styles.userIconStyle}
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
    backgroundColor: '#130F0D'
  },
  userName: {
  	color: "#FFF",
  	fontSize: 22,
    fontWeight: "500",
    borderColor: 'red',
    alignSelf: 'center',
  },
  menu: {
    backgroundColor: 'black'
  },
  menuIconStyle: {
    width: 27, 
    height: 20,
  },
  textView: {
    justifyContent: 'center', 
    height: 40,
  },
  userIconStyle: {
    width: 35, 
    height: 35,
  },
});
