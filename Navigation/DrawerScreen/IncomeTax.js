import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import AYDropdown from '../../component/AYDropdow';
import FYDropdown from '../../FYDropdown';


function IncomeTax(props) {

  const ITR_Acknowledgement =()=>{
    props.navigation.navigate('Download');
  }
 
  return (
    <SafeAreaView style={Styles.body}>
      <ImageBackground style={{width:'100%', height:'100%',}} source={require('../../../Assets/Photos/back22.jpg')}>
    
    <View style={Styles.home}>
      <Image  style={{ width:40,height:40}} source={require('../../../Assets/Photos/camslogo111.jpg')}/>
     
      <Text style={Styles.nameText}>Income Tax Return</Text>
    </View>
    <View style={Styles.Dropdown}> 
      <AYDropdown/>
    </View>
             
     <ScrollView>
        <View style={[Styles.container,{paddingBottom:'8%'}]}>
          <TouchableOpacity style={Styles.CardView} onPress={ITR_Acknowledgement} >
            <Image style={Styles.Image} source={require('../../../Assets/Photos/bbbb.jpg')}/>
            <Text style={Styles.inputView}> ITR Acknowledgement</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={ITR_Acknowledgement} >
          <Image style={Styles.Image} source={require('../../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>ITR Computation </Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={ITR_Acknowledgement} >
          <Image style={Styles.Image} source={require('../../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>ITR Form</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={ITR_Acknowledgement} >
          <Image style={Styles.Image} source={require('../../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>AIS/TIS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={ITR_Acknowledgement} >
          <Image style={Styles.Image} source={require('../../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>ITR Order</Text>
          </TouchableOpacity>
        

          <TouchableOpacity style={Styles.CardView} onPress={ITR_Acknowledgement} >
          <Image style={Styles.Image} source={require('../../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>Add Other Document</Text>
          </TouchableOpacity>
        
        </View>
        </ScrollView>
     
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
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  
    width: '99%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    paddingBottom:13,
    marginTop:10
  },
  CardView: {
    width: '45%',
    height: '33%',
    borderRadius: 5,
    marginLeft: 10,
  marginTop:12,
    borderWidth:1,
    borderColor:'green',

    elevation:100,
    backgroundColor: 'white',
    shadowColor:'green',
    shadowOpacity:4,
    shadowOffset:{width:-1, height:2}
  },
  inputView: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    fontWeight: '500',
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
    justifyContent:'center',
    marginTop:"8%"
    
  },
  Image:{width:70,height:60,alignSelf:'center',marginTop:"5%"}
});
export default IncomeTax;
