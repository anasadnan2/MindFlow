import MainLayout from "../layout/mainLayout";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import LinearProgress from "@mui/material/LinearProgress";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Reports() {
  const cellStyle = {
    background: "#ccc",
    borderRadius: "8px",
    height: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "0 12px",
  };
  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div>
          <Typography variant="h3" style={{ fontWeight: "700" }}>
            📄 Reports
          </Typography>
        </div>
        <div>
          <Typography variant="h5" style={{ fontWeight: "600" }}>
            Total Tasks: 30
          </Typography>
        </div>
        <Divider />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <Typography
            variant="h6"
            style={{ fontWeight: "500", color: "green" }}
          >
            ✅ Completed Tasks : 17
          </Typography>
          <Typography variant="h6" style={{ fontWeight: "500", color: "red" }}>
            ❌ Incompleted Tasks : 13
          </Typography>
        </div>
        <Divider />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <Typography variant="h6" style={{ fontWeight: "500" }}>
              📊 Completion Rate:
            </Typography>
            <div style={{ width: "800px" }}>
              <LinearProgress
                variant="determinate"
                value={40}
                style={{ height: "10px", borderRadius: "5px" }}
              />
            </div>
          </div>
        </div>

        {/* Task Table */}
        <div>
          <div
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              paddingTop: "16px",
              background: "#fff",
            }}
          >
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Task</TableCell>
                  <TableCell>Due Date</TableCell>
                  <TableCell>Priority</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell>Description</TableCell> {/* ✅ New Column */}
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Write a blog post</TableCell>
                  <TableCell>2024-03-15</TableCell>
                  <TableCell>
                    <div style={cellStyle}>High</div>
                  </TableCell>
                  <TableCell>
                    <div style={cellStyle}>In Progress</div>
                  </TableCell>
                  <TableCell>Blog about new tech trends.</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Prepare presentation</TableCell>
                  <TableCell>2024-03-20</TableCell>
                  <TableCell>
                    <div style={cellStyle}>Medium</div>
                  </TableCell>
                  <TableCell>
                    <div style={cellStyle}>To Do</div>
                  </TableCell>
                  <TableCell>Presentation for the client pitch deck.</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Schedule team meeting</TableCell>
                  <TableCell>2024-03-22</TableCell>
                  <TableCell>
                    <div style={cellStyle}>Low</div>
                  </TableCell>
                  <TableCell>
                    <div style={cellStyle}>Completed</div>
                  </TableCell>
                  <TableCell>Recurring weekly sync meeting setup.</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Review project proposal</TableCell>
                  <TableCell>2024-03-25</TableCell>
                  <TableCell>
                    <div style={cellStyle}>High</div>
                  </TableCell>
                  <TableCell>
                    <div style={cellStyle}>To Do</div>
                  </TableCell>
                  <TableCell>Review and edit the initial proposal.</TableCell>
                </TableRow>

                <TableRow>
                  <TableCell>Follow up with clients</TableCell>
                  <TableCell>2024-03-28</TableCell>
                  <TableCell>
                    <div style={cellStyle}>Medium</div>
                  </TableCell>
                  <TableCell>
                    <div style={cellStyle}>In Progress</div>
                  </TableCell>
                  <TableCell>Email follow-ups and check-ins.</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

export default Reports;
