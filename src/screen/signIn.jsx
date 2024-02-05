import React from "react";
import { View, Text,  TextInput,TouchableOpacity, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import Constants from 'expo-constants';
import { useFonts, Manrope_500Medium } from '@expo-google-fonts/manrope';
const SignIn = ({ navigation }) => {

  const handleGoBack = () => {
    // Navegar de nuevo a OnBoarding
    navigation.navigate("OnBoarding");
  };
  const [fontsLoaded] = useFonts({
    Manrope_500Medium,
  });

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={handleGoBack}>
        <Icon name="arrow-back-outline" size={24} color="black" />
      </TouchableOpacity>
     <View style={styles.div}>
        <Text style={styles.title}>
            SubVeil
        </Text>
        <Text style={styles.sub}>Let’s get you sign in</Text>
        <Text style={styles.sub1}>Join our community and experience a {'\n'}seamless way to read a news.</Text>
     </View>
     <View style={styles.divForm}>
        <Text style={{fontSize:'16', fontFamily:'Poppins', fontWeight:'semibold'}}>Email</Text>
        
     </View>
     <View style={styles.inputContainer}>
      <Icon name="envelope" size={20} color="#999" style={styles.icon} />
      <TextInput
        placeholder="Correo electrónico"
        style={styles.input}
        keyboardType="email-address"
        autoCapitalize="none"
      />
       </View>
    </View>
  );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
       
        height: '100%',
        marginTop: Constants.statusBarHeight, 
      },
    circle: {
      marginTop: 10,
      marginLeft: 20,
      width: 24,
      height: 24,
      borderRadius: 25,
      backgroundColor: '#ddd', // Gris clarito
      marginTop: Constants.statusBarHeight,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 20,
    },
    div: {
      width: 398,
      height: 104,
      alignItems: 'center',
      justifyContent: 'center',
    },
    divForm: {
        width: 398,
        height: 154,
       marginLeft:40,
        justifyContent: 'center',
      },
    title: {
      fontWeight: 'bold',
      fontSize: 24,
      color: 'black',
    },
    sub: {
      fontWeight: '500', // Usar '500' en lugar de 'semibold'
      fontSize: 18,
      fontFamily: 'Manrope_500Medium', // Corregir aquí
    },
    sub1: {
        fontWeight: 'normal', // Usar 'normal' en lugar de 'regular'
        fontSize: 16,
        fontFamily: 'Poppins-Regular', // Corregir aquí
        color: '#9AA0A6',
        alignItems: 'center',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#999',
        marginBottom: 20,
      },
      icon: {
        marginRight: 10,
      },
      input: {
        flex: 1,
        fontSize: 16,
        color: '#333',
      },
      
  });
  
  export default SignIn;