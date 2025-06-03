import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import {
  TextField,
  Typography,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  Button,
  Stack,
  Box,
} from "@mui/material";
import type { SelectChangeEvent } from "@mui/material/Select";
import MainLayout from "../layout/mainLayout";

function AddTask() {
  const [dateValue, setDateValue] = useState<Dayjs | null>(dayjs());
  const [timeValue, setTimeValue] = useState<Dayjs | null>(dayjs());
  const [priority, setPriority] = useState<string>("");
  const [description, setDescription] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPriority(event.target.value);
  };

  const handleGenerateDescription = () => {
    setDescription("This is an AI-generated description...");
  };

  return (
    <MainLayout>
      <Box
        sx={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: 4,
          backgroundColor: "#f7f9fc",
          borderRadius: 4,
          boxShadow: "0 0 15px rgba(0,0,0,0.05)",
        }}
      >
        <Typography variant="h4" fontWeight="700" gutterBottom>
          Add New Task
        </Typography>

        <Stack spacing={3}>
          <TextField label="Task Title" fullWidth />

          <Stack direction="row" spacing={2}>
            <DatePicker
              label="Due Date"
              value={dateValue}
              onChange={(newValue) => setDateValue(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                },
              }}
            />
            <TimePicker
              label="Due Time"
              value={timeValue}
              onChange={(newValue) => setTimeValue(newValue)}
              slotProps={{
                textField: {
                  fullWidth: true,
                },
              }}
            />
          </Stack>

          <FormControl fullWidth>
            <InputLabel>Priority</InputLabel>
            <Select label="Priority" value={priority} onChange={handleChange}>
              <MenuItem value="High">High</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Low">Low</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Task Description"
            multiline
            rows={4}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            fullWidth
          />
          <Button
            variant="outlined"
            onClick={handleGenerateDescription}
            sx={{ alignSelf: "flex-start" }}
          >
            Generate Description
          </Button>

          <Box textAlign="center" mt={3}>
            <Button
              variant="contained"
              sx={{
                px: 6,
                py: 1.5,
                borderRadius: "12px",
                backgroundColor: "#1976d2",
                color: "#fff",
                fontWeight: "bold",
                fontSize: "16px",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Save Task
            </Button>
          </Box>
        </Stack>
      </Box>
    </MainLayout>
  );
}

export default AddTask;
