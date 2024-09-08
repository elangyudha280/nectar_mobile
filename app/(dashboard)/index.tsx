import React, { Fragment, useState } from 'react'

// IMPORT COMPONENT
import { SafeAreaView, StatusBar,TextInput,Dimensions, ImageBackground, Pressable,FlatList } from 'react-native'
import { ScrollView,View,Text,Image, Circle,AnimatePresence,Spinner  } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'

// import pkg dan utils
import PagerView from 'react-native-pager-view'
import { CardSliderDashboard } from '@/components/cards/cards'
import { interfaceSlideItems } from '@/interface/cardSliderInterface'
import useListExclusiveFood from '@/store/foodExclusive'

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
                                  <View flex={1} w={150}  p={8}  borderRadius={10} borderWidth={1} borderColor={'#E2E2E2'}>
                                    {/* header */}
                                    <View position='relative' w={'100%'} h={100} px={6}  justifyContent='center' alignItems='center'>
                                    <Image source={item.poster} shadowOpacity={0.5} shadowColor={'#000'} shadowOffset={{
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
                                          {item.title}
                                        </Text>
      
                                        <Text fontSize={13} fontFamily={'Gilroy_medium'} fontWeight={500} color={'#7C7C7C'} numberOfLines={3}>
                                          {item.description}
                                        </Text>
                                        </View>
      
                                        {/* button add*/}
                                        <View flexDirection='row' mt={5} gap={5} alignItems='center' justifyContent='center'>
                                          {/* price */}
                                          <Text flex={1} color={'#181725'} fontFamily={'Gilroy_bold'}>
                                            {item.price}
                                          </Text>
      
                                          {/* button add */}
                                          <Pressable 
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
                          }}
                          keyExtractor={(item) => item.id}
                         />

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


// {/* <PagerView style={{
//   width:"100%",
//   height:200,
// }} initialPage={0}
// pageMargin={10}
// // onPageSelected={(e) => setSliderActive(e.nativeEvent.position)} 
// >

//   <View key={1} w={'100%'}   flexDirection='row' gap={5}>
//     {/* card */}
//     <View flex={1} w={'100%'}  p={10}  borderRadius={10} borderWidth={1} borderColor={'#E2E2E2'}>
//       {/* header */}
//       <View position='relative' w={'100%'} px={6} py={10} justifyContent='center' alignItems='center'>
//       <Image source={require('@/assets/images/apple.png')} />
//       </View>

//       {/* body */}
//       <View w={'100%'} p={5} display='flex' flexDirection='column' flex={1}>
//         {/* description */}
//           <View py={2} flex={1}  h={'100%'} >
//           <Text fontSize={15} fontFamily={'Gilroy_bold'} fontWeight={600} color={'#181725'}>
//             Red Apple
//           </Text>

//           <Text fontSize={13} fontFamily={'Gilroy_medium'} fontWeight={500} color={'#7C7C7C'}>
//             1kg, Priceg
//           </Text>
//           </View>

//           {/* button add*/}
//           <View flexDirection='row' gap={5} alignItems='center' justifyContent='center'>
//             {/* price */}
//             <Text flex={1} color={'#181725'} fontFamily={'Gilroy_bold'}>
//               $4.99
//             </Text>

//             {/* button add */}
//             <Pressable 
//             style={{
//               width:30,
//               height:30,
//               display:'flex',
//               justifyContent:"center",
//               alignItems:'center',
//               backgroundColor:'#53B175',
//               borderRadius:5,
//             }}
//             >
//               <Ionicons name='add-outline' size={20} color={'#fff'}/>
//             </Pressable>
//           </View>
//       </View>
//     </View>
//             </View>

//   <View key={2} w={200} p={10} backgroundColor={'green'}>

//   </View>
  
//  </PagerView> */}