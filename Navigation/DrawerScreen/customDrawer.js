import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  TouchableOpacity,
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomSidebarMenu = (props) => {

 
console.log(props);
  const Icon = props => {
    return <IonIcons name={props.name} size={props.size} color={props.color} />;
  };
 
  return (
    <SafeAreaView style={{flex: 1}}>
    
    <View style={{borderBottomWidth: 2, borderBottomColor: 'red'}}>
        <Image
          source={require('../../../Assets/Photos/RAVI.jpg')}
          style={styles.sideMenuProfileIcon}
        />
      </View>

      <DrawerContentScrollView {...props} style={{borderBottomWidth: 2, borderBottomColor: 'red', flex:1}}>
        {/* <DrawerItemList {...props} /> */}
        <View style={{flex: 1, paddingLeft: 10, paddingTop: 0}}>
          <TouchableOpacity >
            <View style={styles.ItemView}>
              <View>
                <Text>
                  <Icon name="home" size={28} color={'#F38005'} />
                </Text>
              </View>

              <View style={{left: 10}}>
                <Text style={styles.ItemtextView}>Home</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.ItemView}>
              <View>
                <Text>
                  <Icon name="document-lock" size={28} color={'#F38005'} />
                </Text>
              </View>

              <View style={{left: 10}}>
                <Text style={styles.ItemtextView}>CA List</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.ItemView}>
              <View>
                <Text>
                  <Icon name="document-lock" size={28} color={'#F38005'} />
                </Text>
              </View>

              <View style={{left: 10}}>
                <Text style={styles.ItemtextView}>Renewal / Upgra</Text>
              </View>
            </View>
          </TouchableOpacity>

        

          <TouchableOpacity>
            <View style={styles.ItemView}>
              <View>
                <Icon name="add-circle" size={28} color={'#F38005'} />
              </View>

              <View style={{left: 10}}>
                <Text style={styles.ItemtextView}>About</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity >
            <View style={styles.ItemView}>
              <View>
                <Icon name="log-out" size={28} color={'#F38005'} />
              </View>

              <View style={{left: 10}}>
                <Text style={styles.ItemtextView}>Contact Us</Text>
              </View>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity>
            <View style={styles.ItemView}>
              <View>
                <Icon name="call" size={28} color={'#F38005'} />
              </View>

              <View style={{left: 10}}>
                <Text style={styles.ItemtextView}>Setting</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.ItemView}>
              <View>
                <Icon name="call" size={28} color={'#F38005'} />
              </View>

              <View style={{left: 10}}>
                <Text style={styles.ItemtextView}>Privacy Policy</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.ItemView}>
              <View>
                <Icon name="call" size={28} color={'#F38005'} />
              </View>

              <View style={{left: 10}}>
                <Text style={styles.ItemtextView}>Logout</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
       
      </DrawerContentScrollView>
      <View style={{justifyContent:'space-around',flexDirection:'row',padding:20}}>
      
      <View>
         <Icon name="globe-outline" size={30} color={'#F38005'} />
         </View>
      
       <View >
         <Text
           style={{
             fontSize: 20,
             paddingLeft:15,
            
             color: 'black',
           }}>
           https://camsproject.in
         </Text>
    
       </View>
     </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    width: 120,
    height: 120,
 borderRadius:60,
    alignSelf: 'center',
    marginTop: 10,
  },
  ItemtextView: {fontSize: 20, fontWeight: '500', color: 'black'},
  ItemView: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ff910091',
  },
});

export default CustomSidebarMenu;