import React from "react"

import { ImageBackground } from "react-native"
import { View,Image,Text } from "tamagui"
import { interfaceSlideItems } from "@/interface/cardSliderInterface"

type propsSlider = interfaceSlideItems

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

export {CardSliderDashboard};