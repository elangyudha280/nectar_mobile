import React from 'react'

// import component
import { View,Text,Image,styled } from 'tamagui'
import {Pressable, SafeAreaView,ScrollView,StatusBar,TextInput, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

const StyledPressable = styled(Pressable)
  

const PageCart = ()=>{
    return (
        <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{paddingTop:StatusBar.currentHeight,flex:1}} >
                <View position='relative'  pb={80} >
                    {/* //! header */}
                    <View position='relative' w={'100%'} borderBottomWidth={1} borderBottomColor={'#ddd'} py={15}>
                        <Text fontWeight={'bold'} fontSize={20} textAlign='center' fontFamily={'Gilroy_bold'}>
                            Cart
                        </Text>
                    </View>

                    {/* //! body content */}
                    <View px={25} pt={15}  gap={8}>
                        {/*//! container card list */}
                        <View gap={8} position='relative'>
                            {/* card cart list */}
                            <View position='relative' w={'100%'} py={20} borderBottomWidth={1} borderBottomColor={'#ddd'} flexDirection='row' gap={30} >
                                {/* image */}
                                <Image source={require('@/assets/images/banana.png')} />

                                {/* description */}
                                <View flex={1} >
                                    {/* text */}
                                    <View flex={1}  h={'100%'} >
                                        <Text fontSize={15} fontFamily={'Gilroy_bold'} fontWeight={600} color={'#181725'} numberOfLines={1}>
                                        {'Organic bananas'}
                                        </Text>

                                        <Text fontSize={13} fontFamily={'Gilroy_medium'} fontWeight={500} color={'#7C7C7C'} numberOfLines={3}>
                                        {'12kg,Price'}
                                        </Text>
                                    </View>
                                    {/* button action */}
                                    <View flexDirection='row' mt={15} gap={5}>
                                        {/* c button */}
                                        <View position='relative' flexDirection='row'  alignItems='center'>
                                            {/* button decrement */}
                                            <StyledPressable w={35} h={35} borderRadius={10} borderWidth={1} borderColor={'#ddd'} justifyContent='center' alignItems='center' animation={'200ms'}>
                                                <Ionicons name='remove-outline' size={30} color={'#ddd'} animation={'200ms'}/>
                                            </StyledPressable>

                                            {/* text */}
                                            <Text w={35} fontFamily={'Gilroy_bold'}  color={'#7C7C7C'} textAlign='center' fontSize={15}>1</Text>


                                            {/* button increment */}
                                            <StyledPressable w={35} h={35} borderRadius={10} borderWidth={1} borderColor={'#ddd'} justifyContent='center' alignItems='center' animation={'200ms'}>
                                                <Ionicons name='add-outline' size={30} color={'#ddd'} animation={'200ms'}/>
                                            </StyledPressable>
                                        </View>
                                    </View>
                                </View>

                                {/* action */}
                                <View position='relative' >
                                        <View flex={1} alignItems='flex-end'>
                                            <StyledPressable animation={'200ms'}>
                                            <Ionicons name='close-outline' size={30} color={'#B3B3B3'} animation={'200ms'}/>
                                        </StyledPressable>
                                        </View>

                                       {/* price */}
                                       <Text fontSize={15} fontFamily={'Gilroy_bold'} fontWeight={600} color={'#181725'} numberOfLines={1}>
                                            $ 4.99
                                        </Text>
                                </View>


                            </View>
                        </View>


                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PageCart