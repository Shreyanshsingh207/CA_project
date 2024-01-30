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
import AYDropdown from '../../component/AYDropdow';
import FYDropdown from '../../FYDropdown';


function TDS(props) {
 const upload =()=>{
  props.navigation.navigate('TDSUPLOAD')
 }
  return (
    <View style={Styles.body}>
      <ImageBackground style={{width:'100%', height:'100%',}} source={require('../../../Assets/Photos/back22.jpg')}>
    
    <View style={Styles.home}>
      <Image  style={{ width:"10%",height:'37%'}} source={require('../../../Assets/Photos/camslogo111.jpg')}/>
     
      <Text style={Styles.nameText}>TDS</Text>
    </View>
    <View style={Styles.Dropdown}> 
     <FYDropdown/>
      <AYDropdown/>
    </View>
       
        <View style={Styles.container}>
          <TouchableOpacity style={Styles.CardView} onPress={upload} >
          <Image style={Styles.Image} source={require('../../../Assets/Photos/bbbb.jpg')}/>
            <Text style={Styles.inputView}> CHALLAN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={upload} >
          <Image style={Styles.Image} source={require('../../../Assets/Photos/bbbb.jpg')}/>
            <Text style={Styles.inputView}> FORM 16</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView}  onPress={upload} >
          <Image style={Styles.Image} source={require('../../../Assets/Photos/bbbb.jpg')}/>
            <Text style={Styles.inputView}>Add other Document</Text>
          </TouchableOpacity>

         
        
        </View>
     
      </ImageBackground>

     
     
    </View>
  );
}
const Styles = StyleSheet.create({
  body: {
    flex: 1,
    position: 'relative',
  },



  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
     
    width: '99%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  CardView: {
    width: '45%',
    height: 120,
    borderRadius: 4,
    marginLeft: 15,
    marginTop: 20,
   borderWidth:1,
   
    elevation:100,
    backgroundColor: 'white',
    shadowColor:'green',
    shadowOpacity:4,
   
  },
  inputView: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '400',
    color: 'black',
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
  Dropdown:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    marginTop:"10%"
    
  },
  Image:{
    width:70,
    height:60,
    alignSelf:'center',
    marginTop:7,
  }
});
export default TDS;
