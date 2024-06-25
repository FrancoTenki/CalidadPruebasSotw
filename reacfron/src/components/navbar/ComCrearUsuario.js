import axios from "axios";
import {useState} from "react";
import React from 'react';
import { useNavigate } from "react-router-dom";

const URI='http://localhost:8000/Login/register'

const ComCrearUsuario = () => {
    const [Password, setPassword] = useState('');
    const [Username, SetUsername] = useState('');
    
    const navigete =useNavigate()


    const Login = async(e) =>{
        e.preventDefault();   
        try{
            const res=await axios.post(URI,{Username:Username,Password:Password,Role:1});
            console.log(res.data);
            navigete(`/Login`)

        }catch(error){
            console.error('Error logging in', error);
        }
    };

    return(
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
                <button className="custom-button" >Crear Usuario</button>
            </form>
        </div>  
    );
}

export default ComCrearUsuario