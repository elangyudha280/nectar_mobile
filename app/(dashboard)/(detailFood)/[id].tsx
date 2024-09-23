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
            <ScrollView style={{flex:1,backgroundColor:'white'}} contentContainerStyle={{flexGrow:1}}>
                <View position='relative' w={'100%'} height={'100%'}>
                  {/*//! TOP */}
                  <View position='relative' w={'100%'} pt={StatusBar.currentHeight} borderBottomLeftRadius={10} borderBottomRightRadius={10}  bg={'#f79d65'}>
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

                  {/*//! Body */}
                  <View position='relative' w={'100%'} flex={1} pt={15} pb={20} px={20}>
                    {/* name detail food */}
                    <View position='relative' w={'100%'} flexDirection='row' gap={10} p={5} alignItems='center'>
                      {/* name */}
                      <View flex={1}>
                        <Text fontSize={23} fontFamily={'Gilroy_bold'} fontWeight={600} color={'#181725'} numberOfLines={2}>
                          Nature Red Apple
                        </Text>

                        <Text fontSize={14} fontFamily={'Gilroy_medium'} fontWeight={500} color={'#7C7C7C'} numberOfLines={3}>
                          1kg, Price
                        </Text>
                      </View>
                      <PressableStyled position='relative' justifyContent='center' alignItems='center'>
                        <Ionicons name='heart-outline' size={30} color={'#7C7C7C'}/>
                      </PressableStyled>
                    </View>

                    {/* increment dan decrement */}
                    <View w={'100%'}  my={15} flexDirection='row' alignItems='center'>
                      {/* left button */}
                      <View flexDirection='row' gap={12}>
                        {/* button decrement */}
                        <PressableStyled   justifyContent='center' alignItems='center'>
                          <Ionicons name='remove-outline' size={30} color={'#7C7C7C'}/>
                        </PressableStyled> 

                        {/* total */}
                        <View  borderRadius={'$7'} w={45} h={45} borderWidth="$1" borderColor={'#E2E2E2'} justifyContent='center' alignItems='center' p={2}>
                              <Text  fontFamily={'Gilroy_semiBold'} numberOfLines={1}>
                                100
                              </Text>
                        </View>

                         {/* button increment */}
                         <PressableStyled   justifyContent='center' alignItems='center'>
                          <Ionicons name='add-outline' size={30} color={'#53B175'}/>
                        </PressableStyled> 

                      </View>

                      {/* price */}
                      <View flex={1} w={'100%'} justifyContent='flex-end' >
                        <Text fontSize={23} fontFamily={'Gilroy_bold'}  textAlign='right' fontWeight={600} color={'#181725'} numberOfLines={2}>
                          $4.99
                        </Text>
                      </View>
 
                    </View>


                    {/* description */}
                    <View flex={1} px={5} py={15} borderTopWidth={1} borderTopColor={'#E2E2E2'}>
                        <Text fontSize={20} fontFamily={'Gilroy_bold'} fontWeight={600} color={'#181725'} numberOfLines={2}>
                          Product Detail
                        </Text>

                        {/* desc */}
                        <Text fontSize={15} fontFamily={'Gilroy_semiBold'} mt={10}  color={'#7C7C7C'} textAlign='justify' lineHeight={19}>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aliquid, id blanditiis atque consectetur adipisci? Maiores consequuntur error quo accusamus! 
                        </Text>
                    </View>

                    {/* button add to cart */}
                    <PressableStyled   borderRadius={10} bg={"#53B175"} p={15} flexDirection='row' justifyContent='center' alignItems='center' gap={8}>
                                    {/* text */}
                                    <Text color={'#fff'} fontFamily={'Gilroy_bold'} fontSize={16} flex={1} textAlign='center'>
                                      Add To Basket
                                    </Text>
                    </PressableStyled>
                  </View>

                </View>
            </ScrollView>
        <StatusBar barStyle={'light-content'}/>
      </SafeAreaView>
  )
}

export default PageDetailFood