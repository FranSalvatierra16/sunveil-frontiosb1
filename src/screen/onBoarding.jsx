import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import { Linking } from 'react-native';
import Constants from 'expo-constants';
import { useNavigation } from '@react-navigation/native';

const OnBoarding = () => {
  const [isLoginHovered, setIsLoginHovered] = useState(false);
  const [isGetStartedHovered, setIsGetStartedHovered] = useState(false);
  const navigation = useNavigation();

  const handleLoginMouseEnter = () => {
    setIsLoginHovered(true);
  };

  const handleLoginMouseLeave = () => {
    setIsLoginHovered(false);
  };

  const handleGetStartedMouseEnter = () => {
    setIsGetStartedHovered(true);
  };

  const handleGetStartedMouseLeave = () => {
    setIsGetStartedHovered(false);
  };

  const handleLoginPress = () => {
    // Navegar a la pantalla de inicio de sesión (SignIn)
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.container}>
      <View style={styles.principal}>
        <Image source={require('../../img/SunVeil-WhiteLogo.png')} style={styles.image} />
        <Text style={styles.title}>SunVeil</Text>

        <TouchableOpacity
          style={[
            styles.button,
            {
              backgroundColor: isLoginHovered ? '#fff' : '#1F242E',
              borderColor: '#fff',
            },
          ]}
          onMouseEnter={handleLoginMouseEnter}
          onMouseLeave={handleLoginMouseLeave}
          onPress={handleLoginPress}
        >
          <Text style={[styles.buttonText, { color: isLoginHovered ? '#000' : '#fff' }]}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.button1,
            {
              backgroundColor: isGetStartedHovered ? '#fff' : '#1F242E',
              borderColor: '#fff',
            },
          ]}
          onMouseEnter={handleGetStartedMouseEnter}
          onMouseLeave={handleGetStartedMouseLeave}
        >
          <Text style={[styles.buttonText, { color: isGetStartedHovered ? '#000' : '#fff' }]}>Get Started</Text>
        </TouchableOpacity>

        <View style={styles.texto}>
          <Text style={styles.lightText}>By selecting one or the other, you are</Text>
          <Text style={styles.lightText}>
            agreeing to the{' '}
            <TouchableOpacity onPress={() => Linking.openURL('https://www.example.com/terms')}>
              <Text style={styles.whiteText}>Terms of Service</Text>
            </TouchableOpacity>{' '}
            &{' '}
            <TouchableOpacity onPress={() => Linking.openURL('https://www.example.com/privacy')} style={styles.centerText}>
              <Text style={styles.whiteText}>Privacy 
              Policy </Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F242E',
    height: '100%',
    marginTop: Constants.statusBarHeight, 
  },
  principal: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 56,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#fff',
  },
  button: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 15,
    color:'000000',
    marginVertical: 10,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'semibold',
  },
  button1: {
    width: '80%',
    backgroundColor: '#1F242E',
    padding: 15,
    marginVertical: 10,
    marginTop: 20,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
  },
  buttonText1: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lightText: {
 
      color: '#888', // Gris clarito
      fontSize: 13,
      fontFamily: 'Montserrat',
    },
  whiteText: {
    color: '#fff', // Blanco
  },
  texto: {
    marginTop: 20
  },
  centerText: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
  },
});

export default OnBoarding;
