export default function HeroCard({
  selectedHero,
  supe,
  handleToggle,
  setEditingHero,
  handleDeleteHero,
}) {
  return (
    <li
      className={`card ${selectedHero.includes(supe) ? " selected" : ""}`}
      key={supe.id}
      onClick={() => handleToggle(supe)}
    >
      <div className="hero-card_item">
        <img src={supe.img} alt={supe.name} />

        <div className="hero-card_info">
          <span className="hero-name">{supe.name}</span>
          <div>
            <span>PHY🗡:</span> {supe.phys}
          </div>
          <div>
            <span>MAG✨:</span> {supe.mag}
          </div>
          <div>
            <span>DEF🛡:</span> {supe.amor}
          </div>
          <div className="hero-card-button">
            <button
              onClick={() => setEditingHero({ ...supe })}
              className="edit-button"
            >
              <a href="#edit-stat">Sửa chỉ số</a>
            </button>
            <button
              className="delete-hero"
              onClick={() => handleDeleteHero(supe.id)}
            >
              Xóa
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}
