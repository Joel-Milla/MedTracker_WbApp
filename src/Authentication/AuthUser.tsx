import { createContext, useEffect, useState } from "react";
import { auth } from "../state/FirebaseConfig/config";

const AuthContext = createContext<any>(null);

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {  
    const [currentUser, setCurrentUser] = useState<any>(null);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setCurrentUser(user);
        });

        return unsubscribe;
    }, []);

    return (
        <AuthContext.Provider value={{ currentUser }}>
        {children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthProvider };
