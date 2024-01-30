import React, {useState} from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  StatusBar,
} from 'react-native';
import {ScrollView} from 'react-native';

import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';






function Login({navigation}) {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  // let navigate = useNavigation()




  const hello = () => {
  navigation.navigate('Signup');
  };

  // const loginPressed = () => {
  // navigation.navigate('DrawerScreen');
  // };


  const loginPressed = () => {
    props.navigation.navigate('DrawerScreen');
  };

  const LoginPressed = async () => {
  
  
    try {
      const userData = {
      userId,
      password
      };
  
      const response = await axios.post(
        'https://api.postman.com/collections/30038080-dc8f134c-d97d-4540-bdcf-2fe6a6237675?access_key=PMAT-01HNA06SNME8997BZ0YNS7B0M9',
        userData
      );
  
      console.log('API Response:', response.data);
     const userName=response.data.data.user.name;
      console.log(`Name is `,userName);
      // console.log(`Name is `,response.data.code);

      if (response.status === 200) {
        // Navigate to the login page
        console.log(navigation);
        // console.log(`Name is `,response.data.user.name);
        
      navigation.navigate('DrawerScreen',{userName});
      // console.log(navigate("DrawerScreen"));
      // navigate("DrawerScreen")
      } else {
        // Handle other cases if needed
        console.log('sign in failed');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    
  


  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      <ImageBackground
        style={styles.ImageBackground}
        source={require('../../Assets/Photos/back222.png')}
        resizeMode="cover">
        <ScrollView>
          <View style={styles.loginform}>
            <Text style={styles.cams}>Login</Text>

            <View style={styles.inputView}>
              {/* <Dropdown
          
          style={[styles.dropdown, isFocus && {borderColor: '#000000'}]}
          placeholder="User"
          data={Admin}
    
          maxHeight={300}
          labelField="label"
          valueField="value"
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          value={value}
          onChange={Item=>{
            setValue(Item.value);
            setIsFocus(false);
          }}
      
      
        
        /> */}

              <TextInput
                style={styles.TextInput}
                placeholder="Mobile"
                placeholderTextColor="black"
                value={userId}
                onChangeText={text => setUserId(text)}
              />
            </View>
            <View style={styles.inputView}>
              <TextInput
                style={styles.TextInput}
                placeholder="Password."
                placeholderTextColor="black"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
              />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot_button}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={hello}>
              <Text style={styles.forgot_button}>SignUP</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn} onPress={loginPressed}>
              <Text style={styles.loginText}>LOGIN</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    position:'relative'
  },
  ImageBackground: {
    flex: 1,
    height: '100%',
    width: '100%',
    position:'absolute'
  },
  cams: {
    flex: 1,
    alignSelf: 'center',
    marginTop: 20,
    color: '#7A56E3',
    fontSize: 35,
    fontWeight: '700',
  },
  inputView: {
    flex: 1,
    borderWidth: 2.5,
    borderColor: '#7A56E3',
    borderRadius: 20,
    width: '85%',
    height: 50,
    marginTop: 20,
  },
  TextInput: {
    flex: 1,
    color: 'black',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  forgot_button: {
    height: 20,
    marginTop: 20,

    fontSize: 15,
    fontWeight: '500',
    display: 'flex',
    fontWeight: '600',
    color: 'black',
  },
  loginBtn: {
    width: '80%',
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    marginTop: 20,
    backgroundColor: '#7A56E3',
  },
  loginText: {
    fontSize: 22,
    marginTop: 10,
    fontWeight: '500',
    color: 'white',
  },
  loginform: {
    marginTop: 140,
    borderRadius: 10,

    width: '90%',
    height: '70%',
    paddingBottom: 30,

    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  IonIcon: {
    marginTop: 8,
    marginLeft: 12,
  },
  dropdown: {
    width: '85%',
    marginTop: 3,
    

    alignSelf: 'center',
    color: 'black',
  },
});

export default Login;
