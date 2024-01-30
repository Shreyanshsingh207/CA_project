import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';


function SignupScreen(props) {
  const ClientRegistration = () => {
    props.navigation.navigate('ClientSignup');
  };
  const AdminRegistration = () => {
    props.navigation.navigate('AdminSignup');
  };

  const Icon = props => {
    return <IonIcons name={props.name} size={props.size} color={props.color} />;
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={{flex: 1, height: '100%', width: '100%'}}
        source={require('../../Assets/Photos/back22.jpg')}>
        <View style={styles.Registration}>
          <Text style={styles.RegistrationText}>Registration</Text>
        </View>
        <View style={styles.TextButton}>
          <TouchableOpacity onPress={ClientRegistration}>
            <View style={styles.Client}>
                <View style={{marginLeft:12}}>
            <Icon name='person-circle' size={35} color={"black"} /></View>

              <Text style={styles.ClientText}>Client Registration</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={AdminRegistration}>
            <View style={styles.Client}>
                <View style={{marginLeft:12}}> 
              <Icon name='briefcase' size={28} color={"black"}  /></View>

              <Text style={styles.ClientText}>Admin Registration</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
      <View
        style={{
          width: '100%',
          height: '8%',
          backgroundColor: '#00A2E8',
        }}></View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  Registration: {
    alignItems: 'center',
    marginTop: 55,
  },
  TextButton: {
    marginTop: 150,
    justifyContent:'center',
    alignSelf:'center',
    width:'100%'
  },
  RegistrationText: {
    fontSize: 34,
    color: 'white',
    fontWeight: '500',
    marginTop: 10,
  },
  Client: {
    display:'flex',
    flexDirection:'row',
    elevation: 150,
    alignItems: 'center',
    marginTop:40,
    height: 90,
    width: '70%',
    backgroundColor: '#ffffff',
  alignSelf:'center',
    justifyContent:'center',
    borderRadius: 15,
    shadowColor:'red',
    borderWidth:1,
    borderColor:'red'
  },
  ClientText: {
    fontSize: 24,
    fontWeight: '600',
    color:'black',
    paddingLeft:14
  },
});

export default SignupScreen;
