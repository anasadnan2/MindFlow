import MainLayout from "../layout/mainLayout";
import TaskCard from "../components/TaskCard";
import Typography from "@mui/material/Typography";

function Tasks() {
  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Typography variant="h2" style={{ fontWeight: "700" }}>
            Tasks
          </Typography>
          <Typography variant="h6" style={{ fontWeight: "200" }}>
            Organize and track your work by category.
          </Typography>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: "20px",
          }}
        >
          {/* To Do */}
          <div style={{ flex: 1 }}>
            <Typography variant="h6">🟢 To Do</Typography>
            <TaskCard
              title="Prepare presentation"
              date="2024-03-20"
              priority="Medium"
            />
            <TaskCard
              title="Review project proposal"
              date="2024-03-25"
              priority="High"
            />
          </div>

          {/* In Progress */}
          <div style={{ flex: 1 }}>
            <Typography variant="h6">🟡 In Progress</Typography>
            <TaskCard
              title="Write a blog post"
              date="2024-03-15"
              priority="High"
            />
            <TaskCard
              title="Follow up with clients"
              date="2024-03-28"
              priority="Medium"
            />
          </div>

          {/* Completed */}
          <div style={{ flex: 1 }}>
            <Typography variant="h6">✅ Completed</Typography>
            <TaskCard
              title="Schedule team meeting"
              date="2024-03-22"
              priority="Low"
            />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Tasks;
