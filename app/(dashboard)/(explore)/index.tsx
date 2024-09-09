import React from 'react'

// import component
import { View,Text } from 'tamagui'
import {SafeAreaView,ScrollView,StatusBar,TextInput } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
function PageExplore() {
  return (
    <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{paddingTop:StatusBar.currentHeight,flex:1}} >
                <View position='relative' pt={20} pb={80} px={15}>

                    {/*//! TOP HEADER */}
                    <View position='relative' w={'100%'} >
                        <Text fontWeight={'bold'} fontSize={20} textAlign='center' fontFamily={'Gilroy_bold'}>
                            Find Products
                        </Text>
                    </View>

                    {/*//! Input Search*/}
                    <View w={'100%'} borderRadius={10} flexDirection='row' alignItems='center' mt={20} p={10} bg={'#F2F3F2'} columnGap={10}>
                        <Ionicons name='search-outline' size={20} />
                        <TextInput 
                        inputMode='search'
                        placeholder='Search Store'
                        placeholderTextColor={'#7C7C7C'}
                        style={{width:"100%",paddingVertical:0,flex:1}}
                        />
                    </View>

                    {/*//! Content */}
                    <View w={'100%'} position={'relative'} mt={15} p={2} flexDirection='row' gap={8} flexWrap='nowrap'>
                        
                    </View>
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default PageExplore