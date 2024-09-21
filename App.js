import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainScreen from './Screens/MainScreen';
import IntroScreen from './Screens/IntroScreen';

export default function App() {
  const [isLoaded, setIsLoaded]=useState(false)
  setTimeout(()=>{
    setIsLoaded(true)
  }, 1000)
  return (
    <View style={styles.container}>
      {isLoaded? <MainScreen/>:<IntroScreen/> }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
