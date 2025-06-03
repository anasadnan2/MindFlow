import Avatar from "@mui/material/Avatar";
import { Typography, Button } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LightbulbIcon from "@mui/icons-material/Lightbulb";

import avatarImage from "../assets/IMG_0073.jpg";
import { useNavigate, useLocation } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path: string): boolean => location.pathname === path;

  return (
    <div
      style={{
        backgroundColor: "white",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "stretch",
        color: "black",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <Avatar alt="Remy Sharp" src={avatarImage} />
        <Typography variant="h6" style={{ marginLeft: 10, fontWeight: 500 }}>
          ANAS ABU JABER
        </Typography>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          padding: "10PX",
        }}
      >
        <Button
          fullWidth
          onClick={() => navigate("/home")}
          className={`sidebar-button ${isActive("/home") ? "active" : ""}`}
          sx={{
            justifyContent: "flex-start",
            border: "none",
            pl: 2,
            textTransform: "none",
            gap: 1.5,
            fontWeight: isActive("/home") ? 500 : 300,
            color: "black",
            fontFamily: "Manrope, sans-serif",
            bgcolor: isActive("/home") ? "#f0f0f0" : "transparent",
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
        >
          <HomeIcon />
          Home
        </Button>

        <Button
          fullWidth
          className={`sidebar-button ${isActive("/tasks") ? "active" : ""}`}
          onClick={() => navigate("/tasks")}
          sx={{
            justifyContent: "flex-start",
            pl: 2,
            textTransform: "none",
            gap: 1.5,
            border: "none",
            fontWeight: isActive("/tasks") ? 500 : 300,
            color: "black",
            fontFamily: "Manrope, sans-serif",
            bgcolor: isActive("/tasks") ? "#f0f0f0" : "transparent",
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
        >
          <ListAltIcon />
          Tasks
        </Button>

        <Button
          fullWidth
          className={`sidebar-button ${isActive("/add-task") ? "active" : ""}`}
          onClick={() => navigate("/add-task")}
          sx={{
            justifyContent: "flex-start",
            pl: 2,
            textTransform: "none",
            gap: 1.5,
            border: "none",
            fontWeight: isActive("/add-task") ? 500 : 300,
            color: "black",
            fontFamily: "Manrope, sans-serif",
            bgcolor: isActive("/add-task") ? "#f0f0f0" : "transparent",
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
        >
          <AddTaskIcon />
          Add Task
        </Button>

        <Button
          fullWidth
          className={`sidebar-button ${isActive("/Reports") ? "active" : ""}`}
          onClick={() => navigate("/reports")}
          sx={{
            justifyContent: "flex-start",
            pl: 2,
            textTransform: "none",
            gap: 1.5,
            border: "none",
            fontWeight: isActive("/reports") ? 500 : 300,
            color: "black",
            fontFamily: "Manrope, sans-serif",
            bgcolor: isActive("/reports") ? "#f0f0f0" : "transparent",
            "&:hover": {
              bgcolor: "#f5f5f5",
            },
          }}
        >
          <LightbulbIcon />
          Reports
        </Button>
      </div>
    </div>
  );
}

export default Sidebar;
