import React,{useEffect, useState} from 'react'

// import component
import { ImageBackground,StatusBar } from 'react-native'
import { View,Text,ScrollView ,Image,H4, H3, Input, Button,Spinner} from 'tamagui'
import { Link } from 'expo-router'
import { Ionicons } from '@expo/vector-icons' 
import { router } from 'expo-router'


// import package
var validator = require('validator');
import AsyncStorage from '@react-native-async-storage/async-storage'
interface InterfaceValueInput {
  value:string,
  status:boolean,
  errorMsg:string
}

function LoginPage() {


  // state username
  let [usernameInput,setUsernameInput] = useState<InterfaceValueInput>({
    value:'',
    status:false,
    errorMsg:''
  })
  // state email
  let [emailInput,setEmailInput] = useState<InterfaceValueInput>({
    value:'',
    status:false,
    errorMsg:''
  })
  // state password
  let [passwordInput,setPasswordInput] = useState<InterfaceValueInput>({
    value:'',
    status:false,
    errorMsg:''
  })
  
  // state show and hidden password
  let [showPassword,setShowPassword] = useState(false)
  // check loading submit data
  let [checkLoading,setCheckLoading] = useState(false)

  // event handle value input
  const handleValueInput = (type:string,value:string) =>{
    // check jika get value username
    if(type === 'getValueUsername'){
      setUsernameInput({
        value:value,
        status:false,
        errorMsg:''
        })
      return
    }
    // check jika get value email
    else if(type === 'getValueEmail'){
      setEmailInput({
        value:value,
        status:false,
        errorMsg:''
        })
      return
    }
    //  get value password
    setPasswordInput({
      value:value,
      status:false,
      errorMsg:''
      })
  }

  // event handle submit
  const handleSubmit = async ()=>{

    // validasi jika username input ksong
    if(validator.isEmpty(usernameInput?.value.trim())){
      setUsernameInput(state => ({
        ...state,
        status:true,
        errorMsg:'username cannot be empty'
        }))
        return
    }
    // validasi jika email input ksong
    else if(validator.isEmpty(emailInput?.value.trim())){
      setEmailInput(state => ({
        ...state,
        status:true,
        errorMsg:'email cannot be empty'
        }))
        return
    }
    // validasi jika email input tidak sesuai format
    else if(!validator.isEmail(emailInput?.value.trim())){
      setEmailInput(state => ({
        ...state,
        status:true,
        errorMsg:'Incorrect email format'
        }))
        return
    }
    // validasi jika password input ksong
    else if(validator.isEmpty(passwordInput?.value.trim())){
      setPasswordInput(state => ({
        ...state,
        status:true,
        errorMsg:'email cannot be empty'
        }))
        return
    }

    setCheckLoading(true)
    try {
      await AsyncStorage.setItem('profile-user', JSON.stringify({
        usernameValue:usernameInput?.value,
        emailValue:emailInput?.value,
        passwordValue:passwordInput?.value
      }))
      // ARAHKAN KE HALAMAN DASHBOARD
      setTimeout(() => {
        router.replace('/(dashboard)')
        }, 1000);
    } catch(e) {
      // save error
      console.log('gagal login')
      return e
    }
    

  }

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
                Enter your username, email and password
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
                    borderBottomColor={usernameInput?.status === true ? '$red10Light' : '#E2E2E2'  }
                    caretColor='orange'
                    defaultValue={usernameInput?.value}
                    onChangeText={(value) =>{
                      handleValueInput('getValueUsername',value)
                    }}
                  />   

                    {/* jika error */}
                    {
                      usernameInput?.status === true &&<Text color={'$red10Light'} textTransform='capitalize'>{usernameInput?.errorMsg}</Text>    
                    }
              </View>

              {/* formgroup EMAIL*/}
              <View  mt={15}>
                  <Text color={'#7C7C7C'} fontWeight={''}>Email</Text>
                  <Input unstyled 
                    placeholder='Enter Your Email'
                    placeholderTextColor={'#7C7C7C'}
                    borderBottomWidth={1}
                    py={8}
                    color={'#181725'}
                    borderBottomColor={emailInput?.status === true ? '$red10Light' : '#E2E2E2'  }
                    caretColor='orange'
                    defaultValue={emailInput?.value}
                    onChangeText={(value) =>{
                      handleValueInput('getValueEmail',value)
                    }}
                  />          
                   {/* jika error */}
                   {
                      emailInput?.status === true &&<Text color={'$red10Light'} textTransform='capitalize'>{emailInput?.errorMsg}</Text>    
                    }
              </View>

               {/* formgroup Password*/}
               <View mt={15}>
                  <Text color={'#7C7C7C'}>Password</Text>
                  <View flexDirection='row'   borderBottomWidth={1} 
                    borderBottomColor={passwordInput?.status === true ? '$red10Light' : '#E2E2E2'  }
                  >
                    <Input unstyled 
                      placeholder='Enter Your Password'
                      placeholderTextColor={'#7C7C7C'}
                      py={8}
                      color={'#181725'}
                      caretColor='orange'
                      flex={1}
                      secureTextEntry={showPassword ? false : true}
                      defaultValue={passwordInput?.value}
                      onChangeText={(value) =>{
                        handleValueInput('getValuePassword',value)
                      }}
                    /> 

                    <Button unstyled alignSelf='center'

                    onPress={()=>{
                      setShowPassword(!showPassword)
                    }}
                    >
                    <Ionicons name={showPassword ? 'eye-off-outline' : 'eye-outline'  } size={25}   color="#7C7C7C" />
                    </Button>
                  </View>         
                   {/* jika error */}
                   {
                      passwordInput?.status === true &&<Text color={'$red10Light'} textTransform='capitalize'>{passwordInput?.errorMsg}</Text>    
                    }
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
                                onPress={handleSubmit}
                                disabled={checkLoading ? true :false}
                                >
                                  {
                                    checkLoading ?
                                    <Spinner size="small" color="$white1"/>
                                    :
                                    'Login'
                                  }
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