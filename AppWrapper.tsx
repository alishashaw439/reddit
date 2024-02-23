import SplashScreen from "react-native-splash-screen";
import App from "./App";
import { useAuth } from "./AuthProvider";
import Loader from "./Loader";
import { getSearchParamFromURL,setUserData } from "./utils/Utils";
import { useEffect, useState } from "react";
import { Alert, Linking } from "react-native";

export const AppWrapper = () => {
  const [isLoading, setLoader] = useState(true);
  const { signIn } = useAuth()

  useEffect(() => {
    const handleInitialURL = async () => {
      const url = await Linking.getInitialURL();
      if (url) {
        const accessToken = getSearchParamFromURL(url, "access_token")
        if (accessToken) {
          await setUserData(accessToken);
          signIn()
        }
      } else {
      }
    };
    handleInitialURL().finally(() => {
      setLoader(false);
      SplashScreen.hide();
    });
  }, []);

  const handleRedirect = async (event: any) => {
    const url = event.url;
    if (url.includes("error")) {
      const errorMessage = getSearchParamFromURL(url, "error")
      Alert.alert(
        'Unable to Authenticate',
        `${errorMessage}`,
        [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
      );
    }
    const access_token = getSearchParamFromURL(url, "access_token")
    if (access_token) {
      await setUserData(access_token);
      signIn()
    }
  };
  useEffect(() => {
    Linking.addEventListener("url", handleRedirect);
    return () => {
      Linking.removeAllListeners("url");
    };
  }, []);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <App />
  );
};