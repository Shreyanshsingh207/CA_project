import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../DrawerScreen/home';
import AdminScreen from '../../component/AdminScreen';
import ITUploadFile from '../../component/ITUploadFile';
import GSTUploadFile from '../../component/GST_Upload';
import TDSUploadFile from '../../component/TDS_upload';
import IncomeTax from '../DrawerScreen/IncomeTax';
import GST from '../DrawerScreen/GST';
import TDS from '../DrawerScreen/TDS';
import Filing from '../../component/Filing';
import CompositionScheme from '../../component/CompositionScheme';
import MonthlyFiling from '../../component/monthlyFiling';
import QuaterlyFiling from '../../component/QuaterlyFiling';
import Balancesheet from '../../component/balancesheeet';
import Chat from '../../component/chat';
import BalanceSheetUploadFile from '../../component/balanceSheetUpload';
import DownloadFile from '../../component/DownloadFile';
import DownloadGST from '../../component/DownloadGST';

const Stack = createNativeStackNavigator();
function HomeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home1"
        component={HomeScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Admin"
        component={AdminScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ITFile"
        component={ITUploadFile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="GSTUPLOAD"
        component={GSTUploadFile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TDSUPLOAD"
        component={TDSUploadFile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Download"
        component={DownloadFile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="DownloadGST"
        component={DownloadGST}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IncomeTax"
        component={IncomeTax}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BalanceSheet"
        component={BalanceSheetUploadFile}
        options={{headerShown: false}}
      />
      <Stack.Screen name="GST" component={GST} options={{headerShown: false}} />
      <Stack.Screen name="TDS" component={TDS} options={{headerShown: false}} />
      <Stack.Screen
        name="Balance"
        component={Balancesheet}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Filing"
        component={Filing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="bbbb"
        component={CompositionScheme}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="month"
        component={MonthlyFiling}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="quartly"
        component={QuaterlyFiling}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ChatNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Chat"
        component={Chat}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export {HomeNavigation, ChatNavigation};
