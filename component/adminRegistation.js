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
import {Button} from 'react-native-paper';
import axios from 'axios';

function AdminRegistration(props) {
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

  
  //////

  // const userData1 = {
  //   name,
  //   email,
  //   age,
  //   mobile,
  //   dob,
  //   place,
  //   state,
  //   district,
  //   pincode,
  //   password,
  //   rollId,
  // };
  // const data1 = JSON.stringify(userData1);

  // console.log(data1);

  // const SubmitPressed = async () => {
  //   try {

  //     const userData = {
  //       name,
  //       email,
  //       age,
  //       mobile,
  //       dob,
  //       place,
  //       state,
  //       district,
  //       pincode,
  //       password,
  //       rollId
  //     };
  //     const data = JSON.stringify(userData);

  //     const response = await axios.post('http://103.177.225.211:9010/user/registration', UserData, {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     });

  //     console.log('API Response:', response.data);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // };

  // const SubmitPressed = async () => {
  //   try {
  //     const userData = {
  //       name,
  //       email,
  //       mobile,
  //       dob,
  //       place,
  //       state,
  //       district,
  //       pincode,
  //       password,
  //       rollId,
  //     };
  //     const data = JSON.stringify(userData);
  //     // console.log(data)


  //     const apiUrl = 'http://103.177.225.211:9010/user/registration';
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         Accept: 'application/json',
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify({data: userData}),
  //     });
  //     console.log('API Response:', response);
  //     // props.navigation.navigate('Login');
  //   } catch (error) {
  //     Alert.alert('Error', 'Network error');
  //   }
  // };

  const SubmitPressed = async () => {
  
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
        roleId: 2,
      };
  
      const response = await axios.post(
        'http://103.177.225.211:9010/user/registration2',
        userData
      );
  
      console.log('API Response:', response.data);
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
            Admin Registration
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
                value={email}
                onChangeText={text => setEmail(text)}
              />
            </View>
            <View style={styles.InputView}>
              <TextInput
                style={styles.InputText}
                placeholder="Mobile no."
                returnKeyType="next"
                keyboardType="numeric"
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
        {/* <TouchableOpacity onPress={signupPressed}> */}
        <TouchableOpacity onPress={SubmitPressed}>
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
});
export default AdminRegistration;

// const [ClientName, setClientName] = useState('');
// const [ClientEmail, setClientEmail] = useState('');
// const [ClientAge, setClientAge] = useState('');
// const [ClientMobile, setClientMobile] = useState('');
// const [clientDOB, setClientDOB] = useState('');
// const [ClientPlace, setClientPlace] = useState('');
// const [clientState, setClientState] = useState('');
// const [clientDistrict, setClientDistrict] = useState('');
// const [clientPincode, setClientPincode] = useState('');
// const [clientPassword, setClientPassword] = useState('');
// const [clientConfirmPassword, setClientComfirmPassword] = useState('');
