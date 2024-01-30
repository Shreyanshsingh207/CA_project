import React from 'react'
import { Text, Button, View,StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import { create } from 'react-test-renderer'


function IntroScreen(props) {

    const LoginBtn=()=>{
props.navigation.navigate('Login')
}
  return (
    <SafeAreaView>
    <ImageBackground  style={{width:'100%', height:'100%'}} source={require('../../Assets/Photos/back222.png')} >
    <View style={styles.container}>
     
        <Text style={styles.Welcome}> Welcome to CAMS App</Text>
      <Button onPress={LoginBtn}
      title='Go to Login page'/>
    </View>
    </ImageBackground>
    </SafeAreaView>
  )
}

const styles =StyleSheet.create({
container:{
    flex:1,
  alignItems:'center',
  justifyContent:'center',
  
  
},
Welcome:{
  fontSize:30,
  marginBottom:40,
  fontWeight:'600',
  color:'red'
}
})

export default IntroScreen
