import { router, useLocalSearchParams } from 'expo-router'
import React from 'react'

// import component
import { SafeAreaView,ScrollView,StatusBar,Pressable,ImageBackground } from 'react-native'
import { View,Text,styled, Image, } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'
const PressableStyled = styled(Pressable)

function PageDetailFood() {
    // get parameter
    let {id} = useLocalSearchParams()
  return (
    <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{flex:1}} contentContainerStyle={{flexGrow:1}}>
                <View position='relative' w={'100%'} height={'100%'}>
                  {/*//! TOP */}
                  <View position='relative' w={'100%'} pt={StatusBar.currentHeight}   bg={'#f79d65'}>
                    {/* header navigasi */}
                    <View position='relative'  w={'100%'} p={5}  flexDirection='row' px={15} justifyContent='space-between' alignItems='center'>
                      {/* icom back */}
                      <PressableStyled onPress={()=>{router.back()}}>
                          <Ionicons name='arrow-back' size={30} color={'#181725'}/>
                      </PressableStyled>

                      {/* icon to cart */}
                      <PressableStyled onPress={()=>{router.back()}} position='relative'>
                          <Ionicons name='cart-outline' size={30} color={'#181725'}/>
                          <Text py={1} px={6} borderRadius={'$11'} bg={'$orange10'} fontSize={12} color={'#fff'} position='absolute' top={'-20%'} left={'50%'}>
                            0
                          </Text>
                      </PressableStyled>
                    </View>

                    {/* body CONTENT */}
                    <View position='relative' w={'100%'} px={15} pt={10} pb={20}  justifyContent='center' alignItems='center'>
                          <Image source={require('@/assets/images/apple.png')}  w={200} h={200} objectFit='contain'/>
                    </View>
                  </View>
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default PageDetailFood