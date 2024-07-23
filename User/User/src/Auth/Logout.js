import React ,{useState} from 'react'
import {  useNavigate } from 'react-router-dom';

function Logout() {
    const [token, setToken] = useState(localStorage.getItem('token') || '');
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token'); // Remove token from localStorage
        setToken(''); // Clear token state
        navigate('/login'); // Redirect to login page or wherever appropriate
      };
  return (
    <>
    
    {token && <button onClick={handleLogout}>Logout</button>}

    </>
  )
}

export default Logout