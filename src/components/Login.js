import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";


function Login()  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const Navigate = useNavigate();
    

    useEffect(()=>{
        if (localStorage.getItem('user-info')) {
            Navigate("/")
        }
    },[]);
   
    async function login()
    {
        console.warn("data", email,password)
        let item={email, password}
        let result= await fetch('https://reqres.in/api/login', {
            method: 'POST',
            headers:{
                "Content-Length": "application/json"
            },
            body:JSON.stringify(item)
        });
        result = await result.json();
        localStorage.setItem('user-info', JSON.stringify(result));
        Navigate("/")
    }

    return (
        <>
                <Navbar />

        <div className="row">
           
                    <div className="card">
                        <div className="card-header">
                            <h2>User Login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>Email <span className="errmsg">*</span></label>
                                <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control"></input>
                            </div>
                            <div className="form-group">
                                <label>Password <span className="errmsg">*</span></label>
                                <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control"></input>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button onClick={login} className="btn btn-primary">Login</button>
                        </div>
                    </div>
               
        </div>
        </>
    )
}

export default Login