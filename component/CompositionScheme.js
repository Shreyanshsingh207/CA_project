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


function CompositionScheme(props) {
    const upload=()=>{
        props.navigation.navigate('GSTUPLOAD')
    }


 
  return (
    <SafeAreaView style={Styles.body}>
      <ImageBackground style={{width:'100%', height:'100%',}} source={require('../../Assets/Photos/back22.jpg')}>
    
    <View style={Styles.home}>
      <Image  style={{ width:40,height:40}} source={require('../../Assets/Photos/camslogo111.jpg')}/>
     
      <Text style={Styles.nameText}>Composition Scheme</Text>
    </View>

  
             
       <ScrollView>
        <View style={Styles.container}>
          <TouchableOpacity style={Styles.CardView}  onPress={upload} >
            <Image style={Styles.Image} source={require('../../Assets/Photos/bbbb.jpg')}/>
            <Text style={Styles.inputView}>CMP_08</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView}  onPress={upload}>
          <Image style={Styles.Image} source={require('../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>GSTR 4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView}  onPress={upload}>
          <Image style={Styles.Image} source={require('../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>GSTR 2A</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView}  onPress={upload}>
          <Image style={Styles.Image} source={require('../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>GSTR 2B</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={upload} >
          <Image style={Styles.Image} source={require('../../Assets/Photos/bbbb.jpg')}/>

            <Text style={Styles.inputView}>GST Notice</Text>
          </TouchableOpacity>
        

          <TouchableOpacity style={Styles.CardView} onPress={upload}>
          <Image style={Styles.Image} source={require('../../Assets/Photos/bbbb.jpg')}/>

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
    paddingBottom:15
  },
  CardView: {
    width: '45%',
    height: 123,
    borderRadius: 4,
    marginLeft: 15,
    marginTop: 20,

    elevation:100,
    backgroundColor: 'white',
    shadowColor:'green',
    shadowOpacity:4,
    borderWidth:1.5,
    borderColor:'red'

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
    
  },
  Image:{
    width:70,
    height:60,
    alignSelf:'center',
    marginTop:7,
  }
});
export default CompositionScheme;
