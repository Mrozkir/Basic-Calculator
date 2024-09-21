import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import icon from "../assets/calculator.png"

const IntroScreen = () => {

  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Image source={icon} style={styles.subImg}/>
      </View>
    </View>
  )
}

export default IntroScreen

const styles = StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'whitesmoke',
        height:'100%',
        width:'100%'
    }, 
    subContainer:{
        height:'30%',
        width:'45%',
        alignItems:'center',
        justifyContent:'center'
    }, 
    subImg:{
        height:'100%',
        width:'100%',
    }

})