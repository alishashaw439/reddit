import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { Home } from "./screens/Home"
import { Login } from "./screens/Login"
import { Details } from "./screens/Details"

const RootStack = createNativeStackNavigator()
export const AppStack = ()=>{
    return(
        <RootStack.Navigator
        screenOptions={{
            headerShown:false
        }}
        >
            <RootStack.Screen name="Initial" component={Home}/>
            <RootStack.Screen name="Details" component={Details}/>
        </RootStack.Navigator>
    )
}

export const AuthStack = ()=>{
    return(
        <RootStack.Navigator
        screenOptions={{
            headerShown:false
        }}>
            <RootStack.Screen name="Initial" component={Login}/>
        </RootStack.Navigator>
    )
}