import React, { useState } from 'react'
import { SafeAreaView, Text, View ,Option, StyleSheet} from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';




const year = (new Date()).getFullYear();
const getFullYear = [
  {label: '2022-2023', value: '1'},
  {label: '2021-2022', value: '2'},
  {label: '2020-2021', value: '3'},
  {label: '2019-2020', value: '4'},
  {label: '2018-2019', value: '4'},
  {label: '2017-2018', value: '4'},
];




function FYDropdown() {

  const [value,setValue]= useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const Year= {year}-{year}-1


  return (
<View style={styles.containers}>
        <Dropdown
          
          style={[styles.dropdown, isFocus && {borderColor: '#000000'}]}
          placeholder="Finecial Year"
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
    width:170,
    height: 45,
  
    borderRadius: 8,
    paddingHorizontal: 8,
    
    backgroundColor:'#7EB22F',
   
    
  },
  containers:{
   
    position:'relative',
   marginLeft:5,
    marginTop:8,
    marginRight:4
  }
})

export default FYDropdown
