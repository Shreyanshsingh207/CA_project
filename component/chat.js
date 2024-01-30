import React from 'react'
import {View, Text, StyleSheet, Image, SafeAreaView, FlatList, ScrollView, TouchableOpacity} from 'react-native'

function Chat() {

  const data = [
    {
      id: 1,

      name: "Ravinesh",
      lasttext: "Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),

    },
    {
      id: 2,
      name: "Ravinesh",
      lasttext: "Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),

    },
    {
      id: 3,
      name: "Ravinesh kumar",
      lasttext: "Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),

    },
    {
      id: 4,
      name: "Ravinesh kumar Gaharwal",
      lasttext: "Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),
    },
    {

      name: "Ravinesh kumar Gaharwal",
      lasttext: "Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),
    },
    {
      id: 5,
      name: "Ravinesh kumar Gaharwal",
      lasttext: "Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),
    },
    {
      id: 6,
      name: "Ravinesh kumar Gaharwal",
      lasttext: "Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),
    },
    {
      id: 7,
      name: "Ravinesh kumar Gaharwal",
      lasttext: "Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),
    },
    {
      id: 8,
      name: "Ravinesh kumar Gaharwal",
      lasttext: "Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),
    },
    {
      id: 9,
      name: "Ravinesh kumar Gaharwal",
      lasttext: "Lorem Lorem Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),
    },
    {
      id: 10,
      name: "Ravinesh kumar Gaharwal",
      lasttext: "Lorem Lorem Lorem Lorem Lorem",
      image: require('../../Assets/Photos/cccc.jpg'),
    },



  ]

  return (
    <SafeAreaView>
      <FlatList
        data={data}

        renderItem={({ item }) =>
          <ScrollView style={{ padding: 1.5 }}>
            <TouchableOpacity>
              <View style={{
                borderWidth: 1, height: 75, backgroundColor: 'aqua',
                flexDirection: 'row', borderRadius: 8
              }}>
                {/* image */}
                <View style={{ width: 68, padding: 4, height: 68 }}>
                  <Image source={item.image} style={{
                    borderWidth: 1, width: '100%',
                    height: '100%', borderRadius: 100
                  }} />
                </View>
                {/* name text */}
                <View style={{ flexDirection: 'column' }}>
                  <View style={{ padding: 7, height: 35, }}>
                    <Text style={{
                      color: 'black', fontSize: 15, fontweight: 800,
                      height: 'auto', width: 'auto'
                    }}>
                      {item.name}
                    </Text>
                  </View>

                  {/* last message */}
                  <View style={{ height: 25, width: '90%', padding: 3 }}>
                    <Text style={{
                      fontSize: 13, fontWeight: 800, left: 10,
                      marginTop: 2
                    }}>{item.lasttext}</Text>

                  </View>
                </View>

              </View>
            </TouchableOpacity>
          </ScrollView>
        }

      />
    </SafeAreaView>
  )

}
const styles = StyleSheet.create({

});
export default Chat
