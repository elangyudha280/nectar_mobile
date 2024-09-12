import { config } from '@tamagui/config/v3'
import { createTamagui } from 'tamagui' // or '@tamagui/core'

const appConfig = createTamagui({
  ...config,
  media: {
    xs: { maxWidth: 600 },
    sm: { minWidth: 600 },
    md: { minWidth: 900 },
    lg: { minWidth: 1200 },
    xl: { minWidth: 1500 },
  },
})

export type AppConfig = typeof appConfig

declare module 'tamagui' {
  // or '@tamagui/core'
  // overrides TamaguiCustomConfig so your custom types
  // work everywhere you import `tamagui`
  interface TamaguiCustomConfig extends AppConfig {}
}

export default appConfig
