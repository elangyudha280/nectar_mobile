import React, { Fragment, useEffect } from 'react'

// import component 
import { View,Text,styled,Image } from 'tamagui'
import { SafeAreaView,StatusBar,ScrollView,TouchableOpacity,useWindowDimensions,Pressable} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import utils
import { Link, useLocalSearchParams } from 'expo-router'
import { formatToUSD } from '@/utils/parseNumber';

// import store
import useFoodMeat from '@/store/foodMeat';
function PageDetailCategory() {
    let foodMeat = useFoodMeat((state:any) => state.foodMeat)

    let {width} = useWindowDimensions()
    const {idCategory} = useLocalSearchParams();
   
  return (
    <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{paddingTop:StatusBar.currentHeight,flex:1}} >
                <View position='relative' pb={20}  >
                    {/*//! TOP HEADER */}
                    <View position='relative'  py={10} px={12} w={'100%'} flexDirection='row' gap={2}>
                        <Link href={'/(dashboard)/(tabs)/(explore)/'} asChild>
                            <TouchableOpacity>
                                <Ionicons name='arrow-back' size={30} color={'#181725'}/>
                            </TouchableOpacity>
                        </Link>
                        <Text flex={1} fontWeight={'bold'} fontSize={20} textAlign='center' fontFamily={'Gilroy_semiBold'}>
                            Category
                        </Text>
                        <TouchableOpacity>
                                <Ionicons name='filter-circle-outline' size={30} color={'#181725'}/>
                        </TouchableOpacity>
                    </View>

                    {/*//! body content */}
                    <View px={15}>
                        {/* container card detail food */}
                        <View w={'100%'} position={'relative'} mt={15} p={2} flexDirection='row' gap={8} flexWrap='wrap'  justifyContent={width >= 700 ? 'flex-start' : 'space-between'}  >
                            {
                                foodMeat?.map((el:any,index:number)=>{
                                    return (
                                        <Fragment key={index+1}>
                                            <View style={{
                                                        paddingHorizontal:5,
                                                        paddingVertical:16,
                                                        borderRadius:6,
                                                        width:'48%',
                                                        flexBasis:'48%',
                                                        alignItems:'center',
                                                        borderWidth:1,
                                                        borderColor:`#ddd`
                                        }}
                                        >
                                                        {/* header */}
                                                        <View position='relative' w={'100%'} h={100} px={6}  justifyContent='center' alignItems='center'>
                                                        <Image source={el.poster} shadowOpacity={0.5} shadowColor={'#000'} shadowOffset={{
                                                        width:0,
                                                        height:0
                                                        }}
                                                        shadowRadius={10}
                                                        />
                                                        </View>

                                                        {/* body */}
                                                        <View w={'100%'} p={5} display='flex' flexDirection='column' flex={1}>
                                                        {/* description */}
                                                            <View flex={1}  h={'100%'} >
                                                            <Text fontSize={15} fontFamily={'Gilroy_bold'} fontWeight={600} color={'#181725'} numberOfLines={1}>
                                                            {el.title}
                                                            </Text>

                                                            <Text fontSize={13} fontFamily={'Gilroy_medium'} fontWeight={500} color={'#7C7C7C'} numberOfLines={3}>
                                                            {el.description}
                                                            </Text>
                                                            </View>

                                                            {/* button add*/}
                                                            <View flexDirection='row' mt={5} gap={5} alignItems='center' justifyContent='center'>
                                                            {/* price */}
                                                            <Text flex={1} color={'#181725'} fontFamily={'Gilroy_bold'}>
                                                                {formatToUSD(el.price)}
                                                            </Text>

                                                            {/* button add */}
                                                            <Pressable 
                                                            // onPress={()=>{
                                                            //     router.push({
                                                            //     pathname:'/(dashboard)/(detailFood)/[id]',
                                                            //     params:{
                                                            //         id,
                                                            //         typeDetail
                                                            //     }
                                                            //     })
                                                            // }}
                                                            style={{
                                                                width:40,
                                                                height:40,
                                                                display:'flex',
                                                                justifyContent:"center",
                                                                alignItems:'center',
                                                                backgroundColor:'#53B175',
                                                                borderRadius:5,
                                                            }}
                                                            >
                                                                <Ionicons name='add-outline' size={20} color={'#fff'}/>
                                                            </Pressable>
                                                            </View>
                                                        </View>
                                            
                                            </View>
                                        </Fragment>
                                    )
                                })
                            }
                        </View>
                    </View>
                    
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default PageDetailCategory