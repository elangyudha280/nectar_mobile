import React, { useState } from 'react'

// IMPORT COMPONENT
import { SafeAreaView, StatusBar,TextInput,Dimensions, ImageBackground } from 'react-native'
import { ScrollView,View,Text,Image, Circle,AnimatePresence } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'

// import pkg dan utils
import PagerView from 'react-native-pager-view'
import { CardSliderDashboard } from '@/components/cards/cards'
import { interfaceSlideItems } from '@/interface/cardSliderInterface'


const dataSliderDashboard : interfaceSlideItems[] = [
  {
    id:1,
    title:'Fresh Vegetables',
    diskon:'Get Up To 40% OFF',
    poster:require('@/assets/images/food1.png')
  },
  {
    id:2,
    title:'Fresh Fruits',
    diskon:'Get Up To 30% OFF',
    poster:require('@/assets/images/food2.png')
  },
  {
    id:3,
    title:'Fresh Zaitun',
    diskon:'Get Up To 50% OFF',
    poster:require('@/assets/images/food3.png')
  },
  {
    id:4,
    title:'Fresh Meat',
    diskon:'Get Up To 20% OFF',
    poster:require('@/assets/images/food4.png')
  }
];


function PageDashboard() {

  let [sliderActive,setSliderActive] = useState(0)

  let cirlcleSlider :{id:string|number}[] = [
    {id:1},{id:2},{id:3},{id:4}
  ]  
  return (
    <>
        <SafeAreaView style={{flex:1,position:'relative',backgroundColor:'white'}}>
            <ScrollView style={{paddingTop:StatusBar.currentHeight,flex:1}}
            >
                <View position='relative' pt={20} pb={80} px={15}>
                  {/*//! top header */}
                  <View position='relative' justifyContent='center' alignItems='center' >
                      {/* image carrot */}
                      <Image source={require('@/assets/images/carot2.png')} />
                      {/* title */}
                      <View flexDirection='row' justifyContent='center' mt={15} rowGap={5}>
                        <Image source={require('@/assets/images/pinMap.png')} />
                        <Text fontSize={15} fontFamily={'Gilroy_bold'} color={'#4C4F4D'} pl={5}>
                            Jakarta, Indonesia
                        </Text>
                      </View>
                  </View>

                  {/*//! Input Search*/}
                  <View w={'100%'} borderRadius={10} flexDirection='row' alignItems='center' mt={20} p={10} bg={'#F2F3F2'} columnGap={10}>
                    <Ionicons name='search-outline' size={20} />

                    {/* input search */}
                    <TextInput 
                      inputMode='search'
                      placeholder='Search Store'
                      placeholderTextColor={'#7C7C7C'}
                      style={{width:"100%",paddingVertical:0,flex:1}}
                    />
                  </View>

                  {/* //! slider card */}
                  <View w={'100%'} position='relative' mt={20}>
                    {/* slide items */}
                    <PagerView style={{
                      width:"100%",
                      height:120,
                      padding:10,
                    }} initialPage={0}
                    onPageSelected={(e) => setSliderActive(e.nativeEvent.position)} 
                    >
                     
                     {
                      dataSliderDashboard?.map((el,i)=>{
                        return (
                          <CardSliderDashboard key={el.id} id={el.id} title={el.title} diskon={el.diskon} poster={el.poster}/>
                        )
                      })
                     }

                    </PagerView>

                      {/*//! pagination */}
                      <View mx={'auto'} maxWidth={50} p={5} flexDirection='row' alignItems='center' justifyContent='center' gap={3}>
                        
                        {
                          cirlcleSlider?.map((el,i)=>{
                            return  (
                              <AnimatePresence key={i}>
                                   <Circle w={sliderActive === i ? '100%' : 7} h={7} backgroundColor={sliderActive === i ? '#53B175' : '#7C7C7C' }
                                    flex={sliderActive === i ? 1 : 0} animation={'100ms'} animatePresence={true} 
                                    />
                              </AnimatePresence>
                            )
                          })
                        }
                      </View>
                  </View>
                </View>
            </ScrollView>
        </SafeAreaView>
        <StatusBar barStyle={'dark-content'}/>
    </>
  )
}

export default PageDashboard