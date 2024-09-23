import { useLocalSearchParams } from 'expo-router'
import React from 'react'

import { View,Text } from 'tamagui'
function PageDetailFood() {
    // get parameter
    let {id} = useLocalSearchParams()
  return (
    <View>
        <Text>PAGE DETAIL FOOD {id}</Text>
    </View>
  )
}

export default PageDetailFood