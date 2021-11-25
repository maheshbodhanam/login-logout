import React from 'react'
import { selectUser } from '../Features/userSlice';
import './Logout.css'
import { lagout } from '../Features/userSlice';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';



const Logout = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const logout = (e) => {  
        dispatch(logout());
    };
    return (
        <form className="logout">
           <h2>welcome<span className="user__name">{user.name}</span></h2>
           <br/>
           <br/>
           <button className="logout__button" onClick={(e)=>lagout(e)}>Logout</button> 
        </form>
    );
};
export  default Logout ;