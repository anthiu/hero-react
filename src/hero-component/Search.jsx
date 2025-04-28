export default function Search({ searchTerm, handleSearchHero }) {
  return (
    <div className="search-container">
      <img
        className="champion-icon"
        src="https://universe.leagueoflegends.com/esimages/content_type_icon_champion__3nwJQ.png"
        alt="image-champ"
      />
      <div>
        <input
          type="text"
          className="search-input"
          value={searchTerm}
          placeholder="Nhập tên anh hùng..."
          onChange={handleSearchHero}
        />
      </div>
    </div>
  );
}
