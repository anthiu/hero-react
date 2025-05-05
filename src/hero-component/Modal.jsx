export default function Modal({
  isShowModal,
  setIsShowModal,
  modalType,
  handleSubmit,
  saveChangesHero,
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
  editingHero,
  handleChange,
}) {
  return (
    <div>
      {isShowModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2 className="modal-title">
              {modalType === "create" ? "ANH HÙNG MỚI" : "CHỈNH SỬA ANH HÙNG"}
            </h2>
            <form
              onSubmit={modalType === "create" ? handleSubmit : saveChangesHero}
            >
              <div className="hero-input-form">
                <input
                  name="name"
                  type="text"
                  placeholder="Nhập tên anh hùng"
                  value={modalType === "create" ? name : editingHero?.name}
                  onChange={
                    modalType === "create"
                      ? (e) => setName(e.target.value)
                      : handleChange
                  }
                  required
                />
                <input
                  name="phys"
                  type="number"
                  placeholder="Nhập chỉ số vật lý"
                  value={modalType === "create" ? phys : editingHero?.phys}
                  onChange={
                    modalType === "create"
                      ? (e) => setPhys(e.target.value)
                      : handleChange
                  }
                  required
                />
                <input
                  name="mag"
                  type="number"
                  placeholder="Nhập chỉ số phép thuật"
                  value={modalType === "create" ? mag : editingHero?.mag}
                  onChange={
                    modalType === "create"
                      ? (e) => setMag(e.target.value)
                      : handleChange
                  }
                  required
                />
                <input
                  name="amor"
                  type="number"
                  placeholder="Nhập chỉ số phòng thủ"
                  value={modalType === "create" ? amor : editingHero?.amor}
                  onChange={
                    modalType === "create"
                      ? (e) => setAmor(e.target.value)
                      : handleChange
                  }
                  required
                />
                <input
                  name="img"
                  type="text"
                  placeholder="Nhập đường dẫn ảnh"
                  value={modalType === "create" ? img : editingHero?.img}
                  onChange={
                    modalType === "create"
                      ? (e) => setImg(e.target.value)
                      : handleChange
                  }
                  required
                />
              </div>
              <div className="modal-buttons">
                <button type="submit">Lưu</button>
                <button type="button" onClick={() => setIsShowModal(false)}>
                  Hủy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
