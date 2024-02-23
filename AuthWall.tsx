import { AuthProvider, useAuth } from "./AuthProvider";
import { AppWrapper } from "./AppWrapper";

export const AuthWall = ()=>{
    return(
        <AuthProvider>
            <AppWrapper></AppWrapper>
        </AuthProvider>
    )
}