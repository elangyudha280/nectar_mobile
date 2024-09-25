import React, { useEffect } from 'react'

// import component 
import { View,Text } from 'tamagui'

// import utils
import { useLocalSearchParams } from 'expo-router'

function PageDetailCategory() {

    const {idCategory} = useLocalSearchParams();
    useEffect(()=>{
        console.log(idCategory)
    },[])
  return (
    <View>
        <Text>PageDetailCategory</Text>
    </View>
  )
}

export default PageDetailCategory