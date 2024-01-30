import React, { useState } from 'react'
import { SafeAreaView, Text, View ,Option, StyleSheet} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';

import { Item } from 'react-native-paper/lib/typescript/components/Drawer/Drawer';



const Month = [
  {label: 'April -June ', value: '1'},
  {label: 'July - September', value: '2'},
  {label: 'Oct - Dec', value: '3'},
  {label: 'January -March ', value: '4'}, 
];




function QuartlyDropdown() {

  const [value,setValue]= useState(null);
  const [isFocus, setIsFocus] = useState(false);

 

  return (
<View style={styles.containers}>
        <Dropdown
          
          style={[styles.dropdown, isFocus && {borderColor:'red'},]}
          placeholder="Select Q month"
          data={Month}
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
    width:169,
    height: 40,
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

export default QuartlyDropdown
