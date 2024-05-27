import { Link } from "react-router-dom";
import Wars2 from "../wars2.png";
import Insta from "../insta.png";
import Yt from "../yt.png";
import Twit from "../twit.png";
import Fb from "../fb.png";
import Lik1 from "../lik1.jpeg";
import Lik2 from "../lik2.jpeg";
import Lik3 from "../lik3.jpeg";
import Lik4 from "../lik4.jpeg";
import Lik5 from "../lik5.jpeg";
import Lik6 from "../lik6.jpeg";
import Lik7 from "../lik7.jpeg";
import Lik8 from "../lik8.jpeg";
import Lik9 from "../lik9.jpg";
import Lik10 from "../lik10.jpeg";
import Lik11 from "../lik11.jpeg";
import Lik12 from "../lik12.jpeg";
import Lik13 from "../lik13.jpeg";
import Lik14 from "../lik14.jpeg";
import Lik15 from "../lik15.jpeg";
export default function Likovi({ props }) {
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
      <div className="footer">
        <div className="likoviSadrzaj">
          <div className="likoviWrapper">
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik1} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime1}</li>
                  <li>Glumac: {props.Glumac1}</li>
                  <li>Pripadnost: {props.Pripadnost1}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik2} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime2}</li>
                  <li>Glumac: {props.Glumac2}</li>
                  <li>Pripadnost: {props.Pripadnost2}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik3} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime3}</li>
                  <li>Glumac: {props.Glumac3}</li>
                  <li>Pripadnost: {props.Pripadnost3}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik4} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime4}</li>
                  <li>Glumac: {props.Glumac4}</li>
                  <li>Pripadnost: {props.Pripadnost4}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik5} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime5}</li>
                  <li>Glumac: {props.Glumac5}</li>
                  <li>Pripadnost: {props.Pripadnost5}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik6} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime6}</li>
                  <li>Glumac: {props.Glumac6}</li>
                  <li>Pripadnost: {props.Pripadnost6}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik7} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime7}</li>
                  <li>Glumac: {props.Glumac7}</li>
                  <li>Pripadnost: {props.Pripadnost7}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik8} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime8}</li>
                  <li>Glumac: {props.Glumac8}</li>
                  <li>Pripadnost: {props.Pripadnost8}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik9} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime9}</li>
                  <li>Glumac: {props.Glumac9}</li>
                  <li>Pripadnost: {props.Pripadnost9}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik10} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime10}</li>
                  <li>Glumac: {props.Glumac10}</li>
                  <li>Pripadnost: {props.Pripadnost10}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik11} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime11}</li>
                  <li>Glumac: {props.Glumac11}</li>
                  <li>Pripadnost: {props.Pripadnost11}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik12} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime12}</li>
                  <li>Glumac: {props.Glumac12}</li>
                  <li>Pripadnost: {props.Pripadnost12}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik13} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime13}</li>
                  <li>Glumac: {props.Glumac13}</li>
                  <li>Pripadnost: {props.Pripadnost13}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik14} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime14}</li>
                  <li>Glumac: {props.Glumac14}</li>
                  <li>Pripadnost: {props.Pripadnost14}</li>
                </ul>
              </div>
            </div>
            <div className="likoviItem">
              <div className="likSlika">
                <img src={Lik15} />
              </div>
              <div className="likOpis">
                <ul>
                  <li>Ime: {props.Ime15}</li>
                  <li>Glumac: {props.Glumac15}</li>
                  <li>Pripadnost: {props.Pripadnost15}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
