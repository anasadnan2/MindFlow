import Typography from "@mui/material/Typography";

type TaskCardProps = {
  title: string;
  date: string;
  priority: string;
};

export default function TaskCard({ title, date, priority }: TaskCardProps) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "16px",
        marginTop: "10px",
        background: "#f9f9f9",
      }}
    >
      <Typography variant="subtitle1" style={{ fontWeight: "600" }}>
        {title}
      </Typography>
      <Typography variant="body2" style={{ color: "#666" }}>
        Due: {date}
      </Typography>
      <div
        style={{
          marginTop: "8px",
          background: "#eee",
          borderRadius: "6px",
          padding: "4px 8px",
          display: "inline-block",
        }}
      >
        Priority: {priority}
      </div>
    </div>
  );
}
