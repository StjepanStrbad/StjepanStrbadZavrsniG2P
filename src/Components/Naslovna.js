import { Link } from "react-router-dom";
import Mando from "../mando2.jpeg";
import Wars2 from "../wars2.png";
import Insta from "../insta.png";
import Yt from "../yt.png";
import Twit from "../twit.png";
import Fb from "../fb.png";
export default function Naslovna() {
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
      <div className="hero">
        <img src={Mando}></img>
        <div className="hero-text">
          <h1>RATOVI ZVIJEZDA</h1>
          <h2>MANDALORIAN</h2>
          <p>
            Nakon pada Galaktičnog Carstva, usamljeni Mandalorian
            <br /> putuje kroz bezakonitu galaksiju sa svojim pronađenim
            <br />
            djetetom, Groguom.
          </p>

          <a
            href="https://www.disneyplus.com/en-hr/series/the-mandalorian/3jLIGMDYINqD"
            className="btn"
          >
            GLEDAJ NA DISNEY+
          </a>
          <a href="https://www.youtube.com/watch?v=aOC8E8z_ifw" className="btn">
            POGLEDAJ TRAILER
          </a>
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
