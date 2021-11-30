import { useReducer, useState, useEffect } from 'react';
import { fetchAuthTokenValidation } from '@/apis/auth';
import { isTokenExist, removeItemFromLocalStorage } from '@/util';

import userAuthReducer from '@/reducer/userAuthReducer';

import { AUTH_TOKEN_LIST } from '@/constants/auth';

export default function useAuth() {
    const [userInfo, dispatch] = useReducer(userAuthReducer, {
        isSignIn: false,
    });

    const [authLoading, setAuthLoading] = useState(true);

    const isAuthTokenValidate = async () => {
        try {
            if (!isTokenExist(AUTH_TOKEN_LIST)) {
                setAuthLoading(false);
                removeItemFromLocalStorage(AUTH_TOKEN_LIST);
                return;
            }

            const { accessToken, refreshToken, decoded, error } =
                await fetchAuthTokenValidation();

            if (error) {
                setAuthLoading(false);
                dispatch({ type: 'SIGN_OUT' });
                return;
            }

            dispatch({
                type: 'SIGN_IN_SUCCESS',
                payload: { user: decoded, accessToken, refreshToken },
            });
            setAuthLoading(false);
        } catch (err) {
            throw new Error(err);
        }
    };

    useEffect(() => {
        isAuthTokenValidate();
    }, []);

    return { userInfo, authLoading, dispatch };
}
