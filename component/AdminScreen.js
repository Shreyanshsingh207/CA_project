import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  title,
  SafeAreaView,
  TextInput,
} from 'react-native';
import {TouchableOpacity, toggleModal} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import {Dimensions} from 'react-native/Libraries/Utilities/Dimensions';

function AdminScreen(props) {
  const ITFileUpload=()=>{
   props.navigation.navigate("ITFile");
    // console.log(props)
}
  const GSTFileUpload=()=>{
   props.navigation.navigate("GSTUPLOAD");
    // console.log(props)
}
  const TDSFileUpload=()=>{
   props.navigation.navigate("TDSUPLOAD");
    // console.log(props)
}

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
      <View style={{flex: 1.8}}>
        <TouchableOpacity style={{flex: 1}} onPress={ITFileUpload}>
          <View style={styles.card}>
            <Text style={styles.title}> Upload income tax data</Text>
           
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}} onPress={GSTFileUpload}>
          <View style={styles.card}>
            <Text style={styles.title}>{title} Upload GST data</Text>
           
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}  onPress={TDSFileUpload}>
          <View style={styles.card}>
            <Text style={styles.title}>{title} Upload TDS data</Text>
           
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={{flex: 1}}  >
          <View style={styles.card}>
            <Text style={styles.title}>{title} Upload Miscellaneous data</Text>
          
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1,}}>
        <TextInput
          placeholder="text massage"
          style={{borderWidth: 1, height: 60, width: '95%', marginTop: 6}}
        />
      </View>
      <TouchableOpacity>
      <View>
        <Button> Send</Button>
      </View>
      </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AdminScreen;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 16,
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {width: 5, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    backgroundColor: 'pink',
    position:'relative'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
  },
  centeredView: {
    height: 212,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },

  container: {
    flex: 1,
    flexDirection: 'column',
  },
});
