import { Linking, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { login } from "../services/AuthService"
import RedditLoginButton from "../components/ReditLoginButton"

export const Login = ()=>{
    const onLogin = async ()=>{
        const res = await login()
        Linking.openURL(res)
    }
    return(
        <View style={styles.container}>
            <RedditLoginButton onPress={onLogin}></RedditLoginButton>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  