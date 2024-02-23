import { Linking } from "react-native";

export const linking={
    prefixes: ['myapp://'],
    config: {
      screens: {
        Initial:{
          path:"initial",
        },
        Details:{
          path:"details"
        }
      }
    },
  }