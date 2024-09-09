import React from 'react'

// import component
import { View,Text } from 'tamagui'
import {SafeAreaView,ScrollView,StatusBar } from 'react-native'

function PageExplore() {
  return (
    <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{paddingTop:StatusBar.currentHeight,flex:1}} >
                <View>
                    <Text>TESTING</Text>
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default PageExplore