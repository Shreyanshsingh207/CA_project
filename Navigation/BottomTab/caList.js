import React from 'react'
import { Text, View,StyleSheet} from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

function CaList() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity>
      <View style={styles.card}>
        
      <Text>
            CALIST
        </Text>
        
      </View>
      </TouchableOpacity>
        <TouchableOpacity>
      <View style={styles.card}>
        
      <Text>
            CALIST
        </Text>
        
      </View>
      </TouchableOpacity>
        <TouchableOpacity>
      <View style={styles.card}>
        
      <Text>
            CALIST
        </Text>
        
      </View>
      </TouchableOpacity>
        <TouchableOpacity>
      <View style={styles.card}>
        
      <Text>
            CALIST
        </Text>
        
      </View>
      </TouchableOpacity>
        <TouchableOpacity>
      <View style={styles.card}>
        
      <Text>
            CALIST
        </Text>
        
      </View>
      </TouchableOpacity>
        <TouchableOpacity>
      <View style={styles.card}>
        
      <Text>
            CALIST
        </Text>
        
      </View>
      </TouchableOpacity>
        <TouchableOpacity>
      <View style={styles.card}>
        
      <Text>
            CALIST
        </Text>
        
      </View>
      </TouchableOpacity>
      
      </ScrollView>
       
    </View>
  )
}
const styles = StyleSheet.create({
 container:{
  flex:1,
  display:'flex',
  flexDirection:'row',
  
 },
 card:{
 flex:1,

  width:'90%',
  height:100,
  backgroundColor:'yellow',
  alignSelf:'center',
  justifyContent:'center',
  marginTop:10,
  elevation:10,
  opacity:.7
 }
})
export default CaList;
