import React, { useContext, useState } from 'react';

const LoginContext = React.createContext();
const LoginToggleContext = React.createContext();

export function useLoginContext() {
    return useContext(LoginContext);
}

export function useLoginToggleContext() {
    return useContext(LoginToggleContext);
}

export function LoginProvider({ children }) {

    const [ user, setUser ] = useState({
        name: 'Jorge',
        email: 'jorgeXXXXX@gmail.com'
      });

    function changeLogin() {
        if(user) {
            setUser(null);
        } else {
        setUser({
                name: 'Jorge',
                email: 'jorgeXXXXX@gmail.com'
            });
        }
    }

    return (
        <LoginContext.Provider value={ user }>
            <LoginToggleContext.Provider value={ changeLogin }>
                { children }
            </LoginToggleContext.Provider>
        </LoginContext.Provider>
    );

}