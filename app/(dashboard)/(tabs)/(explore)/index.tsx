import React from 'react'

// import component
import { View,Text,Image } from 'tamagui'
import {SafeAreaView,ScrollView,StatusBar,TextInput, TouchableOpacity,useWindowDimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

// import store dan utils
import useFoodCategory from '@/store/foodCategory'
import { foodCategories } from '@/interface/interfaceFoodCategories'
import { router } from 'expo-router'
function PageExplore() {
    
    let {width} = useWindowDimensions()
  let foodCategories = useFoodCategory((state:any) => state.foodCategories)
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
                    <View w={'100%'} position={'relative'} mt={15} p={2} flexDirection='row' gap={8} flexWrap='wrap'  justifyContent={width >= 700 ? 'flex-start' : 'space-between'} >
                        {/* card category food*/}
                        {
                            foodCategories?.map((el:foodCategories,index:number)=>{
                                return (
                                    <TouchableOpacity key={el.id} style={{
                                        paddingHorizontal:5,
                                        paddingVertical:16,
                                        backgroundColor:el.color,
                                        borderRadius:10,
                                        width:'48%',
                                        flexBasis:'48%',
                                        alignItems:'center',
                                        borderWidth:1,
                                        borderColor:`${el.bordercolor}`
                                    }} onPress={()=>{
                                        router.push({
                                            pathname:'/(dashboard)/(detailCategory)/[idCategory]',
                                            params:{
                                                idCategory:el.id
                                            }
                                        })
                                    }}> 
                                      
                                        <Image source={el.poster}/>
                                        <Text textTransform='capitalize' mt={15} fontSize={15} textAlign='center' fontFamily={'Gilroy_bold'}>
                                            {el.title}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })
                        }
                        
                    </View>
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default PageExplore