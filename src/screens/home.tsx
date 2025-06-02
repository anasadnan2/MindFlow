import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import TodayIcon from "@mui/icons-material/Today";
import MainLayout from "../layout/mainLayout";

function Home() {
  return (
    <MainLayout>
      {/* Welcome Message */}
      <div>
        <Typography variant="h2" style={{ fontWeight: "700" }}>
          Welcome back, Anas
        </Typography>
      </div>

      {/* Today's Tasks */}
      <div>
        <Card sx={{ minWidth: 275, boxShadow: "none", padding: 2 }}>
          <Typography
            variant="h5"
            style={{ fontWeight: "600", marginBottom: "16px" }}
          >
            Today's Tasks
          </Typography>

          {/* Task 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 0",
            }}
          >
            <div
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TodayIcon sx={{ color: "#555", fontSize: "24px" }} />
            </div>
            <div>
              <Typography
                style={{ fontWeight: 500, marginBottom: 4, fontSize: "18px" }}
              >
                Meeting with team
              </Typography>
              <Typography style={{ color: "#666", fontSize: "15px" }}>
                10:00 AM - 11:00 AM
              </Typography>
            </div>
          </div>

          {/* Task 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 0",
            }}
          >
            <div
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TodayIcon sx={{ color: "#555", fontSize: "24px" }} />
            </div>
            <div>
              <Typography
                style={{ fontWeight: 500, marginBottom: 4, fontSize: "18px" }}
              >
                Lunch with client
              </Typography>
              <Typography style={{ color: "#666", fontSize: "15px" }}>
                1:00 PM - 2:00 PM
              </Typography>
            </div>
          </div>

          {/* Task 3 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 0",
            }}
          >
            <div
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TodayIcon sx={{ color: "#555", fontSize: "24px" }} />
            </div>
            <div>
              <Typography
                style={{ fontWeight: 500, marginBottom: 4, fontSize: "18px" }}
              >
                Project review
              </Typography>
              <Typography style={{ color: "#666", fontSize: "15px" }}>
                3:00 PM - 4:00 PM
              </Typography>
            </div>
          </div>
        </Card>
      </div>
      {/* ---today tasks---- */}

      {/* week tasks */}
      <div>
        <Card sx={{ minWidth: 275, boxShadow: "none", padding: 2 }}>
          <Typography
            variant="h5"
            style={{ fontWeight: "600", marginBottom: "16px" }}
          >
            This Week's Tasks
          </Typography>

          {/* Task 1 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 0",
            }}
          >
            <div
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TodayIcon sx={{ color: "#555", fontSize: "24px" }} />
            </div>
            <div>
              <Typography
                style={{ fontWeight: 500, marginBottom: 4, fontSize: "18px" }}
              >
                Prepare presentation
              </Typography>
              <Typography style={{ color: "#666", fontSize: "15px" }}>
                Monday, 9:00 AM - 10:00 AM
              </Typography>
            </div>
          </div>

          {/* Task 2 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 0",
            }}
          >
            <div
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TodayIcon sx={{ color: "#555", fontSize: "24px" }} />
            </div>
            <div>
              <Typography
                style={{ fontWeight: 500, marginBottom: 4, fontSize: "18px" }}
              >
                Follow up with leads
              </Typography>
              <Typography style={{ color: "#666", fontSize: "15px" }}>
                Tuesday, 2:00 PM - 3:00 PM
              </Typography>
            </div>
          </div>

          {/* Task 3 */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "12px 0",
            }}
          >
            <div
              style={{
                backgroundColor: "#f2f2f2",
                borderRadius: "12px",
                padding: "8px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <TodayIcon sx={{ color: "#555", fontSize: "24px" }} />
            </div>
            <div>
              <Typography
                style={{ fontWeight: 500, marginBottom: 4, fontSize: "18px" }}
              >
                Team brainstorming
              </Typography>
              <Typography style={{ color: "#666", fontSize: "15px" }}>
                Wednesday, 11:00 AM - 12:00 PM
              </Typography>
            </div>
          </div>
        </Card>
      </div>
      {/* ---week tasks----*/}
      {/* AI Tips Section */}
      <div>
        <Typography
          variant="h5"
          style={{ fontWeight: "600", marginBottom: 12 }}
        >
          AI Tips
        </Typography>
        <img
          src="/src/assets/ai-tips.jpg"
          alt="AI Tips"
          style={{
            width: "100%",
            maxWidth: "600px",
            height: "auto",
            borderRadius: "12px",
            margin: "0 auto",
          }}
        />
      </div>

      {/* Motivational Quote */}
      <div>
        <Typography
          variant="h5"
          style={{ fontWeight: "600", marginBottom: 12, marginTop: 20 }}
        >
          Motivational Quote
        </Typography>
        <Card sx={{ borderRadius: "12px", overflow: "hidden" }}>
          <img
            src="/src/assets/MotivationalـQuote.jpeg"
            alt="Motivational Quote"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: "12px",
              margin: "0 auto",
            }}
          />
          <div style={{ padding: "16px" }}>
            <Typography
              style={{ fontStyle: "italic", color: "#333", fontSize: "16px" }}
            >
              "The future depends on what you do today."
            </Typography>
            <Typography
              style={{
                fontWeight: "500",
                color: "#777",
                marginTop: "8px",
              }}
            >
              — Mahatma Gandhi
            </Typography>
          </div>
        </Card>
      </div>
    </MainLayout>
  );
}

export default Home;
