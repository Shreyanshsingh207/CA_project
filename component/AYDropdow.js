import React, { useState } from 'react'
import { SafeAreaView, Text, View ,Option, StyleSheet} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';

import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';



const getFullYear = [
  {label: '2023-2024 (C. Year)', value: '6'},
  {label: '2022-2023', value: '1'},
  {label: '2021-2022', value: '2'},
  {label: '2020-2021', value: '3'},
  {label: '2019-2020', value: '4'},
  {label: '2018-2019', value: '5'},
  
];




function AYDropdown() {

  const [value,setValue]= useState(null);
  const [isFocus, setIsFocus] = useState(false);

 

  return (
<View style={styles.containers}>
        <Dropdown
          
          style={[styles.dropdown, isFocus && {borderColor:'red'},]}
          placeholder="Assesment Year"
          data={getFullYear}
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
      
      
        
        />
      </View>
  )
}
const styles = StyleSheet.create({
  dropdown: {
    width:'45%',
    height: 50,
    borderColor: 'black',
    borderRadius: 8,
    paddingHorizontal: 8,
    elevation:14,
    backgroundColor:'#7EB22F',
    marginLeft:24
  

    
  },
  containers:{
   
    position:'relative',
    alignItems:'flex-end',
    marginTop:8,
    marginRight:4
  }
})

export default AYDropdown
