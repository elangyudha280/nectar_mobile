import React,{useState} from 'react'

// import component
import { ImageBackground,StatusBar } from 'react-native'
import { View,Text,ScrollView ,Image,H4, H3, Input, Button} from 'tamagui'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons' 

function LoginPage() {
  let [showPassword,setShowPassword] = useState(false)
  return (
   <>
     <ScrollView style={{
            flex:1,
            backgroundColor:'white'
        }
      }
      contentContainerStyle={{
        flexGrow:1
      }}

        >
          <ImageBackground source={require('@/assets/images/blurBg.png')} 
                        style={{
                            width:'100%',
                            height:200,
                            zIndex:1,
                            justifyContent:'center',
                            alignItems:'center',
                            paddingTop:30
                        }}
                    >

                      {/* icon wortel */}
                      <Image source={require('@/assets/images/carot.png')}/>
          </ImageBackground>

          {/* content */}
          <View
            w={'100%'}
            h={'100%'}
            flex={1}
            position='relative'
            padding={20}
            zIndex={2}
          >
            {/* header */}
            <View>
              <H3 fontWeight={'bold'} >Login</H3>
              <Text mt={3} color={'#7C7C7C'}>
                Enter your emails and password
              </Text>
            </View>

            {/* form content */}
            <View mt={40} >
              {/* formgroup EMAIL*/}
              <View>
                  <Text color={'#7C7C7C'} fontWeight={''}>Email</Text>
                  <Input unstyled 
                    placeholder='Enter Your Email'
                    placeholderTextColor={'#7C7C7C'}
                    borderBottomWidth={1}
                    py={8}
                    color={'#181725'}
                    borderBottomColor={'#E2E2E2'}
                    caretColor='orange'
                  />          
              </View>

               {/* formgroup Password*/}
               <View mt={25}>
                  <Text color={'#7C7C7C'}>Password</Text>
                  <View flexDirection='row'   borderBottomWidth={1} borderBottomColor={'#E2E2E2'}>
                    <Input unstyled 
                      placeholder='Enter Your Password'
                      placeholderTextColor={'#7C7C7C'}
                      py={8}
                      color={'#181725'}
                      caretColor='orange'
                      flex={1}
                      secureTextEntry={showPassword ? false : true}
                    /> 

                    <Button unstyled alignSelf='center'

                    onPress={()=>{
                      setShowPassword(!showPassword)
                    }}
                    >
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'  } size={25}   color="#7C7C7C" />
                    </Button>
                  </View>         
               </View>
                  
                {/* forgot password */}
               <Text mt={10} textAlign='right' color={'#181725'}>
                <Link href={'/(auth)'}>
                 Forgot Password?
                </Link>
               </Text>

               {/* login button */}
               <Button 
                                unstyled
                                animation={"100ms"}
                                paddingHorizontal={20}
                                height={55}
                                borderRadius={30}
                                mt={50}
                                justifyContent="center"
                                alignItems="center"
                                width={'100%'}
                                backgroundColor={'#53B175'}
                                color={'white'}
                               
                                // onPress={()=>{
                                //     router.push('/(auth)/login')
                                // }}
                                >
                                        Login
               </Button>

               <Text my={20} textAlign='center' color={'#828282'}>
               Or connect with social media
               </Text>

               {/* oaouth google */}
               <Button 
               enterStyle={{opacity:0}}
                                unstyled
                                animation={"100ms"}
                                paddingHorizontal={20}
                                height={55}
                                flexDirection='row'
                                borderRadius={30}
                                justifyContent="center"
                                alignItems="center"
                                width={'100%'}
                                backgroundColor={'#5383EC'}
                                color={'white'}
               >
                 <Ionicons name={'logo-google'} size={25}   color="#fff" />
                 <Text  textAlign='center'   color="#fff">Continue with Google</Text>                      
               </Button>

                {/* to signup */}
               <View mt={15} flexDirection={'row'} justifyContent='center' rowGap={5}  >
                <Text px={4} color={'#181725'}>
                  Don’t have an account? 
                </Text>
                <Link href={'/(auth)/signup'} style={{color:'#53B175',fontWeight:'bold'}}>
                  SignUp
                </Link>
               </View>

            </View>
            
          </View>

     </ScrollView>
    <StatusBar barStyle={'dark-content'}/>
   </>
  )
}

export default LoginPage