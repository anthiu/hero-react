import HeroCard from "../hero-component/HeroCard";

export default function HeroList({
  filteredHeroes,
  selectedHero,
  handleToggle,
  setEditingHero,
  handleDeleteHero,
  setModalType,
  setIsShowModal,
}) {
  return (
    <div className="hero-list">
      {filteredHeroes.length > 0 ? (
        filteredHeroes.map((supe) => (
          <HeroCard
            key={supe.id}
            supe={supe}
            selectedHero={selectedHero}
            handleToggle={handleToggle}
            setEditingHero={setEditingHero}
            handleDeleteHero={handleDeleteHero}
            setModalType={setModalType}
            setIsShowModal={setIsShowModal}
          />
        ))
      ) : (
        <p className="not-found">Không có anh hùng</p>
      )}
    </div>
  );
}
