import React,{useState} from 'react'

// import component
import { ImageBackground,StatusBar } from 'react-native'
import { View,Text,ScrollView ,Image,H4, H3, Input, Button} from 'tamagui'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons' 

function SignUpPage() {
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
                <H3 fontWeight={'bold'} >SignUp</H3>
                <Text mt={3} color={'#7C7C7C'}>
                Enter your credentials to continue
                </Text>
              </View>
  
              {/* form content */}
              <View mt={40} >
                 {/* formgroup username*/}
                 <View>
                    <Text color={'#7C7C7C'} fontWeight={''}>Username</Text>
                    <Input unstyled 
                      placeholder='Enter Your Username'
                      placeholderTextColor={'#7C7C7C'}
                      borderBottomWidth={1}
                      py={8}
                      color={'#181725'}
                      borderBottomColor={'#E2E2E2'}
                      caretColor='orange'
                    />          
                 </View>

                {/* formgroup EMAIL*/}
                <View mt={25}>
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
                 <View mt={5} columnGap={6} flexDirection='row' flexWrap='wrap'>
                    <Text color={'#7C7C7C'} fontSize={13}>By continuing you agree to our</Text>
                    <Text color={'#53B175'} fontSize={13}>Terms of Service</Text>
                    <Text color={'#7C7C7C'} fontSize={13}>and</Text>
                    <Text color={'#53B175'} fontSize={13}>Privacy Policy</Text>
                 </View>
  
                 {/* register button */}
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
                                          Register
                 </Button>
  
                  {/* to signup */}
                 <View mt={15} flexDirection={'row'} justifyContent='center' rowGap={5}  >
                  <Text px={4} color={'#181725'}>
                    have an account? 
                  </Text>
                  <Link href={'/(auth)/login'} style={{color:'#53B175',fontWeight:'bold'}}>
                    Login
                  </Link>
                 </View>
  
              </View>
              
            </View>
  
       </ScrollView>
      <StatusBar barStyle={'dark-content'}/>
     </>
    )
  }
  
  export default SignUpPage