import React, { Fragment, useState } from 'react'

// IMPORT COMPONENT
import { SafeAreaView, StatusBar,TextInput,Dimensions, ImageBackground, Pressable,FlatList } from 'react-native'
import { ScrollView,View,Text,Image, Circle,AnimatePresence,Spinner  } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'
import { CardSliderDashboard,CardFood } from '@/components/cards/cards'


// import pkg dan utils
import PagerView from 'react-native-pager-view'
import GroceriesDashboard from '@/interface/interfaceGroceries'
import { interfaceSlideItems } from '@/interface/cardSliderInterface'
import useListExclusiveFood from '@/store/foodExclusive'
import useFoodBestSelling from '@/store/foodBestSelling'
import useFoodMeat from '@/store/foodMeat'
import AsyncStorage from '@react-native-async-storage/async-storage'
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

  let exclusiveFood = useListExclusiveFood((state:any) => state.exclusiveFood)
  let foodBestSelling = useFoodBestSelling((state:any) => state.foodBestSelling)
  let foodMeat = useFoodMeat((state:any) => state.foodMeat)

  let cirlcleSlider :{id:string|number}[] = [
    {id:1},{id:2},{id:3},{id:4}
  ]  
  // React.useEffect(()=>{
  //   AsyncStorage.getItem('profile-user').then((value) => {
  //     console.log(value)
  //     if (value !== null) {
  //       console.log('Data yang diambil:', value);
  //     }
  //   }).catch((error) => {
  //     console.log('Gagal mengambil data:', error);
  //   });
  //     })
  // data bahan makanan
  let Groceries : GroceriesDashboard[] = [
    {
      id:1,
      title:'Pulses',
      poster:require('@/assets/images/carbo.png'),
      color:'rgba(248,164,76,0.1)'
    },
    {
      id:2,
      title:'Rice',
      poster:require('@/assets/images/rice.png'),
      color:'rgba(83,117,117,0.1)'
    },
    
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
                    pageMargin={5}
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

                  {/*//! Content */}
                  <View w={'100%'} position={'relative'} mt={15} p={2}>
                     {/* //! EXCLUSIVE FOOD */}
                     <View>
                         {/* //! header  */}
                        <View flexDirection='row' gap={2} alignItems='center'>
                            <Text flex={1} w={'100%'} fontSize={20} fontWeight={'bold'} fontFamily={'Gilroy_bold'}>
                              Exclusive Offer
                            </Text>
                            <Text fontSize={15} fontWeight={'500'} color={'#53B175'} fontFamily={'Gilroy_semiBold'}>
                              See all
                            </Text>
                        </View>

                        {/*//! food list */}
                        <View position='relative' w={'100%'} mt={10} >
                          <FlatList 
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          progressViewOffset={0}
                            data={exclusiveFood}
                            ItemSeparatorComponent={()=>{
                              return (
                                <View w={11}></View>
                              )
                            }}  
                            renderItem={({item})=>{
                              return (
                                <Fragment>
                                    {/* card */}
                                    <CardFood title={item.title} description={item.description} poster={item.poster} price={item.price} />
                                </Fragment>
                              )
                            }}
                            keyExtractor={(item) => item.id}
                          />
                        </View>
                     </View>

                     {/*//! BEST SELLING */}
                     <View mt={30}>
                         {/* //! header  */}
                        <View flexDirection='row' gap={2} alignItems='center'>
                            <Text flex={1} w={'100%'} fontSize={20} fontWeight={'bold'} fontFamily={'Gilroy_bold'}>
                              Best Selling
                            </Text>
                            <Text fontSize={15} fontWeight={'500'} color={'#53B175'} fontFamily={'Gilroy_semiBold'}>
                              See all
                            </Text>
                        </View>

                        {/*//! food list */}
                        <View position='relative' w={'100%'} mt={10} >
                          <FlatList 
                          horizontal
                          showsHorizontalScrollIndicator={false}
                          progressViewOffset={0}
                            data={foodBestSelling}
                            ItemSeparatorComponent={()=>{
                              return (
                                <View w={11}></View>
                              )
                            }}  
                            renderItem={({item})=>{
                              return (
                                <Fragment>
                                    {/* card */}
                                    <CardFood title={item.title} description={item.description} poster={item.poster} price={item.price} />
                                </Fragment>
                              )
                            }}
                            keyExtractor={(item) => item.id}
                          />
                        </View>
                     </View>


                     {/*//! GROCERIES */}
                     <View mt={30} >
                        {/*//! header */}
                        <View>
                          <FlatList
                            data={Groceries}
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            progressViewOffset={0}
                            ItemSeparatorComponent={()=>{
                              return (
                                <View w={11}></View>
                              )
                            }}  
                            renderItem={({item,index})=>{
                              return (
                                <View px={15} py={10} w={230} bg={item.color} borderRadius={10} flexDirection='row' gap={5} alignItems='center'>
                                  <Image source={item.poster}/>
                                  <Text fontWeight={'bold'} fontFamily={'Gilroy_bold'} color={'#3E423F'} fontSize={20}>
                                    {item.title}
                                  </Text>
                                </View>
                              )
                            }}
                            keyExtractor={(item) => `${item.id}`}
                          />
                        </View>

                         {/*//! food list */}
                         <View position='relative' w={'100%'} mt={10} p={10}>
                          <FlatList 
                          horizontal
                          showsHorizontalScrollIndicator={false}
                            data={foodMeat}
                            ItemSeparatorComponent={()=>{
                              return (
                                <View w={11}></View>
                              )
                            }}  
                            renderItem={({item})=>{
                              return (
                                <Fragment>
                                    {/* card */}
                                    <CardFood title={item.title} description={item.description} poster={item.poster} price={item.price} />
                                </Fragment>
                              )
                            }}
                            keyExtractor={(item) => item.id}
                          />
                         </View>
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

