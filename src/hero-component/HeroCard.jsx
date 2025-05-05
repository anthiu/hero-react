export default function HeroCard({
  selectedHero,
  supe,
  handleToggle,
  setEditingHero,
  handleDeleteHero,
  setModalType,
  setIsShowModal,
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
          <div className="hero-card-stats">
            <div className="hero-card-stats-item">
              <span>PHY🗡:</span> {supe.phys}
            </div>
            <div className="hero-card-stats-item">
              <span>MAG✨:</span> {supe.mag}
            </div>
            <div className="hero-card-stats-item">
              <span>DEF🛡:</span> {supe.amor}
            </div>
          </div>
          <div className="hero-card-button">
            <button
              onClick={() => {
                setEditingHero({ ...supe });
                setModalType("edit");
                setIsShowModal(true);
              }}
              className="edit-button"
            >
              Sửa chỉ số
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
