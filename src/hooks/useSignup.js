import React, { useState } from 'react';
import { useAuthContext } from '../context/authContext';
import { account, ID } from '../../webServices/conn';
import useLogin from './useLogin';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const useSignup = () => {
    const [loading, setLoading] = useState(false);
    const { setAuthUser } = useAuthContext();
    const { login } = useLogin();
    const navigate = useNavigate();

    const signup = async (email, password, name) => {
        try {
            if (!email || !password || !name) {
                toast.error('All fields are required');
                return;
            }
            setLoading(true);
            await account.create(ID.unique(), email, password, name);
            await login(email, password);
            

        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    return { signup, loading };
};

export default useSignup;