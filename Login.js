import React from 'react'
import FaceIcon from '@mui/icons-material/Face';
import { useState } from 'react';
import './Login.css'
import { login } from '../Features/userSlice';
import { useDispatch } from 'react-redux';

export const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();

    const handlerSubmit = (e) => {
        e.preventDefault();

        dispatch(login({
            name:name,
            email:email,
            password:password,
            loggedIn:true,
        }))
    }
    return (
        <div className="login">
            <form className="login__form" onSubmit={(e)=> handlerSubmit(e)}>
                <h1>Login Here<FaceIcon/> </h1>
                <input
                type="name" 
                placeholder="Name"
                value={name}
                onChange={(e)=> setName(e.target.value)}/>
                <br/><br/>
                
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}/>
                <br/><br/>
                
                <input 
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}/>
                <br/><br/>
                <button type="submit "className="submit__btn">submit</button>

            </form>
            
        </div>
    )
};
