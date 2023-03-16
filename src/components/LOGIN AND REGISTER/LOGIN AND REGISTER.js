import React, { useState } from "react";

function Login(){
    return(
        <div className="container">
            <input type="text" placeholder="UserName"></input>
            <input type="password" placeholder="PassWord"></input>
            <select>
                <option>--Select--</option>
                <option>User</option>
                <option>Admin</option>
            </select>
            <button>Login</button>
            <h5>Forget Password ?</h5>
        </div>
    )
}
function Register(){
    return(
        <div className="container">
            <input type="email" placeholder="Email" required></input>
            <input type="text" placeholder="UserName" required></input>
            <input type="password" placeholder="Password" required></input>
            <input type="password" placeholder="ConformPassWord" required></input>
            <input type="text" placeholder="DepartMent" required></input>
            <button>Submit</button>
        </div>
    )
}
function Page(){
    const [state,setState] = useState(true)
    const ChangeLogin = () =>{
        setState(true)
    }
    const ChangeRegister = () =>{
        setState(false)
    }
    return(
        <div className="box">
            <button className="login" onClick={ChangeLogin}>Login</button>
            <button className="register" onClick={ChangeRegister}>Register</button>
            {state?<Login/>:<Register/>}
        </div>
    )
}
export default Page