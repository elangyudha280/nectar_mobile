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
                        <View px={25} pt={15}  gap={18}  flex={1} paddingBottom={width >= 700 ? 50 : 0 }>
                            {/*//! container card list */}
                            <View gap={8} position='relative' flex={1}>
                                
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