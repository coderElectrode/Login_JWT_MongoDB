import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import '../App.css'
import axios from 'axios'
const user_url = "http://localhost:9080/user"
//import { UseSelector, useSelector } from 'react-redux'
import { useSelector, useDispatch } from 'react-redux'


function galary() {
    const redux_tok = "";
    const redux_mail = '';
    const [userdata, getUserData] = useState([]);

    const redux_token = useSelector((state) => {
        const rt = state.USER;
        const redux_tok = rt[0].token;
        const redux_mail = rt[0].userdata.Email;
        console.log("RT", redux_mail,redux_tok);
    });

    const config = {
        headers: {
            authorization: redux_tok,
            email: redux_mail,

        }
    };

    useEffect(() => {
        debugger;
        axios.get(user_url, config).then(data => {
            //console.log("Axios Data:",data);
            getUserData(data);
        })
    }, []);


    return (
        <div>
            <Navbar />
            <div className='showroom_main'>
                <div className='file_upload_input'>
                    <input type="file" name="" id="" />
                    <button>Upload</button>

                </div>
                <div className='showroom'>

                </div>
            </div>
        </div>
    )
}

export default galary