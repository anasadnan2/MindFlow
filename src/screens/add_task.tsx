import Sidebar from "../components/sidebar";

function AddTask() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 2, borderRight: "1px solid #ddd" }}>
        <Sidebar />
      </div>
      <div style={{ flex: 8, padding: "24px" }}>
        <h1>إضافة مهمة</h1>
        <p>استخدم هذا النموذج لإضافة مهمة جديدة.</p>
      </div>
    </div>
  );
}

export default AddTask;
