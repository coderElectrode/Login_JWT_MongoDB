import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function signUp() {
    const [name, setName] = useState('');
    const [password, setPass] = useState('');
    const [email, setEmail] = useState('');
    const navigate=useNavigate();

    const signupreq = async () => {


        var data = { Name: name, Email: email, Password: password }
        var url = "http://localhost:9080/auth/signup";
        var body = JSON.stringify(data);
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        await axios.post(url, body, customConfig).then(data => {
            console.log(data);
            if (data.data.status == 400) {
                setName('');
                setPass('');
                setEmail('');
               return alert("User Already Exist Use different Email id")
            }
            navigate('/');
            
        })



        //    await fetch("http://localhost:9080/auth/signup",{
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
        // }).then((res)=>{
        //     console.log(res)
        //     setName('');
        //     setEmail('');
        //     setPass('');


        // })



        // var fdata=JSON.stringify(data);
        // customConfig = {
        //     headers: {
        //     'Content-Type': 'application/json'
        //     }
        // };
        // const result = axios.post('https://localhost:9080/auth/signup', fdata, customConfig);
        // if(result){
        //     console.log("Post Req. Send");
        // }
    }
    return (
        <div className="Main">
            <Navbar />
            <section className="showcase">
                <div className="container grid">
                    <div className="showcase-text">
                        <h1>LogIn with JWT token by Using MongoDB</h1>
                        <p>
                            Here you can upload file and access the files Uploaded by you using Your Login Credintial
                        </p>
                        <a href="#" className="btn-outline btn">
                            Read More
                        </a>
                    </div>
                    <div className="showcase-form card">
                        <h2>Register New User</h2>
                        <div>
                            <div className="form-control">
                                <input type="text" value={name} placeholder="Eneter Name" onChange={(e) => setName(e.target.value)} />
                            </div>
                            <div className="form-control">
                                <input type="email" value={email} placeholder="sample@sample.com" onChange={(e) => setEmail(e.target.value)} />
                            </div>

                            <div className="form-control">
                                <input type="password" value={password} placeholder="Eneter Password" onChange={(e) => setPass(e.target.value)} />
                            </div>

                            {/* <input type="button"  className="btn btn-primary" /> */}
                            <button className="btn btn-primary" onClick={signupreq}> Register</button>
                        </div>

                    </div>
                </div>
            </section>

        </div>
    )
}

export default signUp