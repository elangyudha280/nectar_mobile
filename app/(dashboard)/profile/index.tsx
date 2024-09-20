import React from 'react'

// import component
import { View,Text,Image,styled } from 'tamagui'
import {Pressable, SafeAreaView,ScrollView,StatusBar,TextInput, TouchableOpacity,useWindowDimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


const StyledPressable = styled(Pressable);
const PageProfile = ()=>{
    
    let {width} = useWindowDimensions()
    return (
        <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{paddingTop:StatusBar.currentHeight,flex:1}} contentContainerStyle={{flexGrow:1}} >
                <View position='relative'  flex={1}>
                    {/* //! body content */}
                    <View  pt={15}  gap={18}  flex={1} paddingBottom={width >= 700 ? 10 : 15 } >

                        {/*//! container info user */}
                        <View gap={8} position='relative' flex={1}>
                            {/* header profile */}
                            <View position='relative' px={20} pt={15} pb={20} borderBottomWidth={1} borderBottomColor={'#E2E2E2'} flexDirection='row' gap={10}>
                                {/* img */}
                                <View w={50} h={50} overflow='hidden' borderRadius={'$12'} bg={'red'}>
                                <Image w={'100%'} h={'100%'} objectFit='cover' source={require('@/assets/images/profile.jpg')}/>
                                </View>
                            </View>


                            {/* username */}

                        </View>

                         {/*//! container button logout */}
                         <View w={'100%'} px={25}>
                                <StyledPressable   borderRadius={10} bg={"#F2F3F2"} p={15} flexDirection='row' justifyContent='flex-start' alignItems='center' gap={8}>

                                    <Ionicons name='log-out-outline' size={20} color={'#53B175'} />
                                    {/* text */}
                                    <Text color={'#53B175'} fontFamily={'Gilroy_bold'} flex={1} textAlign='center'>
                                      Logout
                                    </Text>
                                </StyledPressable>
                          </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PageProfile