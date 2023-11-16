import { Box } from "@mui/material";
import BarChart from "../../components/Barchart";
import Header from "../../components/Header";

function Bar() {
  return (
    <Box m="20px">
      <Header title="Bar Chart" subtitle="Simple Bar Chart" />
      <Box height="75vh">
        <BarChart />
      </Box>
    </Box>
  );
}

export default Bar;
