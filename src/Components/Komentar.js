import Wars2 from "../wars2.png";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import Insta from "../insta.png";
import Yt from "../yt.png";
import Twit from "../twit.png";
import Fb from "../fb.png";
export class Komentar extends Component {
  state = {
    ime: "",
    email: "",
    komentar: "",
    comments: [], // State to store submitted comments
  };

  onSubmit = (e) => {
    e.preventDefault();
    const { ime, email, komentar } = this.state;
    if (ime && email && komentar) {
      const newComment = { ime, email, komentar };
      this.setState((prevState) => ({
        comments: [...prevState.comments, newComment],
        ime: "",
        email: "",
        komentar: "",
      }));
    }
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <img src={Wars2}></img>
          <nav>
            <ul>
              <li>
                <Link to="/">Početna</Link>
              </li>
              <li>
                <Link to="/oseriji">O seriji</Link>
              </li>
              <li>
                <Link to="/likovi">Likovi</Link>
              </li>
              <li>
                <Link to="/disney">Disney+</Link>
              </li>
              <li>
                <Link to="/komentar">Komentar</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className="formaDiv">
          <form onSubmit={this.onSubmit} className="forma">
            <input
              type="text"
              placeholder="Ime"
              value={this.state.ime}
              onChange={(e) => this.setState({ ime: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <textarea
              placeholder="Komentar"
              value={this.state.komentar}
              onChange={(e) => this.setState({ komentar: e.target.value })}
            />
            <button type="submit">Postavi</button>
          </form>
          <div className="komentari">
            <h2>Komentari:</h2>
            {this.state.comments.length > 0 ? (
              <ul>
                {this.state.comments.map((comment, index) => (
                  <li key={index}>
                    <p className="user">
                      <strong>{comment.ime}</strong> ({comment.email})
                    </p>
                    <p className="koment">{comment.komentar}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>Nema komentara.</p>
            )}
          </div>
        </div>
        <div className="footer">
          <div className="Slike">
            <a href="https://www.instagram.com/starwars/">
              <img src={Insta}></img>
            </a>
            <a href="https://www.youtube.com/@StarWars">
              <img src={Yt}></img>
            </a>
            <a herf="https://x.com/starwars">
              <img src={Twit}></img>
            </a>
            <a href="https://hr-hr.facebook.com/StarWars/">
              <img src={Fb}></img>{" "}
            </a>
          </div>
          <div className="imeMoje">Stjepan Strbad</div>
          <div className="kopirajt">
            Copyright© 2024. RATOVI ZVIJEZDA: MANDALORIAN Sva prava pridržana.
          </div>
        </div>
      </div>
    );
  }
}

export default Komentar;
