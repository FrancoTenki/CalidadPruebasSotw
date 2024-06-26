import axios from "axios";
import {useEffect, useState} from "react";
import React from 'react';
import { PageMainProveedor } from "../Proveedor/PageMainProveedor.js";
import './login.css'
const URI='http://localhost:8000/Login/'
const URIActCarritoPlt='http://localhost:8000/Carrito/ActuCarrPlt'

function parseJwt (token) {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
  
    return JSON.parse(jsonPayload);
}

const LoginPrueba = () => {

    const [Password, setPassword] = useState('');
    const [Username, SetUsername] = useState('');
    const [loginSuccessful, setLoginSuccessful] = useState(false);

    useEffect(()=>{
        getloginSuccessful()    
    },[])
    const getloginSuccessful=async()=>{
        if((localStorage.getItem('token'))==null){
            setLoginSuccessful(false)
        }else{
            setLoginSuccessful(parseJwt(localStorage.getItem('token')).exp * 1000 > Date.now());
        }
    }
    const Login = async(e) =>{
        e.preventDefault();
        try{
            const res = await axios.post(URI, {Username:Username,Password:Password});
            console.log(res.data.token)
            if(res.data.token){
                localStorage.setItem('token',res.data.token)
                console.log(parseJwt(localStorage.getItem('token')))
                await axios.post(`${URIActCarritoPlt}`);
                
                getloginSuccessful()
                // setLoginSuccessful(parseJwt(localStorage.getItem('token').exp * 1000 > Date.now()))
            }else{
                getloginSuccessful()
            }
        }catch(error){

            if (error.status === 401) {
                console.log('Invalid username or password');                
            } else {
                console.log('An unexpected error occurred. Please try again later.');
            }
        }
    };
    return(
        <>{loginSuccessful? <PageMainProveedor/>:
            <div>
                <form onSubmit={Login}>
                    <label className="custom-label">Username:</label>
                    <input value={Username} onChange={(e) => SetUsername(e.target.value)}
                        placeholder="username"
                        className="custom-input"
                        type="text" />
                    <label className="custom-label">Password:</label>
                    <input value={Password} onChange={(e)=>setPassword(e.target.value)}
                        placeholder="password"
                        className="custom-input"
                        type="password" />
                    <button className="custom-button" >Login</button>
                </form> 
            </div>
        }</>
    );
}

export default LoginPrueba;