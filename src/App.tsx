import React from 'react';
import {Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./ui/navbar/Navbar";
import {Login} from "./ui/login/Login";
import {Profile} from "./ui/profile/Profile";
import {PasswordNew} from "./ui/registration/password/PasswordNew";
import {SuperComponents} from "./ui/components/superComponents/SuperComponents";
import {Regist} from "./ui/registration/Regist";
import {PasswordRecovery} from "./ui/registration/password/PasswordRecovery";

function App() {debugger

    return (
        <div>
            <Navbar/>

            <Routes>
                <Route path='/' element={<div>Empty</div>} />
                <Route path='/login' element={<Login/>} />
                <Route path='/profile' element={<Profile/>} />
                <Route path='/regist' element={<Regist/>} />
                <Route path='/passwordRecovery' element={<PasswordRecovery/>} />
                <Route path='/passwordNew' element={<PasswordNew/>} />
                <Route path='/superComponents' element={<SuperComponents/>} />
            </Routes>
        </div>
    );
}

export default App;
