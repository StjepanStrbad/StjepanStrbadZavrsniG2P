import { Link } from "react-router-dom";
import Wars2 from "../wars2.png";
import Insta from "../insta.png";
import Yt from "../yt.png";
import Twit from "../twit.png";
import Fb from "../fb.png";
import Dis from "../dis.PNG";
import Dis2 from "../dis2.png";
export default function Disney() {
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
      <div className="disneySadrzaj">
        <div className="disneyWrapper">
          <h1>Što je Disney Plus?</h1>
          <p>
            Disney Plus (stilizirano kao Disney+) je usluga za streaming video
            sadržaja na zahtjev koju je pokrenula{" "}
            <a href="https://thewaltdisneycompany.com/">
              The Walt Disney Company
            </a>
            . Lansirana je u studenom 2019. godine, a dostupna je u mnogim
            zemljama širom svijeta. Disney Plus pruža širok raspon sadržaja,
            uključujući filmove, serije, dokumentarce i kratke filmove iz bogate
            Disneyjeve arhive, kao i sadržaje iz brojnih drugih brandova koji su
            u vlasništvu Disneyja.
          </p>

          <img src={Dis} />
          <hr />
          <h2>Što sve nudi Disney Plus?</h2>
          <p>Disney Plus nudi impresivan katalog sadržaja koji uključuje:</p>
          <ul>
            <li>
              Disneyjeve klasike: Animirani filmovi kao što su "Snježno
              kraljevstvo", "Kralj lavova", "Aladin" i mnogi drugi.
            </li>
            <li>
              Pixar filmove: Popularni naslovi poput "Priča o igračkama",
              "Potraga za Nemom", "Coco" i još mnogo toga.
            </li>
            <li>
              Marvelov univerzum: Svi filmovi iz Marvelovog filmskog svemira,
              kao i originalne serije kao što su "WandaVision", "The Falcon and
              the Winter Soldier" i "Loki".
            </li>
            <li>
              Star Wars: Sve filmove iz serijala "Star Wars", kao i originalne
              serije poput "The Mandalorian", "The Book of Boba Fett" i
              nadolazeće serije kao što su "Obi-Wan Kenobi".
            </li>
            <li>
              National Geographic: Dokumentarci i serije koje pružaju uvid u
              svijet znanosti, prirode, povijesti i kulture.
            </li>
            <li>
              Ekskluzivni sadržaji: Disney Plus također nudi ekskluzivne serije
              i filmove koje ne možete pronaći nigdje drugdje, poput "Hamilton",
              "Muppets Now" i mnogih drugih.
            </li>
          </ul>

          <img src={Dis2} />
          <hr />
          <h2>Povezanost sa Star Warsom</h2>
          <p>
            Disney Plus je postao središnje mjesto za sve obožavatelje "Star
            Wars" franšize. Nakon što je Disney preuzeo{" "}
            <a href="https://www.lucasfilm.com/">Lucasfilm</a> 2012. godine,
            krenulo je novo razdoblje produkcije sadržaja vezanih uz "Star
            Wars". Na Disney Plus platformi, ljubitelji "Star Warsa" mogu
            uživati u cijelom nizu sadržaja:
          </p>
          <ul>
            <li>
              Filmovi: Sve epizode iz originalne trilogije, prequel trilogije,
              sequel trilogije, kao i spin-off filmovi poput "Rogue One" i
              "Solo: A Star Wars Story".
            </li>
            <li>
              Originalne serije: Najpoznatija među njima je "The Mandalorian",
              prva live-action serija iz "Star Wars" univerzuma koja je postigla
              ogroman uspjeh i postala kulturni fenomen. Tu su i druge serije
              kao što su "The Book of Boba Fett", "Ahsoka", "Andor" i mnoge
              nadolazeće serije koje proširuju svemir "Star Warsa".
            </li>
            <li>
              Animirani sadržaji: Popularne serije kao što su "Star Wars: The
              Clone Wars", "Star Wars Rebels" i "Star Wars: The Bad Batch"
              također su dostupne na Disney Plusu.
            </li>
          </ul>
          <a href="https://www.disneyplus.com/en-hr/brand/disney">
            <div className="btnDis">Istraži Disney+</div>
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
