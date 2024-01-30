import React, {useEffect, useState} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Setting from './setting';
import CaList from '../BottomTab/caList';
import About from './About';
import IncomeTax from './IncomeTax';
import GST from './GST';
import TDS from './TDS';
import BottomTab from '../BottomTab/BottomScreen';
import CustomSidebarMenu from './customDrawer';
import HomeScreen from './home';
import HomeNavigation from '../StackNavigation/HomeNavigation';
import { LogBox } from 'react-native';

const Drawer = createDrawerNavigator();
const DrawerNavigatorConfig = {
  intialRouteName: 'Home',
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      color: 'white',
    },
  },
  contentOptions: {
    activeTintColor: '#e91e63',
    itemsContainerStyle: {
      marginVertical: 0,
    },
    iconContainerStyle: {
      opacity: 1,
    },
  },
  drawerBackgroundColor: 'grey',
};

export default function DrawerScreen({route}) {

  const userName = route.params.userName;
  console.log(userName);
  
  const [headerShown, setHeaderShown] = useState(true);
  
  return (
    <Drawer.Navigator
      screenOptions={{
        activeTintColor: '#e91e63',
        itemStyle: {marginVertical: 5},
      }}
      drawerContent={props => <CustomSidebarMenu {...props} />}>
      <Drawer.Screen
        name="Home"
        component={BottomTab}
        options={{
          headerShown:{userName},
          headerStyle: {
            backgroundColor: '#00A2E8',
          },
        }}
      />
  
    
      
    </Drawer.Navigator>
  );
}
