import React, {useEffect} from 'react';
import {useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  Alert,
  TextInput,
  TouchableOpacity,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import axios from 'axios';
// 9670488059
function ClientRegistration() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const [mobile, setMobile] = useState('');
  const [dob, setDob] = useState('');
  const [place, setPlace] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');
  const [password, setPassword] = useState('');
  const [ConfirmPassword, setComfirmPassword] = useState(''); 



  
  const SubmitPressed = async () => {
   
  console.log("Hello from client registrations");
    try {
      const userData = {
        name,
        email,
        mobile,
        dob,
        place,
        state,
        district,
        pincode,
        password,
        roleId: 1,
     
      };
  
      const response = await axios.post(
        'http://103.177.225.211:9010/user/registration2',
        userData
      );
  
      console.log('API Response:', response);
      if (response.status === 200) {
        // Navigate to the login page
        console.log(props);
        props.navigation.navigate('Login');
      } else {
        // Handle other cases if needed
        console.log('Registration failed');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  

  return (
    <SafeAreaView>
      <ImageBackground
        style={{height: '93%', width: '100%'}}
        source={require('../../Assets/Photos/back22.jpg')}>
        <View style={{height: '30%'}}>
          <Text
            style={{
              color: 'white',
              fontSize: 28,
              justifyContent: 'center',
              alignSelf: 'center',
              marginTop: 30,
              fontWeight: '500',
            }}>
            Client Registration
          </Text>
        </View>
        <ScrollView>
          <View style={styles.container}>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder="Name"
                returnKeyType="next"
                value={name}
                onChangeText={text => setName(text)}
              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder="Email"
                returnKeyType="next"
                require="require"
                value={email}
                onChangeText={text => setEmail(text)}

              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder="Mobile no."
                returnKeyType="next"
                value={mobile}
                onChangeText={text => setMobile(text)}
              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder="Date of Birth"
                returnKeyType="next"
                value={dob}
                onChangeText={text => setDob(text)}
              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder="Place"
                returnKeyType="next"
                value={place}
                onChangeText={text => setPlace(text)}
              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder="State"
                returnKeyType="next"
                value={state}
                onChangeText={text => setState(text)}
              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder="District"
                returnKeyType="next"
                value={district}
                onChangeText={text => setDistrict(text)}
              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder="Pincode"
                returnKeyType="next"
                keyboardType="numeric"
                value={pincode}
                onChangeText={text => setPincode(text)}
                
              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder="Password"
                returnKeyType="next"
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder=" Confirm Password"
                value={ConfirmPassword}
                onChangeText={text => setComfirmPassword(text)}
              />
            </View>
          </View>
        </ScrollView>
        <TouchableOpacity
        onPress={ SubmitPressed}
        >
          <View
            style={{
              flex: 1,
              position: 'absolute',
              borderWidth: 1,
              borderRadius: 8,
              height: 50,
              width: '93%',
              backgroundColor: 'green',
              display: 'flex',
              marginLeft: 13,
              marginTop: 18,
            }}>
            <Text
              style={{
                alignSelf: 'center',
                fontSize: 23,
                color: 'white',
                marginTop: 5,
              }}>
              Submit
            </Text>
          </View>
        </TouchableOpacity>
        
      </ImageBackground>
    </SafeAreaView>
  );
        }
styles = StyleSheet.create({
  container: {
    alignItems: 'center',

    height: '100%',
  },
  textHeader: {
    fontSize: 33,
  },
  InputView: {
    width: '80%',
    height: 47,
    elevation: 2,
    marginTop: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'red',
  },
  InputText: {
    fontSize: 18,
    paddingLeft: 15,
  },
  IdentityView: {},
  IdentityText: {
    color: 'black',
  },
  signup: {
    marginTop: 12,
    borderWidth: 1,
    width: '100%',
    height: 40,
    backgroundColor: 'blue',
  },
  SignupText: {
    fontSize: 23,
    alignSelf: 'center',
    paddingTop: 4,
    color: 'white',
  },
     error: { 
        color: 'red', 
        fontSize: 20, 
        marginBottom: 12, 
    }, 
});
export default ClientRegistration;

// import React from 'react';
// import { useState } from 'react';
// import {
//     ScrollView,
//   StyleSheet,
//   Text,
//   Alert,
//   TextInput,
//   TouchableOpacity,
//   View,
//   SafeAreaView,
//   ImageBackground,
// } from 'react-native';
// import { Button } from 'react-native-paper';

// function ClientRegistration() {
//   const [ClientName, setClientName] = useState('');
//   const [ClientEmail, setClientEmail] = useState('');
//   const [ClientAge, setClientAge] = useState('');
//   const [ClientMobile, setClientMobile] = useState('');
//   const [clientDOB, setClientDOB] = useState('');
//   const [ClientPlace, setClientPlace] = useState('');
//   const [clientState, setClientState] = useState('');
//   const [clientDistrict, setClientDistrict] = useState('');
//   const [clientPincode, setClientPincode] = useState('');
//   const [clientPassword, setClientPassword] = useState('');
//   const [clientConfirmPassword, setClientComfirmPassword] = useState('');
//   const[error,setError] = useState('')

//   signupPressed = ()=>{
//     Alert.alert("Completed Sign Up")
//   }
//   return (
//     <SafeAreaView>
//       <ImageBackground  style={{height:'93%',width:'100%'}} source={require('../../Assets/Photos/back22.jpg')}>
//       <View style={{height:'30%'}}>
//         <Text style={{color:'white',fontSize:28,justifyContent:'center',alignSelf:'center',marginTop:30,fontWeight:'500'}}>
//           Client Registration
//         </Text>
//       </View>
//     <ScrollView>
//     <View style={styles.container}>

//       <View style={styles.InputView}>
//        <TextInput
//           style={styles.InputText}
//           placeholder="Name"
//           returnKeyType="next"

//         />
//       </View>
//       <View style={styles.InputView}>
//         <TextInput
//           style={styles.InputText}
//           placeholder="Email"
//           returnKeyType="next"
//         />
//       </View>
//       <View style={styles.InputView}>
//         <TextInput
//           style={styles.InputText}
//           placeholder="Mobile no."
//           returnKeyType="next"
//         />
//       </View>
//       <View style={styles.InputView}>
//         <TextInput
//           style={styles.InputText}
//           placeholder="Date of Birth"
//           returnKeyType="next"
//         />
//       </View>
//       <View style={styles.InputView}>
//         <TextInput
//           style={styles.InputText}
//           placeholder="Place"
//           returnKeyType="next"
//         />
//       </View>
//       <View style={styles.InputView}>
//         <TextInput
//           style={styles.InputText}
//           placeholder="State"
//           returnKeyType="next"
//         />
//       </View>
//       <View style={styles.InputView}>
//         <TextInput
//           style={styles.InputText}
//           placeholder="District"
//           returnKeyType="next"
//         />
//       </View>
//       <View style={styles.InputView}>
//         <TextInput
//           style={styles.InputText}
//           placeholder="Pincode"
//           returnKeyType="next"
//         />
//       </View>
//       <View style={styles.InputView}>
//         <TextInput
//           style={styles.InputText}
//           placeholder="Password"
//           returnKeyType="next"
//         />
//       </View>
//       <View style={styles.InputView}>
//         <TextInput style={styles.InputText} placeholder=" Confirm Password" />
//       </View>

//     </View>

//     </ScrollView>
//     <TouchableOpacity onPress={signupPressed}>
//     <View style={{ flex:1 ,position:'absolute',borderWidth:1,borderRadius:8,height:50,width:'93%',backgroundColor:'green',display:'flex',marginLeft:13,marginTop:18}}>

//         <Text style={{alignSelf:'center',fontSize:23,color:'white',marginTop:5}}>Submit</Text>

//     </View>
//     </TouchableOpacity>
//     </ImageBackground>

//     </SafeAreaView>
//   );
// }
// styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',

//     height: '100%',
//   },
//   textHeader: {
//     fontSize: 33,
//   },
//   InputView: {
//     width: '80%',
//     height: 47,
//     elevation: 2,
//     marginTop: 10,
//     backgroundColor: '#fff',
//     borderRadius: 10,
//     borderWidth:1,
//     borderColor:'red'
//   },
//   InputText: {
//     fontSize: 18,
//     paddingLeft:15
//   },
//   IdentityView:{

//   },
//   IdentityText:{
//   color:'black',
//   },
//   signup: {
//     marginTop: 12,
//   borderWidth:1,
//     width:'100%',
//     height: 40,
//     backgroundColor:'blue',

//   },
//   SignupText: {
//     fontSize: 23,
//     alignSelf: 'center',
//     paddingTop: 4,
//     color:'white'
//   },
// });
// export default ClientRegistration;
