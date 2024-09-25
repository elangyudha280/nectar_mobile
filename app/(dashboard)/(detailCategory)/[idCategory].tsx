import React, { useEffect } from 'react'

// import component 
import { View,Text,styled } from 'tamagui'
import { SafeAreaView,StatusBar,ScrollView,TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
// import utils
import { Link, useLocalSearchParams } from 'expo-router'

function PageDetailCategory() {

    const {idCategory} = useLocalSearchParams();
    useEffect(()=>{
        console.log(idCategory)
    },[])
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
                    
                </View>
            </ScrollView>
    </SafeAreaView>
  )
}

export default PageDetailCategory