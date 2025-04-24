export default function EditContainer({
  editingHero,
  setEditingHero,
  saveChangesHero,
  handleChange,
}) {
  return (
    <div>
      {editingHero && (
        <>
          <h2 id="edit-stat">Chỉnh sửa chỉ số anh hùng</h2>
          <div className="hero-container">
            <form onSubmit={saveChangesHero} action="">
              <div className="hero-input-form">
                <input
                  name="name"
                  type="text"
                  placeholder="Nhập tên anh hùng"
                  value={editingHero.name}
                  onChange={handleChange}
                />
                <input
                  name="phys"
                  type="number"
                  placeholder="Nhập chỉ số vật lý"
                  value={editingHero.phys}
                  onChange={handleChange}
                />
                <input
                  name="mag"
                  type="number"
                  placeholder="Nhập chỉ số phép thuật"
                  value={editingHero.mag}
                  onChange={handleChange}
                />
                <input
                  name="amor"
                  type="number"
                  placeholder="Nhập chỉ số phòng thủ"
                  value={editingHero.amor}
                  onChange={handleChange}
                />
                <input
                  name="img"
                  type="text"
                  placeholder="Nhập đường dẫn ảnh"
                  value={editingHero.img}
                  onChange={handleChange}
                />
              </div>
              <div className="button-edit">
                <button type="submit">Lưu thay đổi</button>
                <button onClick={() => setEditingHero(null)}>Hủy</button>
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
}
