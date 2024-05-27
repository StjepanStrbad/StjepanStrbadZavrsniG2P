import Likovi from "./Likovi";

export default function ObjektiLikova() {
  const Lik = {
    Ime1: "Din Djarin (Glavni lik 'Mandalorian')",
    Glumac1: "Pedro Pascal",
    Pripadnost1: "Mandalorian",
    Ime2: "Armorer",
    Glumac2: "Emily Swallow",
    Pripadnost2: "Mandalorian",
    Ime3: "Kuill",
    Glumac3: "Nick Notte",
    Pripadnost3: "Ugnaught",
    Ime4: "Boba Fett",
    Glumac4: "Temuera Morrison",
    Pripadnost4: "Lovac na ucjene",
    Ime5: "Moff Gideon",
    Glumac5: "Giancarlo Esposito",
    Pripadnost5: "Carski ostatak",
    Ime6: "Cara Dune",
    Glumac6: "Gina Carano",
    Pripadnost6: "Maršal Nove Republike",
    Ime7: "Paz Vizsla",
    Glumac7: "Tait Fletcher",
    Pripadnost7: "Mandalorian",
    Ime8: "IG-11",
    Glumac8: "Taika Waititi",
    Pripadnost8: "Droid",
    Ime9: "Fennec Shand",
    Glumac9: "Ming-Na Wen",
    Pripadnost9: "Lovac na ucjene",
    Ime10: "Greef Karga",
    Glumac10: "Carl Weathers",
    Pripadnost10: "Vrhovni sudac",
    Ime11: "Cobb Vanth",
    Glumac11: "Timothy Olyphant",
    Pripadnost11: "Samoimenovani Maršal",
    Ime12: "Bo-Katan Kryze",
    Glumac12: "Katee Sackhoff",
    Pripadnost12: "Mandalorian",
    Ime13: "Ahsoka Tano",
    Glumac13: "Rosario Dawson",
    Pripadnost13: "Bivši Jedi",
    Ime14: "Dijete/Grogu",
    Glumac14: "David Acord",
    Pripadnost14: "Nedefiniran",
    Ime15: "Luke Skywalker",
    Glumac15: "Mark Hamill",
    Pripadnost15: "Jedi",
  };

  return (
    <div className="App">
      <Likovi props={Lik} />
    </div>
  );
}
