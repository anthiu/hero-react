export default function CreateContainer({
  handleShowCreate,
  isShowCreate,
  handleSubmit,
  name,
  setName,
  phys,
  setPhys,
  mag,
  setMag,
  amor,
  setAmor,
  img,
  setImg,
  setIsShowCreate,
}) {
  return (
    <div className="create-container">
      <div>
        <h1>Tạo anh hùng mới</h1>
        <button className="create-hero" onClick={handleShowCreate}>
          <a href="#hero-create"> Nhấn để tạo anh hùng mới</a>
        </button>
      </div>
      {isShowCreate && (
        <div id="hero-create" className="hero-create-container">
          <form onSubmit={handleSubmit} action="">
            <div className="hero-input-form">
              <input
                name="name"
                type="text"
                placeholder="Nhập tên anh hùng"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                name="phys"
                type="number"
                placeholder="Nhập chỉ số vật lý"
                value={phys}
                onChange={(e) => setPhys(e.target.value)}
              />
              <input
                name="mag"
                type="number"
                placeholder="Nhập chỉ số phép thuật"
                value={mag}
                onChange={(e) => setMag(e.target.value)}
                required
              />
              <input
                name="amor"
                type="number"
                placeholder="Nhập chỉ số phòng thủ"
                value={amor}
                onChange={(e) => setAmor(e.target.value)}
                required
              />
              <input
                name="img"
                type="text"
                placeholder="Nhập đường dẫn ảnh"
                value={img}
                onChange={(e) => setImg(e.target.value)}
                required
              />
              <button className="submit-create" type="submit">
                Tạo anh hùng
              </button>
              <button onClick={() => setIsShowCreate(false)}>Đóng</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
