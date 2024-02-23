import AsyncStorage from "@react-native-async-storage/async-storage";
import * as CryptoJS from 'crypto-js';
import * as utf8 from 'utf8';
import * as forge from 'node-forge';

export const generateString = () => {
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const length = 8
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

export const aesdecrypt = (text: string, key: string) => {
    key = CryptoJS.MD5(utf8.encode(key)).toString(CryptoJS.enc.Hex);
  
    const cipher = forge.cipher.createDecipher(
      'AES-CBC',
      forge.util.createBuffer(key),
    );
  
    const iv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
    cipher.start({ iv: iv });
  
    text = forge.util.decode64(text);
  
    cipher.update(forge.util.createBuffer(text));
  
    cipher.finish();
  
    const decrypted = cipher.output;
  
    return decrypted.data;
  }

  export const aesencrypt = (text: string, key: string) => {
    key = CryptoJS.MD5(utf8.encode(key)).toString(CryptoJS.enc.Hex);
  
    const cipher = forge.cipher.createCipher(
      'AES-CBC',
      forge.util.createBuffer(key),
    );
  
    const iv = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  
    cipher.start({ iv: iv });
  
    cipher.update(forge.util.createBuffer(text));
  
    cipher.finish();
  
    const encrypted = cipher.output;
  
    return forge.util.encode64(encrypted.getBytes());
  }

export const setUserData = async (token:string)=>{
  try {
    const encryptLoginData = aesencrypt(JSON.stringify(token), 'loginDetails')
    await AsyncStorage.setItem('loginDetails', encryptLoginData);
  } catch (e) {
    console.log(e);
  }
}

export const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem('loginDetails');
      if (userData !== null) {
        const loginDecryptData = aesdecrypt(userData, 'loginDetails');
        return JSON.parse(loginDecryptData);
      } else {
        return null;
      }
    } catch (e) {
      console.log(e);
    }
  };

  export const getSearchParamFromURL = (url:string, param:string) => {
    const include = url.includes(param)
    if (!include) return null
    const params = url.split(/([&,?,=,#])/)
    const index = params.indexOf(param)
    const value = params[index + 2]
    return value
  }
export const removeData = async ()=>{
   await AsyncStorage.removeItem('loginDetails')
}
