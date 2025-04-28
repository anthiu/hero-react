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
      <div className="create-container-header">
        <h1>Tạo anh hùng mới</h1>
        <button className="create-hero" onClick={handleShowCreate}>
          <a href="#hero-create"> Nhấn để tạo anh hùng mới</a>
        </button>
      </div>
      {isShowCreate && (
        <div id="hero-create" className="hero-create-container">
          <form className="form-hero" onSubmit={handleSubmit} action="">
            <div className="hero-input-form">
              <label htmlFor="name">Tên anh hùng</label>
              <input
                name="name"
                type="text"
                placeholder="Nhập tên anh hùng"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="phys">Chỉ số vật lý</label>
              <input
                name="phys"
                type="number"
                placeholder="Nhập chỉ số vật lý"
                value={phys}
                onChange={(e) => setPhys(e.target.value)}
              />
              <label htmlFor="mag">Chỉ số phép thuật</label>
              <input
                name="mag"
                type="number"
                placeholder="Nhập chỉ số phép thuật"
                value={mag}
                onChange={(e) => setMag(e.target.value)}
                required
              />
              <label htmlFor="amor">Chỉ số phòng thủ</label>
              <input
                name="amor"
                type="number"
                placeholder="Nhập chỉ số phòng thủ"
                value={amor}
                onChange={(e) => setAmor(e.target.value)}
                required
              />
              <label htmlFor="img">Đường dẫn ảnh</label>
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
