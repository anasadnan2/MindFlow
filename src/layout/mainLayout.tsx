import React from "react";
import Sidebar from "../components/sidebar";

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <div style={{ flex: 2, borderRight: "1px solid #ddd" }}>
        <Sidebar />
      </div>
      <div
        style={{
          flex: 8,
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          overflowY: "auto",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default MainLayout;
