import React  from 'react'
import { Image, SafeAreaView, View ,StyleSheet,StatusBar} from 'react-native'
import {useState }from 'react';
import {useEffect} from 'react'

function SplashScreen(props) {
   
    useEffect (()=>{
        setTimeout(()=>{
       props.navigation.navigate('Introduction')
        },5000);
},[] );


  return (
   <SafeAreaView style={styles.container} >
    
    <View>
    <StatusBar hidden={true}/>
     <Image style={styles.Image1} source={require('../../Assets/Photos/logo222.jpg')}/>
    </View>
   </SafeAreaView>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1
  },
Image1:{
  width:'100%',
  height:'100%',
  objectFit:'fill',
 
}
})
export default SplashScreen
