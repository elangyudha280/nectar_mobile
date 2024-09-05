

// IMPORT COMPONENT 
import { ImageBackground,StatusBar,Animated } from "react-native";
import { View,Text,ScrollView,ZStack, YStack,Image,H3,AnimatePresence,Button} from "tamagui";

// import utils
import { router } from "expo-router";

const PageHome = () =>{
    return (
        <>
            <ScrollView contentContainerStyle={{
                position:'relative',
                flexGrow: 1,
                }}>
                    
                <ImageBackground source={require('@/assets/images/bgWelcome.png')} 
                    style={{
                        width:'100%',
                        height:'101%',
                        flexGrow:1,
                        zIndex:1,
                    }}
                >
                    <View 
                    style={{
                        flex:1,
                        paddingHorizontal:20,
                        paddingVertical:40,
                        display:'flex',
                        flexDirection:'row',
                            justifyItems:'start',
                            alignItems:"flex-end"
                        }}
                    >
                        {/* content */}
                        <View style={
                            {
                                position:'relative',
                                width:'100%',
                                flexDirection:'column',
                                alignItems:'center',
                                justifyContent:'center',
                            }
                        }>
                            
                            {/* icon wortel */}
                            <Image source={require('@/assets/images/carot_white.png')}/>

                            {/* text title */}
                            <View style={{
                                flexDirection:'column',
                            }} marginTop={20}>
                                <H3 color={'$color.white1'} size={"$10"} textAlign="center">Welcome</H3> 
                                <H3 color={'$color.white1'} size={"$10"} textAlign="center">to our store</H3>
                            </View>

                            {/* subtitle */}
                            <H3 color={'$color.white1'}  textAlign="center" style={{fontSize:15}}>
                                Ger your groceries in as fast as one hour
                            </H3>

                            {/* BUTTON */}
                                <Button 
                                unstyled
                                animation={"100ms"}
                                paddingHorizontal={20}
                                height={50}
                                borderRadius={30}
                                mt={15}
                                justifyContent="center"
                                alignItems="center"
                                width={'100%'}
                                backgroundColor={'#53B175'}
                                color={'white'}
                                pressStyle={{
                                    backgroundColor:'transparent',
                                    borderWidth:1,
                                    borderColor:'#53B175',
                                }}
                                onPress={()=>{
                                    router.push('/(auth)/login')
                                }}
                                >
                                        Get Started
                                </Button>
                        </View>
                    </View>
                </ImageBackground>

            </ScrollView>
        <StatusBar barStyle={'light-content'}/>

        </>
    )
}

export default PageHome