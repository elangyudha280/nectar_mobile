import React from 'react'

// import component
import { View,Text,Image,styled } from 'tamagui'
import {Pressable, SafeAreaView,ScrollView,StatusBar,TextInput, TouchableOpacity,useWindowDimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
const StyledPressable = styled(Pressable);

// interface list menu profile
interface InterfaceListMenuProfile {
    id:string|number,
    title:string,
    iconLeft:any
}

//! DATA LIST MENU PROFILE
const listMenuProfile  : InterfaceListMenuProfile[] = [
    {
        id:1,
        title:'Order',
        iconLeft:'bag-handle-outline'
    },
    {
        id:2,
        title:'My Details',
        iconLeft:'card-outline'
    },
    {
        id:3,
        title:'Delivery Address',
        iconLeft:'pin-outline'
    },
    {
        id:4,
        title:'Payment Methods',
        iconLeft:'cash-outline'
    },
    {
        id:5,
        title:'Promo Card',
        iconLeft:'pricetags-outline'
    },
    {
        id:6,
        title:'Notifecations',
        iconLeft:'notifications-outline'
    },
    {
        id:7,
        title:'Help',
        iconLeft:'help-circle-outline'
    },
    {
        id:8,
        title:'About',
        iconLeft:'alert-circle-outline'
    },
  
]
const PageProfile = ()=>{
    
    // ukuran layar
    let {width} = useWindowDimensions()

    return (
        <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{paddingTop:StatusBar.currentHeight,flex:1}} contentContainerStyle={{flexGrow:1}} >
                <View position='relative'  flex={1}>
                    {/* //! body content */}
                    <View   gap={18}  flex={1} paddingBottom={width >= 700 ? 50 : 15 } >

                        {/*//! container info user */}
                        <View  position='relative' flex={1}>
                            {/* header profile */}
                            <View position='relative' px={20} pt={15} pb={20} borderBottomWidth={1} borderBottomColor={'#E2E2E2'} flexDirection='row' gap={10}>
                                {/* img */}
                                <View w={50} h={50} overflow='hidden' borderRadius={'$12'} >
                                    <Image w={'100%'} h={'100%'} objectFit='cover' source={require('@/assets/images/profile.jpg')}/>
                                </View>

                                {/* username */}
                                <View flex={1} py={5}>
                                    {/* name */}
                                    <View w={'100%'}   flexDirection='row' gap={10} alignItems='center'>
                                        <Text fontFamily={'Gilroy_bold'} fontSize={16}>Username</Text>
                                        <StyledPressable>
                                             <Ionicons name='pencil-outline' size={17} color={'#53B175'} />
                                        </StyledPressable>
                                    </View>

                                    {/* email */}
                                    <Text fontFamily={'Gilroy_semiBold'} color={'#7C7C7C'} fontSize={15}>
                                        user@email.com
                                    </Text>
                                </View>
                            </View>

                            {/* content body */}
                            <View position='relative'  flex={1}>
                                {/* list content */}
                                {
                                    listMenuProfile?.map((el:InterfaceListMenuProfile)=>{
                                        return (
                                            <StyledPressable key={el.id} position='relative' w={'100%'} py={15}  borderBottomWidth={1} borderBottomColor={'#E2E2E2'} flexDirection='row' gap={15} px={20} alignItems='center'>
                                                {/* icon */}
                                                <Ionicons name={el.iconLeft} size={20} color={'#181725'} />
                                                {/* text */}
                                                <Text fontFamily={'Gilroy_bold'} fontSize={15} flex={1} numberOfLines={2}>{el.title}</Text>
                                                {/* action */}
                                                <StyledPressable >
                                                    {/* icon */}
                                                    <Ionicons name='chevron-forward' size={20} color={'#181725'} />
                                                </StyledPressable>
                                            </StyledPressable>
                                        )
                                    })
                                }
                            </View>
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