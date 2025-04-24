import React, { useState } from "react";

export default function Search({ searchTerm, handleSearchHero }) {
  const [isSearch, setIsSearch] = useState(false);

  const showSearch = () => {
    setIsSearch(!isSearch);
  };

  return (
    <div className="search-container">
      {isSearch && (
        <div>
          <input
            type="text"
            className="search-input"
            value={searchTerm}
            placeholder="Nhập tên anh hùng..."
            onChange={handleSearchHero}
          />
        </div>
      )}
      <button className="show-input-search" onClick={showSearch}>
        🔍
      </button>
    </div>
  );
}
