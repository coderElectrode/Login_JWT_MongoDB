import React, { useState } from 'react';
import Navbar from './Navbar'
import Footer from './footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

const Home = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate=useNavigate();

    const login = async () => {
       
        var data = { Email: email, Password: password }
        var url = "http://localhost:9080/auth/signin";
        var body = JSON.stringify(data);
        const customConfig = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        await axios.post(url, body, customConfig).then(data=>{
            if(data.data.status==400){
                setEmail('');
                setPassword('');
                return alert(data.data.message);
            }
            else{
                navigate('/galary');
            }
        })

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
                        <a href="#" className="btn-outline btn" >
                            Read More
                        </a>
                    </div>
                    <div className="showcase-form card">
                        <h2>LogIn</h2>
                        <div>
                            <div className="form-control">
                                <input type="text" placeholder="Eneter User Email " value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="Eneter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                            </div>
                            <button className='btn btn-primary' onClick={login}>SignIn</button>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    );
};

export default Home;

