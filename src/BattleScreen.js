import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { loadHero } from "./local-storage/localHero";
import "./BattleScreen.css";

export default function BattleScreen() {
  const { ids } = useParams();
  const [hero1, setHero1] = useState(null);
  const [hero2, setHero2] = useState(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const [id1, id2] = ids.split(",").map((id) => parseInt(id));
    const allHeroes = loadHero();
    const h1 = allHeroes.find((h) => h.id === id1);
    const h2 = allHeroes.find((h) => h.id === id2);
    setHero1(h1);
    setHero2(h2);
    setAnimate(true); // trigger animation
    const timer = setTimeout(() => setAnimate(false), 1000);
    return () => clearTimeout(timer);
  }, [ids]);

  const getPower = (hero) => hero.phys + hero.mag + hero.amor;

  const getBattleResult = () => {
    if (!hero1 || !hero2) return "";

    const power1 = getPower(hero1);
    const power2 = getPower(hero2);
    if (power1 > power2) return `${hero1.name} thắng!`;
    if (power1 < power2) return `${hero2.name} thắng!`;
    return "Hòa!";
  };

  if (!hero1 || !hero2) return <p>Đang tải anh hùng...</p>;

  return (
    <div className={`battle-screen ${animate ? "screen-shake" : ""}`}>
      <h1 className="battle-title">⚔️ Trận đấu ⚔️</h1>
      <div className="battle-container">
        <div className={`card-hero ${animate ? "hit-flash" : ""}`}>
          <h1 style={{ color: "red" }}>{hero1.name}</h1>
          <img src={hero1.img} alt={hero1.name} />
          <div className="hero-stats">
            <p>PHY🗡: {hero1.phys}</p>
            <p>MAG✨: {hero1.mag}</p>
            <p>DEF🛡: {hero1.amor}</p>
          </div>
        </div>
        <div className="vs"></div>
        <div className={`card-hero ${animate ? "hit-flash" : ""}`}>
          <h1 style={{ color: "blue" }}>{hero2.name}</h1>
          <img src={hero2.img} alt={hero2.name} />
          <p>PHY🗡: {hero2.phys}</p>
          <p>MAG✨: {hero2.mag}</p>
          <p>DEF🛡: {hero2.amor}</p>
        </div>
      </div>
      <div className="battle-result">
        <h2>
          Kết quả trận đấu:{" "}
          <span className="winner-hero">{getBattleResult()}</span>
        </h2>
      </div>
      <button onClick={() => window.history.back()}>
        Quay lại chọn anh hùng
      </button>
    </div>
  );
}
