import React from 'react';
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
      <div className="navbar">
        <div className="container flex">
          <h1>Milind</h1>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Features</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <section className="showcase">
        <div className="container grid">
          <div className="showcase-text">
            <h1>LogIn using Mongo And JWT</h1>
            <p>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
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
    </div>
  );
};

export default Home;

