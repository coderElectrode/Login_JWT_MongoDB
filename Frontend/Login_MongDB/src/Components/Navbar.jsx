import React from 'react'
import { useNavigate } from 'react-router-dom'
import signUp from './signUp';

const Navbar = () => {
    const navigate=useNavigate();
    const home=()=>{
        navigate('/')
    }
    const feaure=()=>{
        navigate('/feature')
    }
    const contact=()=>{
        navigate('/contact')
    }

    const signUp=()=>{
        navigate('/Signup')
    }
  return (
    <div className="navbar">
                <div className="container flex">
                    <h1>FileDB</h1>
                    <nav>
                        <ul>
                            <li>
                                <a  onClick={home}>Home</a>
                            </li>
                            <li>
                                <a onClick={feaure}>Features</a>
                            </li>
                            <li>
                                <a onClick={contact}>Contact</a>
                            </li>
                            <li>
                                <a onClick={signUp}>SignUp</a>
                            </li>
                        </ul>
                    </nav>
                </div>
                
            </div>
  )
}

export default Navbar