import React from "react"

import { ImageBackground,Pressable } from "react-native"
import { View,Image,Text } from "tamagui"
import { Ionicons } from "@expo/vector-icons"
import { interfaceSlideItems } from "@/interface/cardSliderInterface"
import { formatToUSD } from "@/utils/parseNumber"
import { router } from "expo-router"
type propsSlider = interfaceSlideItems

interface interfacePropsCardFood {
  id:string|number,
  typeDetail:string,
  title:string,
  description:string,
  price:string|number,
  poster:any,
}

const CardSliderDashboard  = ({id,title,diskon,poster}:propsSlider)=>{
    return (
        <View w={'100%'} position='relative' height={'100%'} p={0} bg={'cyan'} borderRadius={10} overflow='hidden'>
        {/* bg1 */}
        <ImageBackground 
        source={require('@/assets/images/blurBg.png')}
        style={
          { 
            zIndex:1,
            position:'absolute',
            left:0,
            padding:0,
            width:'100%',
            height:'100%'
          }
        }
        >
        
        </ImageBackground>  
        {/* bg2 */}
        <ImageBackground 
        source={require('@/assets/images/fruitBg.png')}
        style={
          { 
            zIndex:1,
            position:'absolute',
            left:0,
            padding:0,
            width:'100%',
            height:'100%'
          }
        }></ImageBackground>  
        
        {/* //! content slider */}
        <View zIndex={2} w={'100%'} h={'100%'} paddingVertical={20} paddingHorizontal={15} flexDirection='row'  alignItems='center' rowGap={15}>
              <Image source={poster} />

              <View f={1} w={'100%'} justifyContent='center'>
                <Text fontFamily={'Gilroy_semiBold'} fontSize={20}>
                {title}
                </Text>
                <Text fontFamily={'Gilroy_semiBold'} fontSize={14} color={'#53B175'}>
                  {diskon}
                </Text>
              </View>
        </View>
        </View>   
    )
}

// component card food
const CardFood = ({id,typeDetail,title,description,price,poster}:interfacePropsCardFood)=>{
  return (
    <View flex={1} w={150}  p={8}  borderRadius={10} borderWidth={1} borderColor={'#E2E2E2'}>
    {/* header */}
    <View position='relative' w={'100%'} h={100} px={6}  justifyContent='center' alignItems='center'>
    <Image source={poster} shadowOpacity={0.5} shadowColor={'#000'} shadowOffset={{
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
          {title}
        </Text>

        <Text fontSize={13} fontFamily={'Gilroy_medium'} fontWeight={500} color={'#7C7C7C'} numberOfLines={3}>
          {description}
        </Text>
        </View>

        {/* button add*/}
        <View flexDirection='row' mt={5} gap={5} alignItems='center' justifyContent='center'>
          {/* price */}
          <Text flex={1} color={'#181725'} fontFamily={'Gilroy_bold'}>
            {formatToUSD(price)}
          </Text>

          {/* button add */}
          <Pressable 
          onPress={()=>{
            router.push({
              pathname:'/(dashboard)/(detailFood)/[id]',
              params:{
                id,
                typeDetail
              }
            })
          }}
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
  )
}

export {CardSliderDashboard,CardFood};