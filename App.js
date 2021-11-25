import React from 'react'
import { Login } from './components/Login';
import './App.css'
import { useSelector } from 'react-redux';
import { selectUser } from './Features/userSlice';
import Logout from './components/Logout';

const App = () => {
    const user = useSelector(selectUser);

    return (
        <div>
            {user?<Logout/>:<Login/>}
            <Login/>
        </div>
    )
};
export default App;
