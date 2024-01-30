import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Touchable,
  ImageBackground,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import {SafeAreaView} from 'react-native';
import {ScrollView} from 'react-native';
import Ion from 'react-native-vector-icons/Ionicons';
import AYDropdown from '../../component/AYDropdow';
import FYDropdown from '../../FYDropdown';

function GST(props) {
  const Regular = () => {
    props.navigation.navigate('Filing');
  };
  const Compo = () => {
    props.navigation.navigate('bbbb');
  };
  return (
    <SafeAreaView style={Styles.body}>
      <ImageBackground
        style={{width: '100%', height: '100%'}}
        source={require('../../../Assets/Photos/back22.jpg')}>
        <View style={Styles.home}>
          <Image
            style={{width: 40, height: 40}}
            source={require('../../../Assets/Photos/camslogo111.jpg')}
          />

          <Text style={Styles.nameText}>Goods And Service Tax</Text>
        </View>
        <View style={Styles.Dropdown}>
          <FYDropdown/>
        </View>

        <View style={Styles.container}>
          <TouchableOpacity style={Styles.CardView} onPress={Regular}>
            <Image
              style={{width: 70, height: 80, alignSelf: 'center'}}
              source={require('../../../Assets/Photos/bbbb.jpg')}
            />
            <Text style={Styles.inputView}>Regular Scheme</Text>
          </TouchableOpacity>

          <TouchableOpacity style={Styles.CardView} onPress={Compo}>
            <Image
              style={{width: 70, height: 80, alignSelf: 'center'}}
              source={require('../../../Assets/Photos/bbbb.jpg')}
            />
            <Text style={Styles.inputView}> Composition Scheme</Text>
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

    paddingBottom: 10,
    marginTop: 4,
    flexWrap: 'wrap',

    width: '97%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignContent: 'center',
  },
  CardView: {
    flex: 1,
    width: '45%',
  
    borderRadius: 6,
    borderColor: 'red',
    borderWidth: 1.5,
    marginLeft: 15,
    marginTop: 20,
    paddingBottom: 4,
    elevation: 100,
    backgroundColor: 'white',
    shadowColor: 'green',
    shadowOpacity: 4,
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
    height: '25%',

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
  Dropdown: {
    alignSelf:'flex-end',
    marginRight:'3%',
    marginTop:'6%',
    
  },
});
export default GST;
