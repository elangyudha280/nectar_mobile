import React from 'react'

// import component
import { View,Text,Image } from 'tamagui'
import {SafeAreaView,ScrollView,StatusBar,TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const PageCart = ()=>{
    return (
        <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{paddingTop:StatusBar.currentHeight,flex:1}} >
                    <Text>testing cart</Text>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PageCart