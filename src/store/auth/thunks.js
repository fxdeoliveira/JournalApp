import { singInGoogle } from "../../firebase/providers";
import { checkingCredentials, login } from "./authSlice"


export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials() );
    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result = await singInGoogle();
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result));
    }
}