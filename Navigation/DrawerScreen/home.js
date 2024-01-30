import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Image,
  Button,
  Modal
} from 'react-native';
import {ScrollView} from 'react-native';
import {StatusBar} from 'react-native';

import {useState} from 'react';
import MarqueeView from 'react-native-marquee-view';
function HomeScreen(props,{route}) {
  // const [userName,setUserName]=useState('Shreyansh singh')
  const [isModalVisible, setModalVisible] = useState(false);


  
  console.log(route)
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

   
  
 

  const ITR = () => {
    props.navigation.navigate('IncomeTax');
  };
  const GST = () => {
    props.navigation.navigate('GST');
  };
  const TDS = () => {
    props.navigation.navigate('TDS');
  };
  const Balancesheet = () => {
    props.navigation.navigate('Balance');
  };

  return (
    <View style={{height:'100%', backgroundColor:"#000", flex:1}}>
      <StatusBar hidden={false} 
      />
      

   
  

     

      <ImageBackground
        style={{width: '100%', height: '100%', position: 'relative'}}
        source={require('../../../Assets/Photos/back22.jpg')}>

        <View style={Styles.home}>
          <Image
            style={{width: '10%', height: '40%'}}
            source={require('../../../Assets/Photos/camslogo111.jpg')}
          />
          <Text style={Styles.textInput}>Welcome</Text>
          <Text style={Styles.nameText}></Text>
        </View>
       
           <ScrollView>

           
        
          <View style={[Styles.container, {paddingBottom:"15%"}]}>
          <View style={{width:"100%", alignItems:'center',marginTop:60}}>
            <MarqueeView
              style={{ width:'90%',backgroundColor:'#F32C05', paddingRight: 8, paddingLeft: 8, borderRadius: 10}}
              speed={0.1}
              endPaddingWidth={10}
              autoPlay={true}
            >
                <Text style={{fontSize:20,fontWeight:900,color:'white'}}>
                  101 way to save your taxes LEGALLY . Ask Us!       Zero Tax on income of Rs.10 Lakhs*, plan 
                  your investment With CAMS App Tax      ITR - 1,2 and 4 enabled for filing income Tax returm
                  .File Now.
                </Text>
                
            </MarqueeView>
          </View>
            
          
              <TouchableOpacity style={Styles.CardView} onPress={ITR}>
                <Image
                  style={Styles.cardlogo}
                  source={require('../../../Assets/Photos/itrlogo1.png')}
                />
                <Text style={Styles.inputView}>Income Tax Return (ITR)</Text>
              </TouchableOpacity>

              <TouchableOpacity style={Styles.CardView} onPress={GST}>
                <Image
                  style={Styles.cardlogo1}
                  source={require('../../../Assets/Photos/GST.jpg')}
                />
            

                <Text style={Styles.inputView}>Good & Service Tax(GST)</Text>
              </TouchableOpacity>

            <TouchableOpacity style={Styles.CardView} onPress={Balancesheet}>
              <Image
                style={Styles.cardlogo2}
                source={require('../../../Assets/Photos/Audit_logo.jpg')}
              />
              <Text style={Styles.inputView}>
                Audit Report / Balance Sheets
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.CardView}>
              <Image
                style={Styles.cardlogo3}
                source={require('../../../Assets/Photos/FSSAI.jpg')}
              />

              <Text style={Styles.inputView}>FSSAI License /Return</Text>
            </TouchableOpacity>

             
            <TouchableOpacity style={Styles.CardView} onPress={TDS}>
              <Image
                style={Styles.cardlogo4}
                source={require('../../../Assets/Photos/TDS.jpg')}
              />
              <Text style={Styles.inputView}>TDS/TCS Return</Text>
            </TouchableOpacity>
            <TouchableOpacity style={Styles.CardView}>
              <Image
                style={Styles.cardlogo5}
                source={require('../../../Assets/Photos/Contact_logo.jpg')}
              />
              <Text style={Styles.inputView}>Contact Us</Text>
         
              </TouchableOpacity>

        

          



          

          

              

        
           

            
          </View>
          </ScrollView>
        
         
      </ImageBackground>
    </View>
  );
}
const Styles = StyleSheet.create({
  body: {
    flex: 1,

  
   
  },

  container: {
    flex: 1,
    flexDirection:'row',
    flexWrap:'wrap',
    position: 'relative',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf:'center',
    marginTop:'12%'
   
  },
  CardView: {
    width: '45%',
    height: '30%',
    borderRadius: 10,
    marginLeft: 10,
    marginTop: 20,
    borderColor: 'red',
    borderWidth: 1.5,
    elevation: 30,
    backgroundColor: 'white',
    shadowColor: 'red',
    shadowOpacity: 10,
  },
  inputView: {
    fontSize: 18,
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
    height: '23%',

    justifyContent: 'center',
    alignItems: 'center',
  },
  textInput: {
    fontSize: 24,
    color: 'white',
  },
  nameText: {
    fontSize: 26,
    color: 'white',
  },
  cardlogo: {
    width: 80,
    height: 60,
    alignSelf: 'center',
    marginTop: 5,
  },
  cardlogo1: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginTop: 5,
  },
  cardlogo2: {
    width: 110,
    height: 58,
    alignSelf: 'center',
    marginTop: 5,
  },
  cardlogo3: {
    width: 90,
    height: 60,
    alignSelf: 'center',
    marginTop: 5,
  },

  cardlogo4: {
    width: 130,
    height: 90,
    alignSelf: 'center',
  },
  cardlogo5: {
    width: 80,
    height: 80,
    alignSelf: 'center',
  },
  marquee:{
 width:'90%',
alignItems:'center',
    justifyContent:'center'
  }
});
export default HomeScreen;
