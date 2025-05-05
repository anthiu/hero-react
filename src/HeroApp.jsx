import React, { useEffect, useRef, useState } from "react";
import { loadHero, saveHero } from "./local-storage/localHero.jsx";
import { useNavigate } from "react-router-dom";
import CreateContainer from "./hero-component/CreateContainer.jsx";
// import EditContainer from "./hero-component/EditContainer.jsx";
import Search from "./hero-component/Search.jsx";
import HeroList from "./hero-component/HeroList.jsx";
import Modal from "./hero-component/Modal.jsx";

export default function HeroCard() {
  const [hero, setHero] = useState([
    {
      id: 1,
      name: "Sóc",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Kennen_25.jpg",
      phys: 100,
      mag: 50,
      amor: 30,
    },
    {
      id: 2,
      name: "Cá",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Fizz_3.jpg",
      phys: 80,
      mag: 20,
      amor: 40,
    },
    {
      id: 3,
      name: "Gà",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Azir_0.jpg",
      phys: 60,
      mag: 70,
      amor: 20,
    },
    {
      id: 4,
      name: "Chó",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Nasus_0.jpg",
      phys: 50,
      mag: 80,
      amor: 10,
    },
    {
      id: 5,
      name: "Lợn",
      img: "https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sejuani_8.jpg",
      phys: 90,
      mag: 60,
      amor: 100,
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [phys, setPhys] = useState("");
  const [mag, setMag] = useState("");
  const [amor, setAmor] = useState("");
  const [editingHero, setEditingHero] = useState(null);
  const [isShowCreate, setIsShowCreate] = useState(false);
  const [selectedHero, setSelectedHero] = useState([]);
  const navigate = useNavigate();
  const stringiFields = ["name", "img"];
  const battleButtonRef = useRef(null);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalType, setModalType] = useState("");
  const [popupMessage, setPopupMessage] = useState("");

  useEffect(() => {
    if (selectedHero.length === 2 && battleButtonRef.current) {
      battleButtonRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [selectedHero]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditingHero((prev) => ({
      ...prev,
      [name]: stringiFields.includes(name) ? value : Number(value),
    }));
  };

  const handleToggle = (supe) => {
    if (selectedHero.includes(supe)) {
      setSelectedHero(selectedHero.filter((hero) => hero.id !== supe.id));
    } else if (selectedHero.length < 2) {
      setSelectedHero([...selectedHero, supe]);
    }
  };

  const gotoBattle = () => {
    if (selectedHero.length === 2) {
      const ids = selectedHero.map((hero) => hero.id).join(",");
      navigate(`/battle/${ids}`);
    }
  };

  const getRandomHeroes = () => {
    const randomHeroes = [...hero].sort(() => 0.5 - Math.random());
    const ids = [randomHeroes[0].id, randomHeroes[1].id].join(",");
    navigate(`/battle/${ids}`);
  };

  const handleShowCreate = () => {
    setModalType("create");
    setIsShowModal(true);
  };

  const handleDeleteHero = (id) => {
    const updatedHero = hero
      .filter((h) => h.id !== id)
      .map((h, index) => ({
        ...h,
        id: index + 1,
      }));
    setHero(updatedHero);
    saveHero(updatedHero);
  };

  const handleSearchHero = (e) => {
    setSearchTerm(e.target.value);
  };

  const saveChangesHero = (e) => {
    setHero(
      hero.map((supe) => (supe.id === editingHero.id ? editingHero : supe))
    );
    setEditingHero(null);
    saveHero(hero);
    setPopupMessage("Cập nhật thành công");
    setTimeout(() => {
      setPopupMessage("");
    }, 2000);
  };

  useEffect(() => {
    const data = loadHero();
    if (data.length > 0) {
      setHero(data);
    }
  }, []);

  useEffect(() => {
    saveHero(hero);
  }, [hero]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const newHero = {
      id: hero.length + 1,
      name,
      img,
      phys: Number(phys),
      mag: Number(mag),
      amor: Number(amor),
    };

    const updatedHero = [...hero, newHero];
    saveHero(updatedHero);
    setHero(updatedHero);
    setPopupMessage("Thêm mới thành công");
    setTimeout(() => {
      setPopupMessage("");
    }, 2000);
    setName("");
    setImg("");
    setPhys("");
    setMag("");
    setAmor("");

    console.log(hero);
    console.log("thêm mới thành công");
  };

  const filteredHeroes = hero.filter((supe) =>
    supe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="hero-card">
      {popupMessage && <div className="popup-message">{popupMessage}</div>}
      <Modal
        isShowModal={isShowModal}
        setIsShowModal={setIsShowModal}
        modalType={modalType}
        handleSubmit={handleSubmit}
        saveChangesHero={saveChangesHero}
        name={name}
        setName={setName}
        phys={phys}
        setPhys={setPhys}
        mag={mag}
        setMag={setMag}
        amor={amor}
        setAmor={setAmor}
        img={img}
        setImg={setImg}
        editingHero={editingHero}
        handleChange={handleChange}
      />

      <CreateContainer
        handleShowCreate={handleShowCreate}
        isShowCreate={isShowCreate}
        setName={setName}
        name={name}
        setPhys={setPhys}
        phys={phys}
        setMag={setMag}
        mag={mag}
        setAmor={setAmor}
        amor={amor}
        setImg={setImg}
        img={img}
        handleSubmit={handleSubmit}
        setIsShowCreate={setIsShowCreate}
      />
      <div id="box-title">
        <h1>CHỌN 2 ANH HÙNG ĐỂ GIAO CHIẾN</h1>
      </div>
      <Search searchTerm={searchTerm} handleSearchHero={handleSearchHero} />
      <br />

      <HeroList
        filteredHeroes={filteredHeroes}
        selectedHero={selectedHero}
        handleToggle={handleToggle}
        setEditingHero={setEditingHero}
        handleDeleteHero={handleDeleteHero}
        setModalType={setModalType}
        setIsShowModal={setIsShowModal}
      />

      <br />
      <div className="div-button">
        <button
          ref={battleButtonRef}
          className="battle-button"
          onClick={gotoBattle}
          style={{ marginRight: "10px" }}
          disabled={selectedHero.length !== 2}
        >
          Giao chiến
        </button>
        <button onClick={getRandomHeroes}>
          🎲 Chọn 2 anh hùng ngẫu nhiên{" "}
        </button>
      </div>
    </div>
  );
}
