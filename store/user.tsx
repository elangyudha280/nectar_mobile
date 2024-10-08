import AsyncStorage from '@react-native-async-storage/async-storage';

import { create } from 'zustand';
import { persist } from "zustand/middleware"

export interface interfaceUseUser {
    username:string,
    email:string,
    password:string,
    setDataUser(data:object) : void
} 

export const useUser = create(persist(
    (set, get) : interfaceUseUser => ({
      username:'',
      email:'',
      password:'',
      setDataUser(data){
        console.log(data)
      }
    }),
    {
      name: "profile-user", // unique name
      getStorage: () => AsyncStorage, // Add this here!
    }
  ))