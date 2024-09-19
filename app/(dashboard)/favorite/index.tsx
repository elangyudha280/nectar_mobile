import React from 'react'

// import component
import { View,Text,Image,styled } from 'tamagui'
import {Pressable, SafeAreaView,ScrollView,StatusBar,TextInput, TouchableOpacity,useWindowDimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const StyledPressable = styled(Pressable);

const PageFavorite = ()=>{
    let {width} = useWindowDimensions()


    return (
        <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{paddingTop:StatusBar.currentHeight,flex:1}} contentContainerStyle={{flexGrow:1}} >
                <View position='relative'  flex={1}>
                        {/* //! header */}
                        <View position='relative' w={'100%'} borderBottomWidth={1} borderBottomColor={'#ddd'} py={15}>
                            <Text fontWeight={'bold'} fontSize={20} textAlign='center' fontFamily={'Gilroy_bold'}>
                                Favorite
                            </Text>
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PageFavorite;