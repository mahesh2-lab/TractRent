import React, { useState } from 'react'
import { useAuthContext } from '../context/authContext'
import { account } from '../../webServices/conn'
import toast from 'react-hot-toast'

const useLogin = () => {
    const [loading, setloading] = useState(false)
    const {setAuthUser} = useAuthContext()


    const login = async (email, password) => {
        try {
            if (!email || !password) {
                toast.error('All fields are required');
                return;
            }
            setloading(true)
            await account.createEmailPasswordSession(email, password);
            const authUser = await account.get();


            localStorage.setItem("Authdata", JSON.stringify(authUser));
            setAuthUser(authUser);
            
        } catch (error) {
           toast.error(error.message)
        }
        finally {
            setloading(false)
        }

    }
    return {login, loading}
}

export default useLogin