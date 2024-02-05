import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('home'); // Estado para rastrear la pestaña activa

  const handleTabPress = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <View style={styles.navbar}>
      <TouchableHighlight
        style={styles.navItem}
        underlayColor="#37404B" 
        onPress={() => handleTabPress('home')}
      >
        <Icon name="home-outline" size={30} color={activeTab === 'home' ? '#fff' : '#333'} />
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.navItem}
        underlayColor="#37404B"
        onPress={() => handleTabPress('heart')}
      >
        <Icon name="heart-outline" size={30} color={activeTab === 'heart' ? '#fff' : '#333'} />
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.navItem}
        underlayColor="#37404B"
        onPress={() => handleTabPress('add')}
      >
        <Icon name="add-circle-outline" size={50} color={activeTab === 'add' ? '#fff' : '#333'} />
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.navItem}
        underlayColor="#37404B"
        onPress={() => handleTabPress('settings')}
      >
        <Icon name="sunny" size={30} color={activeTab === 'settings' ? '#fff' : '#333'} />
      </TouchableHighlight>

      <TouchableHighlight
        style={styles.navItem}
        underlayColor="#37404B"
        onPress={() => handleTabPress('person')}
      >
        <Icon name="person-outline" size={30} color={activeTab === 'person' ? '#fff' : '#333'} />
      </TouchableHighlight>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#1F242E',
    height: 80,
    width: '100%',
    elevation: 3,
    borderRadius: 20,
    marginTop: Constants.statusBarHeight,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Navbar;