import React from 'react'

// import component
import { View,Text, } from 'tamagui'
import { Ionicons } from '@expo/vector-icons'


function CustomTabBar(props:any) {
  return (
    <View display='block' w={'100%'}  pt={11}  position='absolute' bottom={0}  zIndex={10} style={{
      shadowColor: '#000', 
      shadowOffset: { width: 0, height: -10 }, 
      shadowOpacity: 0.7,
      shadowRadius: 10,
      elevation:30,
    }}>
        <View w={'100%'} bg={'white'}  px={20} py={6} borderTopStartRadius={20}  borderTopEndRadius={20} >
        <View
          maxWidth={500}
          mx={'auto'}
          p={5}
          display='flex'
        >
          {
            props?.state?.routes.map((route:any,index:any)=>{
              const { options } = props?.descriptors[route.key];
              const label = options.tabBarLabel !== undefined ? options.tabBarLabel : route.name;
              const isFocused = props?.state?.index === index;

              const onPress = () => {
                const event = props?.navigation.emit({
                  type: 'tabPress',
                  target: route.key,
                  canPreventDefault: true,
                });
      
                if (!isFocused && !event.defaultPrevented) {
                  props?.navigation.navigate(route.name);
                }
              };
      
              const onLongPress = () => {
                props?.navigation.emit({
                  type: 'tabLongPress',
                  target: route.key,
                });
              }
              return (
                <View justifyContent='center' alignItems='center'>
                  <Ionicons name="cart-outline" style={{fontWeight:'medium'}} size={24} color={isFocused ? '#53B175' : '#181725'}/>
                  <Text fontWeight={'bold'} color={isFocused ? '#53B175' : '#181725'}> {route.name === 'index' ? "Shop": route.name}</Text>
                </View>
              )
            })
          }

        </View>
        </View>

    </View>
  )
}

export default CustomTabBar