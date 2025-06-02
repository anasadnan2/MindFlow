import MainLayout from "../layout/mainLayout";

import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function Tasks() {
  return (
    <MainLayout>
      <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
        <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <div>
            <Typography variant="h2" style={{ fontWeight: "700" }}>
              Tasks
            </Typography>
          </div>
          <div>
            <Typography variant="h6" style={{ fontWeight: "200" }}>
              View, search, and filter your tasks.
            </Typography>
          </div>
        </div>
        <div>
          <TextField
            placeholder="🔍 Search"
            variant="outlined"
            style={{ width: "100%" }}
          />
        </div>
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
                <TableCell >Task</TableCell>
                <TableCell>Due Date</TableCell>
                <TableCell>Priority</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Write a blog post </TableCell>
                <TableCell>2024-03-15</TableCell>
                <TableCell>
                  <div
                    style={{
                      background: "#ccc",
                      borderRadius: "8px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 12px",
                    }}
                  >
                    High
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      background: "#ccc",
                      borderRadius: "8px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 12px",
                    }}
                  >
                    In Progress
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Prepare presentation </TableCell>
                <TableCell>2024-03-20 </TableCell>
                <TableCell>
                  <div
                    style={{
                      background: "#ccc",
                      borderRadius: "8px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 12px",
                    }}
                  >
                    Medium
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      background: "#ccc",
                      borderRadius: "8px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 12px",
                    }}
                  >
                    To Do
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Schedule team meeting </TableCell>
                <TableCell>2024-03-22 </TableCell>
                <TableCell>
                  <div
                    style={{
                      background: "#ccc",
                      borderRadius: "8px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 12px",
                    }}
                  >
                    Low
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      background: "#ccc",
                      borderRadius: "8px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 12px",
                    }}
                  >
                    Completed
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Review project proposal </TableCell>
                <TableCell>2024-03-25 </TableCell>
                <TableCell>
                  <div
                    style={{
                      background: "#ccc",
                      borderRadius: "8px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 12px",
                    }}
                  >
                    High
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      background: "#ccc",
                      borderRadius: "8px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 12px",
                    }}
                  >
                    To Do
                  </div>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Follow up with clients </TableCell>
                <TableCell>2024-03-28 </TableCell>
                <TableCell>
                  <div
                    style={{
                      background: "#ccc",
                      borderRadius: "8px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 12px",
                    }}
                  >
                    Medium
                  </div>
                </TableCell>
                <TableCell>
                  <div
                    style={{
                      background: "#ccc",
                      borderRadius: "8px",
                      height: "30px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "0 12px",
                    }}
                  >
                    In Progress
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </MainLayout>
  );
}

export default Tasks;
