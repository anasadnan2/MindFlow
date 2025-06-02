import Sidebar from "../components/sidebar";

function Settings() {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 2, borderRight: "1px solid #ddd" }}>
        <Sidebar />
      </div>
      <div style={{ flex: 8, padding: "24px" }}>
        <h1>الإعدادات</h1>
        <p>هنا يمكنك تعديل إعدادات الحساب.</p>
      </div>
    </div>
  );
}

export default Settings;
