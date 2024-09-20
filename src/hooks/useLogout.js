import React, {useState} from 'react'
import { useAuthContext } from '../context/authContext';
import { account } from '../../webServices/conn';
import { toast } from 'react-hot-toast';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
        
        const logout = async() => {
            setLoading(true);
            try {
                await account.deleteSession('current');
                localStorage.removeItem("Authdata");
                setAuthUser(null);  
            } catch (error) {
                toast.error(error.message)
                
            }
            finally{
                setLoading(false);
            }
        }
        return {loading, logout};
}

export default useLogout;