import React from 'react'

// IMPORT COMPONENT
import { SafeAreaView, StatusBar } from 'react-native'
import { ScrollView,View,Text } from 'tamagui'

function PageDashboard() {
  return (
    <>
        <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{paddingTop:StatusBar.currentHeight}}>
                <View>
                  
                </View>
            </ScrollView>
        </SafeAreaView>
        <StatusBar barStyle={'dark-content'}/>
    </>
  )
}

export default PageDashboard