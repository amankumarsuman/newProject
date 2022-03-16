import { Box, Grid, Paper, TextField, Typography } from "@mui/material";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import { GiphyApi } from "./components/giphyApi/Giphy";
import { Dashboard } from "./components/dashboard/Dashboard";
import { useState } from "react";

function App() {
  const [data, setData] = useState("");

  const handleSetData = (value) => {
    setData(value);
  };
  return (
    <div className="App">
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          "& > :not(style)": {
            m: 1,
            width: "60%",
            margin: "auto",
            // height: 128,
          },
        }}
      >
        <Paper elevation={4}>
          <Dashboard data={data} />
          <Routes>
            {/* <Route path="/" element={
        <Dashboard/>
        }/> */}

            {/* <GiphyApi/> */}

            <Route
              path="gif"
              element={<GiphyApi handleSetData={handleSetData} />}
            />
          </Routes>
          <img src={data} />
        </Paper>
      </Box>
    </div>
  );
}

export default App;
