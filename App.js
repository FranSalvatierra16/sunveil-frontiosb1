import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import AppStackNavigator from './src/navigators/stackNavigator';

export default function App() {
  return (
    <View style={styles.container}>
      
      <AppStackNavigator />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%', // Ocupa todo el ancho de la pantalla
  },
});