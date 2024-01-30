import React from 'react';
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import AdminScreen from '../../component/AdminScreen';
import { HomeNavigation, 
  ChatNavigation,
} from '../StackNavigation/HomeNavigation';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


const Tab = createBottomTabNavigator();
function BottomTab() {
  
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{tabBarStyle: {backgroundColor: '#00A2E8'}}}>
      <Tab.Screen
        name="Homes"
        component={HomeNavigation}
        options={{
          tabBarIcon: () => <Icon name="home" size={28} color={'black'} />,
          headerShown: false,
          title: 'Home',
          tabBarLabelStyle: {
            fontSize: 18,
            color: 'black',
            fontWeight: '500',
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigation}
        options={{
          headerShown: false,
          tabBarIcon: () => (
            <Icon name="chatbubbles" size={28} color={'black'} />
          ),
          tabBarLabelStyle: {
            fontSize: 18,
            color: 'black',
            fontWeight: '500',
          },
        }}
      />
    </Tab.Navigator>
  );
}
const Icon = props => {
  return <IonIcons name={props.name} size={props.size} color={props.color} />;
};
export default BottomTab;
