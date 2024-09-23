import React,{useState,useEffect}from 'react'

// import component
import { View,Text,Image,styled,Spinner } from 'tamagui'
import {Pressable, SafeAreaView,ScrollView,StatusBar,TextInput, TouchableOpacity,useWindowDimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'


// import pkg
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'
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

    // state loading get user
    let [loadingGetUser,setLoadingGetUser] = useState(true)
    // STATE LOADING LOGOUT
    let [loadingLogout,setLoadingLogout] = useState(false)

    // STATE DATA USER
    let [dataUser,setDataUser] = useState<any>([])
    
    useEffect(()=>{
        AsyncStorage.getItem('profile-user').then((value) => {
          if (value !== null) {
            setDataUser([JSON.parse(value)])
            return
          }
          setDataUser([])
        }).catch((error) => {
            setDataUser([])
          return error
        })
        .finally(()=>[
            setLoadingGetUser(false)
        ])
      },[])

    //   HANDLE LOGOUT
    const handleLogout = async () =>{
        setLoadingLogout(true)
        try{
            await AsyncStorage.removeItem('profile-user')
            router.replace('/(auth)/login')
        }
        catch(err){
            return
        }
        finally{
            setLoadingLogout(false)
        }
    }

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
                                        {
                                            loadingGetUser ? 
                                            <Text fontFamily={'Gilroy_bold'} fontSize={16} w={150} bg={'#ddd'}></Text>
                                            :
                                            <Text fontFamily={'Gilroy_bold'} fontSize={16}>{dataUser[0]?.usernameValue}</Text>
                                        }
                                        <StyledPressable>
                                             <Ionicons name='pencil-outline' size={17} color={'#53B175'} />
                                        </StyledPressable>
                                    </View>

                                    {/* email */}
                                    
                                    {
                                            loadingGetUser ? 
                                            <Text fontFamily={'Gilroy_semiBold'} fontSize={15} w={150} bg={'#ddd'}></Text>
                                            :
                                            <Text fontFamily={'Gilroy_semiBold'} color={'#7C7C7C'} fontSize={15}>
                                                {dataUser[0]?.emailValue}
                                            </Text>
                                        }
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
                                <StyledPressable onPress={handleLogout}  borderRadius={10} bg={"#F2F3F2"} p={15} flexDirection='row' justifyContent={loadingLogout ? 'center' : 'flex-start'} alignItems='center' gap={8}>
                                    {
                                        loadingLogout ?
                                        <Spinner size="small" color="$green10"/>
                                        :
                                        (
                                             <>
                                                <Ionicons name='log-out-outline' size={20} color={'#53B175'} />
                                                <Text color={'#53B175'} fontFamily={'Gilroy_bold'} flex={1} textAlign='center'>
                                                    Logout
                                                </Text>
                                             </>
                                        )
                                    }
                                </StyledPressable>
                          </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default PageProfile