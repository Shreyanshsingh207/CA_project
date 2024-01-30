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
import QuartlyDropdown from './quaterlyDrop';
import { uploadFiles } from 'react-native-fs';


function QuaterlyFiling(props) {

 const upload =()=>{
    props.navigation.navigate('GSTUPLOAD')
 }
    


 
  return (
    <SafeAreaView style={Styles.body}>
      <ImageBackground style={{width:'100%', height:'100%',}} source={require('../../Assets/Photos/back22.jpg')}>
    
    <View style={Styles.home}>
      <Image  style={{ width:40,height:40}} source={require('../../Assets/Photos/camslogo111.jpg')}/>
     
      <Text style={Styles.nameText}>Regular Scheme</Text>
    </View>
<View>
    <QuartlyDropdown/>
</View>
  
             
       <ScrollView>
        <View style={Styles.container}>
          <TouchableOpacity style={Styles.CardView} onPress={upload} >
            <Image style={{width:70,height:60,alignSelf:'center'}} source={require('../../Assets/Photos/bbbb.jpg')}/>
            <Text style={Styles.inputView}>GSTR 1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={upload} >
          <Image style={{width:70,height:60,alignSelf:'center'}} source={require('../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>GSTR 3B</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView}  onPress={upload}>
          <Image style={{width:70,height:60,alignSelf:'center'}} source={require('../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>GSTR 2A</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={upload} >
          <Image style={{width:70,height:60,alignSelf:'center'}} source={require('../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>GSTR 2B</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={upload} >
          <Image style={{width:70,height:60,alignSelf:'center'}} source={require('../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>GSTR 9</Text>
          </TouchableOpacity>
        

          <TouchableOpacity style={Styles.CardView} onPress={upload}>
          <Image style={{width:70,height:60,alignSelf:'center'}} source={require('../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>GSTR 9C</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.CardView} onPress={upload}>
          <Image style={{width:70,height:60,alignSelf:'center'}} source={require('../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>GST Notice</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Styles.CardView} onPress={upload}>
          <Image style={{width:70,height:60,alignSelf:'center'}} source={require('../../Assets/Photos/bbbb.jpg')}/>

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

  chatView: {
    flex: 1,
    position: 'absolute',
    height: 50,
    width: 50,
    borderWidth: 1,
    justifyContent: 'center',
    bottom: 10,
    right: 10,
    borderRadius: 15,
    backgroundColor: 'yellow',
  },
  chatIcon: {
    textAlign: 'center',
    fontSize: 40,
    color: 'black',
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
    paddingBottom:12
  },
  CardView: {
    width: '45%',
    height: 123,
    borderRadius: 4,
    marginLeft: 15,
    marginTop: 20,
    borderWidth:1,
    borderColor:'red',
    elevation:100,
    backgroundColor: 'white',
    shadowColor:'green',
    shadowOpacity:4,
    shadowOffset:{width:-1, height:2},
  
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
    flexDirection:'row',
    justifyContent:'center',
    
  }
});
export default QuaterlyFiling;
