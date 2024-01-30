import React, { useState } from 'react'
import { SafeAreaView, Text, View ,Option, StyleSheet} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';




const Month = [
  {label: 'January', value: '1'},
  {label: 'February', value: '2'},
  {label: ' March', value: '3'},
  {label: 'April', value: '4'},
  {label: 'May', value: '5'},
  {label: 'June', value: '6'},
  {label: 'July', value: '7'},
  {label: 'August', value: '8'},
  {label: 'September', value: '9'},
  {label: 'October', value: '10'},
  {label: 'November', value: '11'},
  {label: 'December', value: '12'},

 
  
];




function MonthlyDropdown() {

  const [value,setValue]= useState(null);
  const [isFocus, setIsFocus] = useState(false);

 

  return (
<View style={styles.containers}>
        <Dropdown
          
          style={[styles.dropdown, isFocus && {borderColor:'red'},]}
          placeholder="Select month"
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

export default MonthlyDropdown
