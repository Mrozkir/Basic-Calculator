import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const MainScreen = () => {
    
    const[input,setInput]=useState("")

    const [result, setResult]=useState("")
  
    const onButtonPress=(value)=>{
        if(value ==="="){
            
            try{
                setResult(eval(input))
            }
            
            catch(error){
                setResult('error')
            }

        }
       
        else if (value==="C") {
            setInput("");
            setResult(" ")
        }

        else{
            setInput(input+value)
        }
  }  
  return (
    <SafeAreaView style={styles.container}>
        
        <View style={styles.resultContainer}>
            <Text style={styles.resultText}>{result}</Text>
        </View>

        <View style={styles.inputContainer}>
            <TextInput
            style={styles.usrInput}
            value={input}
            onChangeText={setInput}
            keyboardType='numeric'/>
        </View>

        <View style={styles.btnContainer}>
            {['7','8','9','/','4','5','6','*','1','2','3','-','0','C','=','+'].map((item,index)=>(
                <TouchableOpacity
                key={index}
                style={styles.btn}
                onPress={()=>onButtonPress(item)}>
                    <Text style={styles.btnText}>{item}</Text>
                </TouchableOpacity>
            ))}
        </View>
    </SafeAreaView>
  )
}

export default MainScreen

const styles = StyleSheet.create({
    
    container:{
        flex:1,
        backgroundColor:'#f5f5f5'
    },
    
    resultContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    
    resultText:{
        fontSize:50,
        color:'#5499c7'
    },
    
    inputContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'flex-end'
    },
    
    usrInput:{
        fontSize:40,
        color:'#2980b9'
    },
    
    btnContainer:{
        flex:3,
        flexDirection:'row',
        flexWrap:'wrap'
    },

    btn:{
        fontSize:25,
        height:'22%',
        width:'22%',
        alignItems:'center',
        borderColor:'#aed6f1',
        borderWidth:1,
        borderRadius:5,
        marginHorizontal:5,
        marginVertical:5,
        justifyContent:'center'
    },
    btnText:{
        fontSize:23,
        alignItems:'center',
        textAlign:'center',
        padding:'20%',
        color:'#1f618d',
        fontWeight:'bold'
    }
})