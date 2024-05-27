import { Link } from "react-router-dom";

import Wars2 from "../wars2.png";
import Insta from "../insta.png";
import Yt from "../yt.png";
import Twit from "../twit.png";
import Fb from "../fb.png";
import SezJedan from "../sezona1.jpg";
import SezDva from "../sezona2.jpg";
import SezTri from "../sezona3.jpeg";
export default function Oseriji() {
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
      <div className="sadrzajOseriji">
        <center>
          <div className="sadrzaj prvi">
            "The Mandalorian", alternativno nazvan i kao "Star Wars: The
            Mandalorian", je televizijska serija iz žanra live-action space
            western iz Star Wars franšize, razvijena od strane Lucasfilma.
            Radnja serije se odvija otprilike pet godina nakon događaja iz filma
            "Star Wars: Episode VI - Povratak Jedija" iz 1983. godine, i
            ekskluzivno se prikazuje na Disneyjevoj streaming platformi,
            Disney+, koja je pokrenuta 12. studenog 2019. godine. Jon Favreau je
            kreator, pisac i izvršni producent serije. Redatelji uključuju Davea
            Filonija, Deborah Chow, Ricka Famuyiwu, Bryce Dallas Howard i Taiku
            Waititija. Epizode Prve Sezone su se prikazivale petkom u 08:01 UTC
            (03:01 AM EST), osim prve i sedme epizode te sezone.
          </div>
          <div className="sezoneSlike">
            <a href="https://en.wikipedia.org/wiki/The_Mandalorian_season_1">
              <img src={SezJedan}></img>
            </a>
            <a href="https://en.wikipedia.org/wiki/The_Mandalorian_season_2">
              <img src={SezDva}></img>
            </a>
            <a href="https://en.wikipedia.org/wiki/The_Mandalorian_season_3">
              <img src={SezTri}></img>
            </a>
          </div>
          <div className="sadrzaj drugi">
            Nakon završetka prve sezone, serija od osam epizoda iza kulisa
            nazvana "Disney Galerija: The Mandalorian" objavljena je počevši od
            svibnja 2020. godine. 30. listopada 2020. godine, premijerno je
            prikazana druga sezona na Disney+. Epizode Druge Sezone su se
            također prikazivale petkom u 08:01 UTC (03:01 AM EST). Nakon toga,
            objavljena su dva posebna izdanja "Disney Galerije: The Mandalorian"
            o stvaranju druge sezone. Serija "The Book of Boba Fett" premijerno
            je prikazana 29. prosinca 2021. godine, i prikazuje nekoliko likova
            iz "The Mandaloriana" nakon događaja druge sezone. Treća sezona je
            premijerno prikazana 1. ožujka 2023. godine, a četvrta sezona
            trenutno piše Jon Favreau.
          </div>
        </center>
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
