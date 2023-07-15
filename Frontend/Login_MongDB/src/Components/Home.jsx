import React from 'react';
import Navbar from './Navbar'
import Footer from './footer'
const Home = () => {
    const backend = () => {
        axios
            .post('https://localhost:9080/user', { name: 'Milind' })
            .then((req, res) => {
                console.log(res);
            });
    };
    return (
        <div className="Main">
             <Navbar/>
            <section className="showcase">
                <div className="container grid">
                    <div className="showcase-text">
                        <h1>LogIn with JWT token by Using MongoDB</h1>
                        <p>
                            Here you can upload file and access the files Uploaded by you using Your Login Credintial 
                        </p>
                        <a href="#" className="btn-outline btn" onClick={backend}>
                            Read More
                        </a>
                    </div>
                    <div className="showcase-form card">
                        <h2>LogIn</h2>
                        <form>
                            <div className="form-control">
                                <input type="text" placeholder="Eneter User Name" />
                            </div>
                            <div className="form-control">
                                <input type="password" placeholder="Eneter Password" />
                            </div>

                            {<input type="submit" value="send" className="btn btn-primary" />}
                        </form>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
};

export default Home;

