import axios from "axios"
import { base_url } from "./Constants"
import { generateString } from "../utils/Utils"
import { Alert } from "react-native"

export const login = async () => {
    try{
        const state = generateString()
        const params = {
            "client_id":"x0qK7Lc5t5GmPglG5r_8-g",
            "response_type":"token",
            "state":state,
            "redirect_uri":"myapp://initial/",
            "scope":"identity, edit, flair, history, modconfig, modflair, modlog, modposts, modwiki, mysubreddits, privatemessages, read, report, save, submit, subscribe, vote, wikiedit, wikiread"
        }
        const response = await axios.post(`${base_url}/api/v1/authorize`,null,{
            params:params
        })
        return response.request.responseURL
    }catch(error){
        Alert.alert(
            'Unable to redirect to Reddit',
            `${error}`,
            [{ text: 'OK', onPress: () => console.log('OK Pressed') }]
          );
    }
    return null
}