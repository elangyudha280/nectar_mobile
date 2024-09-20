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

                        {/* //! body content */}
                        <View px={25} pt={15}  gap={18}  flex={1} paddingBottom={width >= 700 ? 10 : 15 }>
                            {/*//! container card list */}
                            <View gap={8} position='relative' flex={1}>
                                {/* card list favorite */}
                                <View position='relative' w={'100%'} py={15} borderBottomWidth={1} borderBottomColor={'#ddd'} flexDirection='row' gap={10} justifyContent='center' alignItems='center'>
                                    {/* image */}
                                    <Image w={60} h={50} objectFit='cover' source={require('@/assets/images/banana.png')} />
                                    {/* description */}
                                    <View flex={1} >
                                        {/* text */}
                                        <View flex={1}  h={'100%'} >
                                            <Text fontSize={15} fontFamily={'Gilroy_bold'} fontWeight={600} color={'#181725'} numberOfLines={1}>
                                            Organic bananas
                                            </Text>
                                            <Text fontSize={13} fontFamily={'Gilroy_medium'} fontWeight={500} color={'#7C7C7C'} numberOfLines={3}>
                                            12kg,Price
                                            </Text>
                                        </View>
                                    </View>
                                    {/* action */}
                                    <View position='relative' >
                                        {/* price */}
                                        <Text fontSize={15} fontFamily={'Gilroy_bold'} fontWeight={600} color={'#181725'} numberOfLines={1}>
                                                $ 4.99
                                            </Text>
                                    </View>
                                </View>
                            </View>

                             {/*//! container button add all favorite */}
                            <View w={'100%'}>
                                <StyledPressable   borderRadius={10} bg={"#53B175"} p={15} flexDirection='row' justifyContent='center' alignItems='center' gap={8}>
                                    {/* text */}
                                    <Text color={'#fff'} fontFamily={'Gilroy_bold'} flex={1} textAlign='center'>
                                      Add All To Cart
                                    </Text>
                                </StyledPressable>
                            </View>
                        </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PageFavorite;