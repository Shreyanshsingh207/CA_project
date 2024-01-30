import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Touchable,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';


function Filing(props) {

    const month=()=>{
        props.navigation.navigate('month')
    }
    const quartly=()=>{
        props.navigation.navigate('quartly')
    }
  return (
    <SafeAreaView style={Styles.body}>
      <ImageBackground style={{width:'100%', height:'100%',}} source={require('../../Assets/Photos/back22.jpg')}>
    
    <View style={Styles.home}>
      <Image  style={{ width:40,height:40}} source={require('../../Assets/Photos/camslogo111.jpg')}/>
     
      <Text style={Styles.nameText}>Goods And Service Tax</Text>
     
    </View>
   
     
        <View  style={Styles.container}>
          <TouchableOpacity style={Styles.CardView} onPress={month} >
          <Image style={{width:70,height:80,alignSelf:'center'}} source={require('../../Assets/Photos/bbbb.jpg')}/>
            <Text style={Styles.inputView}>Monthly Filing</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={quartly}>
          <Image style={{width:70,height:80,alignSelf:'center'}} source={require('../../Assets/Photos/bbbb.jpg')}/>
            <Text style={Styles.inputView}>Quaterly Filing</Text>
          </TouchableOpacity>
      
         

         
        
        </View>
  
      </ImageBackground>

     
     
    </SafeAreaView>
  );
}
const Styles = StyleSheet.create({
  body: {
    flex: 1,
    position: 'relative',
  },

  container: {
    flex: 1,
    
   
    paddingBottom:10,
  marginTop:4,
    flexWrap: 'wrap',
  
    width: '99%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginTop:15,
  },
  CardView: {
    flex:1,
    width: '45%',
    height:'27%',
    borderRadius: 4,
    marginLeft: 15,
    marginTop: 20,
   paddingBottom:10,
    elevation:100,
    backgroundColor: 'white',
    shadowColor:'red',
    shadowOpacity:4,
    borderWidth:1.5,
    borderColor:'red',
    marginTop:'8%'
    
  },
  inputView: {
    fontSize: 22,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '500',
    color: 'black',
    paddingTop:12,
    
  },
  icon: {
    fontSize: 32,
    color: 'black',
    alignSelf: 'center',
    marginTop: 12,
  },
  home: {
    height:'25%',
  
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 24,
    color: 'white',
  },
  nameText: {
    fontSize: 30,
    color: 'white',
  },
 
});
export default Filing;
